/**
 * NordicFysio Anamnesis — cloud backend (Google Apps Script)
 *
 * Runs on the clinic's Gmail account and saves every patient's JSON + PDF
 * straight into the two Google Drive folders below. The tablet does not need
 * a Google login: it only knows this script's Web app address (/exec) and the
 * secret key. The consent text / checkboxes edited in the app's Admin screen
 * are stored here too, so every connected device gets the same version.
 *
 * Setup (once):
 *   1. Paste this file into a new project on https://script.google.com (clinic account).
 *   2. Select "testSetup" and press Run; accept the permissions.
 *      The Execution log shows the account, the two folder names and the SECRET KEY.
 *   3. Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone.
 *   4. In the app: Admin → Connection & settings → paste the /exec address + secret key.
 *
 * The secret key is created automatically and kept in the script's properties
 * (never in this file), so this file can be shared or published safely.
 */

const JSON_FOLDER_ID = '1qCSVZ0HbaIijC3P1KA1hmEOzg9O9F1rj'; // Anamnesis (JSON)
const PDF_FOLDER_ID = '1LaJCEvPiyOUCniZKvEqvFw_rVTyw4KVE';  // Patients consent (PDF)
const CONFIG_FILE_NAME = 'NordicFysio_Anamnesis_Settings.json'; // consent text + checkboxes (in My Drive)

/** Run once from the editor: authorizes Drive access and prints the secret key. */
function testSetup() {
  const secret = getOrCreateSecret_();
  console.log('Account: ' + Session.getEffectiveUser().getEmail());
  console.log('JSON folder: ' + DriveApp.getFolderById(JSON_FOLDER_ID).getName());
  console.log('PDF folder: ' + DriveApp.getFolderById(PDF_FOLDER_ID).getName());
  console.log('Secret key (paste it in the app): ' + secret);
}

/** Run only if the key leaked: every device must then be reconnected with the new key. */
function newSecretKey() {
  PropertiesService.getScriptProperties().deleteProperty('SECRET');
  console.log('New secret key: ' + getOrCreateSecret_());
}

function getOrCreateSecret_() {
  const props = PropertiesService.getScriptProperties();
  let secret = props.getProperty('SECRET');
  if (!secret) {
    secret = Utilities.getUuid().replace(/-/g, '');
    props.setProperty('SECRET', secret);
  }
  return secret;
}

function doGet() {
  return ContentService.createTextOutput('NordicFysio Anamnesis: the connection works. Open the app, not this address.');
}

function doPost(e) {
  let req;
  try {
    req = JSON.parse((e && e.postData && e.postData.contents) || '{}');
  } catch (err) {
    return reply_({ ok: false, error: 'bad-request' });
  }
  const secret = PropertiesService.getScriptProperties().getProperty('SECRET');
  if (!secret) return reply_({ ok: false, error: 'not-set-up' });
  if (req.secret !== secret) return reply_({ ok: false, error: 'unauthorized' });

  try {
    switch (req.action) {
      case 'ping': return reply_(ping_());
      case 'upload': return reply_(upload_(req));
      case 'getConfig': return reply_({ ok: true, config: readConfig_() });
      case 'saveConfig': return reply_(saveConfig_(req.config));
      default: return reply_({ ok: false, error: 'unknown-action' });
    }
  } catch (err) {
    console.error(err);
    return reply_({ ok: false, error: String((err && err.message) || err) });
  }
}

function reply_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function ping_() {
  let jsonFolder, pdfFolder;
  try {
    jsonFolder = DriveApp.getFolderById(JSON_FOLDER_ID).getName();
    pdfFolder = DriveApp.getFolderById(PDF_FOLDER_ID).getName();
  } catch (err) {
    return { ok: false, error: 'folder' };
  }
  return { ok: true, account: Session.getEffectiveUser().getEmail(), jsonFolder: jsonFolder, pdfFolder: pdfFolder };
}

/** Saves the patient's files. A retry of the same patient (same id) within 6 hours is not saved twice. */
function upload_(req) {
  const files = Array.isArray(req.files) ? req.files : [];
  if (!files.length) return { ok: false, error: 'no-files' };
  const patientId = String(req.id || '').slice(0, 100);
  const cache = CacheService.getScriptCache();
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const saved = files.map(function (f) {
      const folderId = f.kind === 'pdf' ? PDF_FOLDER_ID : f.kind === 'json' ? JSON_FOLDER_ID : null;
      if (!folderId) throw new Error('bad-kind');
      const cacheKey = patientId ? 'up_' + patientId + '_' + f.kind : '';
      const existing = cacheKey && cache.get(cacheKey);
      if (existing) return { kind: f.kind, id: existing, duplicate: true };
      const mimeType = f.kind === 'pdf' ? 'application/pdf' : 'application/json';
      const blob = Utilities.newBlob(Utilities.base64Decode(String(f.data || '')), mimeType, safeFileName_(f.name, f.kind));
      const file = DriveApp.getFolderById(folderId).createFile(blob);
      if (cacheKey) cache.put(cacheKey, file.getId(), 21600);
      return { kind: f.kind, id: file.getId() };
    });
    return { ok: true, files: saved };
  } finally {
    lock.releaseLock();
  }
}

function safeFileName_(name, kind) {
  const clean = String(name || '').replace(/[\\\/:*?"<>|\u0000-\u001f]/g, '').trim().slice(0, 150);
  return clean || ('Patient.' + (kind === 'pdf' ? 'pdf' : 'json'));
}

function configFile_() {
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty('CONFIG_FILE_ID');
  if (!id) return null;
  try {
    const file = DriveApp.getFileById(id);
    return file.isTrashed() ? null : file;
  } catch (err) {
    return null;
  }
}

function readConfig_() {
  const file = configFile_();
  if (!file) return null;
  try {
    return JSON.parse(file.getBlob().getDataAsString('UTF-8'));
  } catch (err) {
    return null;
  }
}

function saveConfig_(config) {
  if (!config || !Array.isArray(config.blocks)) return { ok: false, error: 'bad-config' };
  const text = JSON.stringify(config, null, 2);
  if (text.length > 2000000) return { ok: false, error: 'too-large' };
  let file = configFile_();
  if (file) {
    file.setContent(text);
  } else {
    file = DriveApp.createFile(CONFIG_FILE_NAME, text, MimeType.PLAIN_TEXT);
    PropertiesService.getScriptProperties().setProperty('CONFIG_FILE_ID', file.getId());
  }
  return { ok: true };
}

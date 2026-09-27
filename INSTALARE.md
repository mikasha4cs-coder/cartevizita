# NordicFysio Anamnesis — instalare pe tabletă (fără Gmail pe tabletă)

Ce e în acest repo:

- `netlify/` — aplicația (fostul `AnamnesisFinal.html`, acum `netlify/index.html`) + fișierele pentru instalare pe tabletă. **Acesta e folderul care se trage pe Netlify.**
- `apps-script/Code.gs` — scriptul care salvează PDF-ul și JSON-ul în Google Drive-ul clinicii.

Cheia secretă **nu** e în fișiere: o generează Google la pasul 1.5, deci repo-ul poate rămâne public.

---

## Partea 0: descarcă fișierele pe PC

1. Deschide <https://github.com/mikasha4cs-coder/cartevizita/archive/refs/heads/claude/quirky-mendel-ms933d.zip> → se descarcă un ZIP.
2. Click dreapta pe ZIP → **Extract All**. Apare un folder care conține `netlify` și `apps-script`.
3. Nu mai folosi fișierele vechi din `C:\Users\mikas\Desktop\Utile\EsiReg` — nu amesteca versiunile.

## Partea 1: Apps Script (pe PC, ~10 minute)

1. Deschide `apps-script\Code.gs` cu Notepad (click dreapta → Open with → Notepad). Ctrl+A, Ctrl+C.
2. În Chrome, **logat cu contul clinicii**, mergi la <https://script.google.com> → **New project**.
3. Sus, click pe „Untitled project” → scrie `NordicFysio Upload` → Rename.
4. Selectează tot codul existent (`function myFunction() {…}`) cu Ctrl+A, lipește cu Ctrl+V, salvează cu Ctrl+S.
5. În bara de sus, lângă „Run” și „Debug”, alege `testSetup` și apasă **▶ Run**.
6. Apare „Authorization required”:
   - **Review permissions** → alege Gmail-ul clinicii;
   - la „Google hasn't verified this app” apasă **Advanced** → **Go to NordicFysio Upload (unsafe)**;
   - bifează tot („Select all”) → **Continue**.

   Avertismentul e normal pentru orice script personal care lucrează cu Drive-ul.
7. Jos, în „Execution log”, trebuie să apară:
   - `Account: …@gmail.com`
   - `JSON folder: …`
   - `PDF folder: …`
   - `Secret key (paste it in the app): …` → **copiază cheia într-un Notepad.**

   Dacă apare „No item with the given ID could be found”, ești pe alt cont decât cel care deține folderele.
8. Dreapta sus: **Deploy** → **New deployment** → la „Select type” iconița ⚙ → **Web app**:
   - Description: `v1`
   - Execute as: **Me**
   - Who has access: **Anyone** (NU „Anyone with Google account”)

   Apasă **Deploy** (dacă cere din nou autorizare, repetă pasul 6).
9. Copiază **Web app URL** (`https://script.google.com/macros/s/…/exec`) în Notepad → Done.
   Verificare: dacă deschizi adresa în browser, apare „NordicFysio Anamnesis: the connection works…”.

Dacă modifici vreodată scriptul: Deploy → Manage deployments → ✏️ → Version: **New version** → Deploy. Adresa rămâne aceeași.
Dacă pierzi cheia: rulează din nou `testSetup` (afișează aceeași cheie). Dacă a ajuns la cine nu trebuie: rulează `newSecretKey` și reconectează toate dispozitivele.

## Partea 2: Netlify (pe PC, ~5 minute)

1. Mergi la <https://app.netlify.com> și loghează-te sau fă-ți cont (orice email).
2. Pe pagina Projects: **Add new project** → **Deploy manually**.
3. Trage folderul `netlify` (din folderul dezarhivat) în zona de drop. **Doar** folderul `netlify`.
4. În câteva secunde apare „Published” și o adresă de forma `https://nume-aleator.netlify.app`. O poți schimba din Project configuration → Change project name (de ex. `nordicfysio-anamnesis`).
5. Test pe PC: deschide adresa. Trebuie să apară ecranul cu lacăt „This device is not connected”, deci merge.

Pentru termeni și bife **nu** mai e nevoie de Netlify. Deploy nou doar dacă se schimbă codul aplicației: proiect → **Deploys** → tragi din nou folderul `netlify`.

## Partea 3: tableta Android (fără Gmail)

1. Trimite-ți adresa `/exec` și cheia secretă (de ex. un email pe care îl deschizi pe tabletă). Șterge-l după configurare.
2. Chrome pe tabletă → adresa Netlify → meniul ⋮ → **Add to Home screen** / **Install app** → **Install**.
3. Deschide aplicația de pe ecranul principal → **Unlock (admin)** → parola `importquesada` → se deschide „Connection & settings”.
4. Lipește adresa `/exec` și cheia → **Save & test connection**. Trebuie să apară „Connected”, Gmail-ul clinicii și numele celor două foldere.
5. Tot acolo, la **Admin password**, pune imediat o parolă nouă (cea veche e vizibilă pe GitHub, pentru că repo-ul e public). Parola nouă ajunge automat pe toate dispozitivele conectate. Dacă o uiți, poți scrie cheia secretă în locul parolei.
6. **← Back to form** → completează un pacient de test → I AGREE → mesajul „…sent to the clinic's cloud” → verifică în Drive că au apărut PDF-ul și JSON-ul, apoi șterge-le.
7. Fixare aplicație: Setări Android → Securitate (sau „Securitate și confidențialitate → Alte setări”) → **Fixare aplicație / Pin windows** → Activat + „Solicită PIN la anulare”. Deschide aplicația → butonul Recente (sau glisează în sus și ține) → atinge iconița aplicației de deasupra ferestrei → **Fixează**. Ieșire: ții apăsat Înapoi + Recente (sau glisezi în sus și ții) → PIN.
8. Opțional: Setări → Afișaj → Timp expirare ecran mai lung; tableta ținută la încărcat.

**Nu șterge datele Chrome pe tabletă**: acolo sunt conexiunea și fișele care încă așteaptă upload.

Aceeași adresă `/exec` și aceeași cheie merg pe toate dispozitivele: tabletă, PC sau a doua tabletă.

---

## Intrarea în Admin

Butonul ⚙ din bara de sus, sau ții apăsat 2 secunde pe logo-ul „NordicFysio”, sau Ctrl+Q pe PC → parola.
Admin-ul se blochează singur când apeși „← Back to form”.

## Termeni și bife: le schimbați singuri, fără update

Admin → **Terms & checkboxes**:

- **Page 1** = formularul, chiar deasupra semnăturii. **Page 2** = ecranul cu „I AGREE”.
- Butoanele **+ Text / + Checkbox / + Title** apar între blocuri: blocul nou se pune exact acolo.
- **↑ ↓** mută blocul în pagină, **⇄** îl mută pe cealaltă pagină, **🗑** îl șterge.
- Fiecare bloc are 3 câmpuri: 🇬🇧 🇪🇸 🇫🇷. Dacă o limbă e goală, se afișează textul englezesc. În PDF apare mereu textul englezesc (ca până acum).
- La bife:
  - **Mandatory**: pacientul nu poate continua fără să o bifeze;
  - **Group A/B/C/D**: dintr-un grup se poate bifa doar una. Email / WhatsApp / Poștă sunt în grupul A, ca înainte; alege „— (independent)” dacă vrei să se poată bifa mai multe;
  - **Name in the JSON file**: lasă-l gol, se completează automat (de ex. `ConsentIHaveReadAndAccept`). Cele 3 vechi rămân `ConsentEmail`, `ConsentWhatsApp`, `ConsentPostal`.
- **Preview** arată cum vede pacientul. **Save** salvează pe dispozitiv și în cloud; celelalte tablete primesc schimbarea la următoarea deschidere sau în maximum ~5–7 minute.
- **Export to file / Import from file** = copie de siguranță. **Restore original text** = înapoi la textul NordicFysio original.
- Mai comod: editează de pe PC (adresa Netlify în Chrome, conectat cu aceeași adresă `/exec` și cheie).
- Fiecare PDF păstrează exact textul și bifele pe care le-a văzut pacientul când a semnat, chiar dacă textul se schimbă ulterior.
- Termenii sunt ținuți în fișierul `NordicFysio_Anamnesis_Settings.json` din My Drive-ul clinicii. Nu-l șterge.

## Fără internet

Fișa se salvează pe tabletă și se urcă automat când revine internetul. „⏳ N” în bara de sus arată câte așteaptă. Poți forța din Admin → Patients → **Upload now**.

## Probleme

| Mesaj | Cauză |
|---|---|
| „The secret key is wrong” | cheia copiată greșit; ia-o din nou din Execution log (`testSetup`) |
| „Could not reach the script” | fără internet, adresa nu se termină în `/exec`, sau deployment-ul nu are „Anyone” |
| „cannot open the Drive folders” | scriptul e făcut pe alt cont decât cel care deține folderele |
| Am modificat Code.gs și nu se vede | Manage deployments → ✏️ → New version |

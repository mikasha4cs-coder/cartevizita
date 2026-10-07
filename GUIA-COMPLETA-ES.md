# NordicFysio Anamnesis — guía completa (tableta + ordenador)

Aplicación **v1.2** (28.09.2026) · Script de Google **v1.1** · Guía actualizada el 07.10.2026

Esta guía cubre **todo el recorrido**, de principio a fin:

- **Parte A:** instalar la aplicación en una tableta Android.
- **Parte B:** instalar en el ordenador el marcador que pasa los datos del paciente al programa de la clínica.
- **Parte C:** el uso diario.

El script de Google y Netlify ya están configurados: no hay que tocarlos.

## Cómo funciona

<p class="flow">📱 <b>Tableta</b> → ☁️ <b>Google Drive</b> → 💻 <b>Ordenador</b> → 🔖 <b>Marcador</b> → 🏥 <b>Programa de la clínica</b></p>

1. **Tableta (Android):** el paciente rellena el formulario, firma y pulsa **ACEPTO**. La tableta no necesita cuenta de Google.
2. **Google Drive de la clínica:** el **JSON** del paciente llega a la carpeta **Anamnesis** y el **PDF** firmado, a **Patients consent**.
3. **Ordenador:** Google Drive para escritorio copia esos archivos al ordenador.
4. **Marcador «Importar paciente»:** lee el JSON y rellena la ficha de paciente nuevo en el programa de la clínica.

> ⚠ **El marcador solo funciona en el ordenador** (Chrome o Edge, en Windows o Mac). **No funciona en Android ni en la tableta.** Se instala **una vez en cada ordenador** donde se use el programa de la clínica.

## Datos de la clínica

Ten estos datos a mano: se copian y se pegan en la tableta (paso A3).

**Dirección de la aplicación**

`https://______________.netlify.app`

**Dirección del script** (termina en `/exec`)

`https://script.google.com/macros/s/…/exec`

**Clave secreta** (32 letras y números)

`________________________________`

**Contraseña inicial de administrador:** `importquesada`. Solo vale en una tableta nueva, antes de conectarla; después la tableta recibe sola la contraseña de la clínica.

Si ya hay una tableta funcionando, también puedes ver los tres datos en ella: **⚙** → contraseña → pestaña **Conexión y ajustes**.

## Parte A — Tableta nueva

**Necesitas:** una tableta Android con Wi-Fi y **Google Chrome** (no uses «Samsung Internet»). Tiempo: unos 10 minutos.

Envía los tres datos de arriba a la tableta (por correo o WhatsApp) para poder **copiarlos y pegarlos**. **Al terminar, borra ese mensaje** y no dejes la clave escrita en papel junto a la tableta.

### A1 — Abrir la aplicación en Chrome

1. Abre **Chrome** y escribe la dirección de la aplicación: `https://______________.netlify.app`
2. ✅ Debe aparecer un candado 🔒 con el texto *«This device is not connected»* y, arriba a la izquierda, junto a «Anamnesis», la etiqueta **v1.2**.
3. Toca la bandera **🇪🇸** (arriba a la derecha) para ver la aplicación en español. El candado dirá *«Este dispositivo no está conectado»*.

### A2 — Instalarla como aplicación

1. En Chrome, toca el menú **⋮** (arriba a la derecha) → **Añadir a pantalla de inicio** (o **Instalar aplicación**) → **Instalar**.
2. En la pantalla de inicio aparece el icono **Anamnesis** (un portapapeles verde).
3. Cierra Chrome y abre la aplicación **desde ese icono**. Vuelve a tocar 🇪🇸 si aparece en inglés.

### A3 — Conectarla a la nube de la clínica

1. Toca **Desbloquear (admin)**.
2. En «Se requiere contraseña de administrador» escribe la contraseña inicial **`importquesada`** → **OK**.
    - En una tableta nueva todavía vale la contraseña inicial. En cuanto se conecta, recibe sola la contraseña de la clínica (la misma que en la otra tableta).
3. Se abre la pestaña **Conexión y ajustes**.
4. En **Dirección de la aplicación web (/exec)** pega la **dirección del script** (la que termina en `/exec`).
5. En **Clave secreta** pega la clave.
6. Toca **Guardar y probar conexión**.
7. ✅ Debe aparecer:
    - **Conectado**
    - **Cuenta:** el Gmail de la clínica
    - **Carpetas:** Anamnesis · Patients consent
    - **Aplicación v1.2 (2026-09-28) · Script de Google v1.1**, sin el símbolo ⚠
8. **No cambies la contraseña de administrador.** La tableta copia sola la contraseña de la clínica y también los términos y casillas.

### A4 — Comprobar los términos y casillas

1. Toca la pestaña **Términos y casillas**.
2. ✅ Debe aparecer el mismo texto que en la otra tableta. Si no aparece, cierra la aplicación, vuelve a abrirla y espera unos segundos.
3. No toques nada aquí: los términos se cambian desde una sola tableta y llegan solos a las demás.

### A5 — Prueba completa

1. Arriba, en la zona de administración, toca **🧪 Rellenar paciente de prueba**. El formulario se rellena solo (paciente «TEST Prueba», con firma).
2. Toca **Siguiente** → **ACEPTO**.
3. ✅ Debe aparecer: *«Ficha del paciente guardada y enviada a la nube de la clínica.»*
4. En Google Drive de la clínica (desde el ordenador) comprueba:
    - `Patient_TEST_Prueba.json` en la carpeta **Anamnesis**;
    - `Patient_TEST_Prueba_….pdf` en la carpeta **Patients consent**.
5. Abre el PDF y comprueba que está todo bien. Si el marcador del ordenador ya está instalado (Parte B), aprovecha este paciente de prueba para probarlo (paso B3).
6. Al terminar, **borra los dos archivos TEST**.

### A6 — Fijar la aplicación (para que los pacientes no puedan salir)

1. **Ajustes** de Android → **Seguridad** (en Samsung: **Seguridad y privacidad → Más ajustes de seguridad**) → **Fijar aplicaciones** / **Fijar ventanas** → **activar**, y activa también **«Pedir PIN para dejar de fijar»**.
2. Abre la aplicación → botón **Recientes** (el cuadrado, o desliza hacia arriba y mantén) → toca el **icono de la aplicación** encima de su ventana → **Fijar**.
3. Para salir de la aplicación fijada: mantén pulsados **Atrás + Recientes** a la vez (o desliza hacia arriba y mantén) → introduce el PIN.

### A7 — Recomendaciones

- **Ajustes → Pantalla → Tiempo de espera de pantalla:** el máximo. Deja la tableta en el cargador.
- **No borres los datos de Chrome ni desinstales la aplicación:** se perdería la conexión y las fichas que aún no se han subido.
- **Sin internet** la ficha se guarda en la tableta y se sube sola cuando vuelve la conexión. Arriba aparece «⏳ 1» mientras hay fichas pendientes. Para forzar la subida: ⚙ → **Pacientes** → **Subir ahora**.

### Administración: entrar y salir

- **Entrar:** botón **⚙** arriba, o mantener pulsado el logo «NordicFysio» 2 segundos → contraseña de la clínica.
- **Salir:** **← Volver al formulario**. La administración se bloquea sola.
- **Contraseña olvidada:** en una tableta ya conectada se puede escribir la **clave secreta** en lugar de la contraseña.
- **Versión:** siempre visible arriba (v1.2) y en la administración, arriba a la derecha.

## Parte B — Ordenador: el marcador «Importar paciente»

> ⚠ **Solo en el ordenador.** Funciona en **Chrome o Edge** (Windows o Mac). **No funciona en Android ni en la tableta:** allí no están el Google Drive de la clínica ni el programa. Se instala **una vez en cada ordenador**.

**Qué hace:** lee el JSON del paciente (carpeta **Anamnesis**) y rellena la ficha de **paciente nuevo** del programa de la clínica. Lo que se rellena se pone en verde.

**Qué necesitas:** Chrome (o Edge) en el ordenador y el archivo **`Instalar-marcador-PC.html`**, que se entrega junto con esta guía. Si no lo tienes, el código completo está en el **Anexo**, al final de la versión PDF de esta guía.

### B1 — Mostrar la barra de marcadores

Pulsa **Ctrl + Mayús + B** (en Mac: **⌘ + Mayús + B**). Debe aparecer una barra debajo de la dirección. Si desaparece, vuelve a pulsarlo. También: menú **⋮** → **Marcadores y listas** → **Mostrar barra de marcadores**.

### B2 — Instalar el marcador (método fácil: arrastrar)

1. Abre el archivo **`Instalar-marcador-PC.html`** con doble clic (se abre en Chrome).
2. Con el ratón, **mantén pulsado** el botón verde **🔖 Importar paciente** y **arrástralo** hasta la barra de marcadores. Suéltalo allí.
3. ✅ Debe aparecer **Importar paciente** en la barra de marcadores.

**Si arrastrar no funciona: copiar y pegar**

1. En `Instalar-marcador-PC.html` pulsa **Copiar código**. (Sin ese archivo: copia el código del **Anexo** de la versión PDF.)
2. Clic derecho en un espacio vacío de la barra de marcadores → **Añadir página…**
3. En **Nombre** escribe `Importar paciente`. En **URL** pega el código con **Ctrl + V**: debe empezar por `javascript:(function(){`.
4. Pulsa **Guardar**.

> ⚠ El código se pega **en el campo URL del marcador**. No lo pegues en la barra de direcciones ni en la consola del navegador: allí da error.

Si ya tienes un marcador con este código (por ejemplo uno llamado «Script»), **no hace falta instalarlo otra vez**. Para actualizarlo: clic derecho sobre él → **Editar…** → pega el código en **URL** → **Guardar**.

Si en ese Chrome has iniciado sesión con la sincronización de marcadores activada, el marcador aparece solo en tus otros ordenadores; si no, repite este proceso en cada ordenador.

### B3 — Probarlo

1. En el programa de la clínica, abre la ficha de **paciente nuevo** (el formulario vacío).
2. Pulsa el marcador **Importar paciente** de la barra.
3. Se abre una ventana para elegir un archivo. Ve a la carpeta **Anamnesis** de Google Drive (en el Explorador de archivos: **Google Drive → Mi unidad → Anamnesis**, o la carpeta del ordenador que tengáis sincronizada con Drive) y elige el JSON del paciente: `Patient_Nombre_Apellido.json`. Para la prueba: `Patient_TEST_Prueba.json`. Si hay varios con el mismo nombre, ordena por **Fecha de modificación** y elige el más reciente.
4. ✅ Los campos que se han podido rellenar se ponen **en verde**: nombre, apellidos, NIE/DNI, email, móvil, dirección, fecha de nacimiento, nacionalidad, idioma, sexo, provincia y población.
5. Si el prefijo telefónico corresponde a varios países (por ejemplo +1, +7, +39, +44, +61), aparece una ventana con una lista numerada: escribe el **número** del país correcto y pulsa **Aceptar**.
6. **Revisa los datos** antes de guardar la ficha. Lo que no se haya podido rellenar queda en blanco: complétalo a mano. El **tipo de documento** también se elige solo: compruébalo.

### B4 — Si el marcador no funciona

| Problema | Qué hacer |
|---|---|
| Al pulsar el marcador no pasa nada | Comprueba que estás en la ficha de **paciente nuevo** del programa y vuelve a pulsar. Si sigue igual, instala el marcador otra vez (B2). En **Editar…**, la URL debe empezar por `javascript:(function(){`. |
| Aparece «Error JSON» | Has elegido un archivo que no es el JSON de un paciente (por ejemplo, el PDF). Elige el `.json` de la carpeta **Anamnesis**. |
| Algunos campos quedan vacíos | Es normal si el programa no tiene exactamente esa opción en su lista, o si la ficha se hizo con una versión anterior a la v1.2 (en español y francés faltan más campos). Complétalos a mano. |
| No encuentro la carpeta Anamnesis en el ordenador | Comprueba que **Google Drive para escritorio** está abierto y sincronizando. O descarga el JSON desde drive.google.com (carpeta **Anamnesis**) y elígelo desde **Descargas**. |
| Funciona en el ordenador, pero no en la tableta | Es lo normal: el marcador **solo funciona en el ordenador**. |

## Parte C — Uso diario, de principio a fin

1. **Tableta:** el paciente rellena el formulario → firma → **Siguiente** → marca las casillas → **ACEPTO**. Aparece *«Ficha del paciente guardada y enviada a la nube de la clínica.»*
2. **Google Drive:** en unos segundos aparecen `Patient_Nombre_Apellido.json` (carpeta **Anamnesis**) y `Patient_Nombre_Apellido_AAAAMMDD_HHMM.pdf` (carpeta **Patients consent**).
3. **Ordenador:** con **Google Drive para escritorio** abierto, los archivos llegan a las carpetas del ordenador.
4. **Programa de la clínica:** abre la ficha de **paciente nuevo** → pulsa el marcador **Importar paciente** → elige el JSON → revisa los datos → guarda.
5. **Sin internet en la tableta:** la ficha se guarda en la tableta y se envía sola cuando vuelve la conexión («⏳ 1» arriba mientras espera). No hay que hacer nada.

## Versiones

| Componente | Versión | Dónde se ve |
|---|---|---|
| Aplicación (tableta) | **v1.2** · 28.09.2026 | Arriba, junto a «Anamnesis», y en la administración (arriba a la derecha) |
| Script de Google | **v1.1** | En la administración, arriba a la derecha («Script de Google v1.1») |
| Marcador (ordenador) | Código revisado el 07.10.2026 con la aplicación v1.2 | — |

## Si algo no funciona (tableta)

| Mensaje o problema | Qué hacer |
|---|---|
| «La clave secreta no es correcta.» | Copia de nuevo la clave, sin espacios delante ni detrás. |
| «No se pudo contactar con el script…» | Comprueba el Wi-Fi y que la dirección termina en `/exec`. |
| «…no puede abrir las carpetas de Drive» | Avisa al responsable: el script no está en la cuenta de la clínica. |
| ⚠ «El script de Google es más antiguo que esta aplicación…» | Avisa al responsable: hay que actualizar el script (Code.gs). |
| «¡Contraseña incorrecta!» antes de conectar | En una tableta nueva usa la contraseña inicial `importquesada`. |
| Arriba no pone **v1.2** | Chrome → ⋮ → **Configuración → Configuración de sitios → Todos los sitios** → la dirección `….netlify.app` → **Borrar y restablecer**, desinstala el icono y vuelve al paso A1. |

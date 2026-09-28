# NordicFysio Anamnesis — instalar la aplicación en una tableta nueva

Versión de la aplicación: **v1.2** (28.09.2026) · Tiempo necesario: unos 10 minutos

Esta guía sirve para añadir **otra tableta** cuando la clínica ya tiene la aplicación funcionando (el script de Google y Netlify ya están configurados). La tableta **no necesita cuenta de Google (Gmail)**.

## Antes de empezar

Necesitas:

1. Una tableta Android con Wi-Fi y **Google Chrome** (no uses el navegador «Samsung Internet»).
2. Estos tres datos:

    - **Dirección de la aplicación:** `https://______________.netlify.app`
    - **Dirección del script** (termina en `/exec`): `https://script.google.com/macros/s/…/exec`
    - **Clave secreta** (32 letras y números)

    Los dos últimos se pueden ver en la tableta que ya funciona: botón **⚙** → contraseña → pestaña **Conexión y ajustes**. También los tiene el responsable de la aplicación.

3. Envía los tres datos a la tableta nueva (por correo o WhatsApp) para poder **copiarlos y pegarlos**. Al terminar, borra ese mensaje. No dejes la clave escrita en papel junto a la tableta.

## Paso 1 — Abrir la aplicación en Chrome

1. Abre **Chrome** y escribe la dirección de la aplicación (`….netlify.app`).
2. ✅ Debe aparecer un candado 🔒 con el texto *«This device is not connected»* y, arriba a la izquierda, junto a «Anamnesis», la etiqueta **v1.2**.
3. Toca la bandera **🇪🇸** (arriba a la derecha) para ver la aplicación en español. El candado dirá *«Este dispositivo no está conectado»*.

## Paso 2 — Instalarla como aplicación

1. En Chrome, toca el menú **⋮** (arriba a la derecha) → **Añadir a pantalla de inicio** (o **Instalar aplicación**) → **Instalar**.
2. En la pantalla de inicio aparece el icono **Anamnesis** (un portapapeles verde).
3. Cierra Chrome y abre la aplicación **desde ese icono**. Vuelve a tocar 🇪🇸 si aparece en inglés.

## Paso 3 — Conectarla a la nube de la clínica

1. Toca **Desbloquear (admin)**.
2. En «Se requiere contraseña de administrador» escribe la contraseña inicial **`importquesada`** → **OK**.
    - En una tableta nueva todavía vale la contraseña inicial. En cuanto se conecta, recibe sola la contraseña de la clínica (la misma que en la otra tableta).
3. Se abre la pestaña **Conexión y ajustes**.
4. En **Dirección de la aplicación web (/exec)** pega la dirección que termina en `/exec`.
5. En **Clave secreta** pega la clave.
6. Toca **Guardar y probar conexión**.
7. ✅ Debe aparecer:
    - **Conectado**
    - **Cuenta:** el Gmail de la clínica
    - **Carpetas:** Anamnesis · Patients consent
    - **Aplicación v1.2 (2026-09-28) · Script de Google v1.1**, sin el símbolo ⚠
8. **No cambies la contraseña de administrador.** La tableta copia sola la contraseña de la clínica y también los términos y casillas.

## Paso 4 — Comprobar los términos y casillas

1. Toca la pestaña **Términos y casillas**.
2. ✅ Debe aparecer el mismo texto que en la otra tableta. Si no aparece, cierra la aplicación, vuelve a abrirla y espera unos segundos.
3. No toques nada aquí: los términos se cambian desde una sola tableta y llegan solos a las demás.

## Paso 5 — Prueba completa

1. Arriba, en la zona de administración, toca **🧪 Rellenar paciente de prueba**. El formulario se rellena solo (paciente «TEST Prueba», con firma).
2. Toca **Siguiente** → **ACEPTO**.
3. ✅ Debe aparecer: *«Ficha del paciente guardada y enviada a la nube de la clínica.»*
4. En Google Drive de la clínica (desde el ordenador) comprueba:
    - `Patient_TEST_Prueba.json` en la carpeta **Anamnesis**;
    - `Patient_TEST_Prueba_….pdf` en la carpeta **Patients consent**.
5. Abre el PDF, comprueba que está todo bien y **borra los dos archivos TEST**.

## Paso 6 — Fijar la aplicación (para que los pacientes no puedan salir)

1. **Ajustes** de Android → **Seguridad** (en Samsung: **Seguridad y privacidad → Más ajustes de seguridad**) → **Fijar aplicaciones** / **Fijar ventanas** → **activar**, y activa también **«Pedir PIN para dejar de fijar»**.
2. Abre la aplicación → botón **Recientes** (el cuadrado, o desliza hacia arriba y mantén) → toca el **icono de la aplicación** encima de su ventana → **Fijar**.
3. Para salir de la aplicación fijada: mantén pulsados **Atrás + Recientes** a la vez (o desliza hacia arriba y mantén) → introduce el PIN.

## Paso 7 — Recomendaciones

- **Ajustes → Pantalla → Tiempo de espera de pantalla:** el máximo. Deja la tableta en el cargador.
- **No borres los datos de Chrome ni desinstales la aplicación:** se perdería la conexión y las fichas que aún no se han subido.
- **Sin internet** la ficha se guarda en la tableta y se sube sola cuando vuelve la conexión. Arriba aparece «⏳ 1» mientras hay fichas pendientes. Para forzar la subida: ⚙ → **Pacientes** → **Subir ahora**.

## Uso diario de la administración

- **Entrar:** botón **⚙** arriba, o mantener pulsado el logo «NordicFysio» 2 segundos → contraseña de la clínica.
- **Salir:** **← Volver al formulario**. La administración se bloquea sola.
- **Contraseña olvidada:** en una tableta ya conectada se puede escribir la **clave secreta** en lugar de la contraseña.
- **Versión:** siempre visible arriba (v1.2) y en la administración, arriba a la derecha.

## Si algo no funciona

| Mensaje o problema | Qué hacer |
|---|---|
| «La clave secreta no es correcta.» | Copia de nuevo la clave, sin espacios delante ni detrás. |
| «No se pudo contactar con el script…» | Comprueba el Wi-Fi y que la dirección termina en `/exec`. |
| «…no puede abrir las carpetas de Drive» | Avisa al responsable: el script no está en la cuenta de la clínica. |
| ⚠ «El script de Google es más antiguo que esta aplicación…» | Avisa al responsable: hay que actualizar el script (Code.gs). |
| «¡Contraseña incorrecta!» antes de conectar | En una tableta nueva usa la contraseña inicial `importquesada`. |
| Arriba no pone **v1.2** | Chrome → ⋮ → **Configuración → Configuración de sitios → Todos los sitios** → la dirección `….netlify.app` → **Borrar y restablecer**, desinstala el icono y vuelve al Paso 1. |

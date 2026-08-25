## 1. Estructura base del proyecto

- [x] 1.1 Crear la carpeta `tico-time-landing-page/` en la raíz del repo con `index.html`, `css/styles.css`, `js/main.js`, `assets/video/`, `assets/img/`
- [x] 1.2 Copiar `relojloop.mp4` desde el bundle de diseño (`tico-time-landing/tico-time-landing-page/project/uploads/`) a `assets/img/video/`
- [x] 1.3 Crear imágenes placeholder genéricas para los 6 mods en `assets/img/` (nombre del mod superpuesto), con nombres de archivo documentados
- [x] 1.4 Configurar `index.html` base: `<head>` con meta viewport, fuentes de Google Fonts (Instrument Serif, Manrope), enlace a `css/styles.css` y `js/main.js`

## 2. Estilos base y sistema visual

- [x] 2.1 Definir variables/constantes de color, tipografía y espaciado en `styles.css` (fondo `#0B0B0C`, texto `#EDE9E1`, acento `#C9A24A`, etc.) según el mockup
- [x] 2.2 Estilos base: `body`, enlaces, selección de texto, placeholders de inputs, `scroll-behavior: smooth`

## 3. Intro de bienvenida

- [x] 3.1 Maquetar la pantalla de intro a pantalla completa (video, degradado, logo, lema, botón "Entrar")
- [x] 3.2 Implementar en `main.js`: reproducción del video en loop, cierre automático por temporizador, cierre manual con el botón "Entrar", transición de opacidad al cerrar

## 4. Navegación

- [x] 4.1 Maquetar la barra de navegación fija (logo, enlaces a Colección/Contacto, botón Reservar)
- [x] 4.2 Verificar que los enlaces de ancla hacen scroll suave a su sección

## 5. Sección hero

- [x] 5.1 Maquetar el hero: video de fondo, degradados, título, descripción, botones CTA, bloque de 3 cifras
- [x] 5.2 Implementar en `main.js` la lógica de loop limitado del video del hero (se repite N veces y luego se detiene)

## 6. Sección de colección

- [x] 6.1 Maquetar la cuadrícula de 6 tarjetas (foto, nombre, specs, precio) con los datos reales del mockup (Sargento Verde, Pura Vida, Medianoche, Arenal, Cafetal, Cero Uno)
- [x] 6.2 Aplicar estados hover según el mockup (borde dorado al pasar el mouse)

## 7. Formulario de reserva

- [x] 7.1 Maquetar el formulario (nombre, teléfono, selector de proyecto, botón "Quiero mi mod") y el bloque de confirmación
- [x] 7.2 Implementar validación (no envía si falta nombre o teléfono)
- [x] 7.3 Implementar cambio de vista formulario ↔ confirmación, incluyendo "Enviar otro"
- [x] 7.4 Pedir a Allan el número de WhatsApp de Tico Time y crear el enlace `wa.me` con mensaje pre-armado (nombre, teléfono, proyecto) — número configurado (+506 8640-3635), link verificado
- [x] 7.5 Pedir a Allan que cree una cuenta gratuita en Formspree y comparta el endpoint del formulario de reserva; conectar el envío por `fetch` — endpoint `https://formspree.io/f/maewroop` conectado (cuenta creada con crticotime@gmail.com)
- [x] 7.6 Manejar el caso en que el envío a Formspree falla, sin bloquear ni mostrar error al visitante

## 8. Lista de espera

- [x] 8.1 Maquetar la sección de lista de espera (campo de correo, botón)
- [x] 8.2 Implementar validación (no envía con campo vacío) y cambio del texto del botón a "Anotado"
- [x] 8.3 Reusar (o crear) el endpoint de Formspree para la lista de espera y conectar el envío — endpoint `https://formspree.io/f/mjybnwro` conectado
- [x] 8.4 Manejar el caso en que el envío a Formspree falla, sin bloquear ni mostrar error al visitante

## 9. Footer

- [x] 9.1 Maquetar el footer (logo, copyright con año y ubicación)

## 10. Responsive

- [x] 10.1 Definir breakpoints (celular <640px, tablet 640–1024px, desktop >1024px) en `styles.css`
- [x] 10.2 Adaptar hero, colección y formulario de contacto a una columna en celular, dos en tablet
- [x] 10.3 Revisado en navegador a 390px de ancho: sin scroll horizontal (`scrollWidth` ≤ `innerWidth`), sin textos cortados

## 11. Verificación final

- [x] 11.1 Revisado en navegador (1440px) contra el mockup: intro, nav, hero con video real, colección, contacto — coincide visualmente
- [x] 11.2 Probado en navegador: validación (no envía vacío), confirmación reemplaza al formulario, botón de WhatsApp arma el link correcto, "Enviar otro" resetea, y la entrega a Formspree responde `{"ok":true}`. **Bug encontrado y corregido**: el formulario no se ocultaba al confirmar porque `.reservation-form { display: flex }` le ganaba a la regla del navegador para `[hidden]`; se agregó `.reservation-form[hidden] { display: none; }` en `styles.css`
- [x] 11.3 Probado en navegador: validación, botón cambia a "Anotado", entrega a Formspree responde `{"ok":true}`
- [x] 11.4 Revisado en 1440px (escritorio) y 390px (celular) en navegador real; sin errores de consola

## Why

Tico Time (relojes modificados a mano, Costa Rica) tiene un mockup de diseño aprobado (`Tico Time landing page-handoff.zip` → `Tico Time.dc.html`) pero ningún sitio real publicable. Se necesita implementar ese diseño como una landing page estática de producción, con formularios de contacto que efectivamente entreguen los leads a Allan, para poder publicarla y empezar a recibir reservas de clientes.

## What Changes

- Implementar la landing page completa en HTML/CSS/JS plano (sin frameworks ni build tools), recreando pixel-perfect el diseño del mockup: intro con video, nav fija, hero con video, sección de colección (6 tarjetas de mods), sección de reserva, lista de espera y footer.
- Usar imágenes/placeholders reales de assets provistos (`uploads/relojloop.mp4`) para los videos; las fotos de los 6 relojes quedan como placeholders visuales (no hay fotos reales todavía) hasta que Allan las provea.
- Formulario de "Reservá" (nombre, teléfono, proyecto de interés): al enviarse, muestra confirmación en pantalla, envía los datos por correo vía Formspree a `faionel360@gmail.com`, y ofrece un botón/enlace de WhatsApp con el mensaje pre-armado para contacto inmediato.
- Formulario de lista de espera (correo): al enviarse, envía el dato por correo vía Formspree y cambia el botón a "Anotado".
- Sitio responsive (mobile/tablet/desktop) — el mockup solo cubre desktop.

## Capabilities

### New Capabilities
- `landing-page`: La página de marketing estática (intro, nav, hero, sección de colección, footer) — estructura visual, contenido y comportamiento (intro que se puede saltar, loop de video del hero, scroll suave, responsive).
- `reservation-form`: El formulario de "Reservá" — campos, validación mínima, estado de confirmación, y entrega del lead por correo (Formspree) y WhatsApp.
- `waitlist-signup`: El formulario de lista de espera por correo — campo, validación, estado del botón, y entrega por correo (Formspree).

### Modified Capabilities
(ninguna — es la primera implementación del sitio, no hay capacidades previas)

## Impact

- Código nuevo: no existe código de producción hoy; se crea desde cero (HTML/CSS/JS estático) en este repo.
- Assets: se copian/usan los videos y demás archivos de `tico-time-landing/tico-time-landing-page/project/uploads/` al proyecto final.
- Dependencia externa nueva: cuenta gratuita en Formspree (formspree.io) para recibir los envíos de ambos formularios por correo; Allan deberá crear la cuenta y proveer el "endpoint" (o hacerlo junto con el agente).
- Sin backend propio ni base de datos — todo el envío de leads depende de servicios externos (Formspree) y WhatsApp Web/App (enlace `wa.me`).
- Deploy: fuera de alcance de este change (se define después de tener el sitio funcionando localmente).

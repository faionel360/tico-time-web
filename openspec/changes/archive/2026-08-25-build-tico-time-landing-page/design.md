## Context

El único artefacto de referencia hoy es `tico-time-landing/tico-time-landing-page/project/Tico Time.dc.html`: un mockup de Claude Design (formato propietario `.dc.html`, con placeholders `{{ }}` y una clase `Component extends DCLogic`) que **no corre como HTML normal**. No es código de producción — es la fuente de verdad visual (colores, tipografía, espaciados, textos, estructura de secciones) que hay que recrear con HTML/CSS/JS reales. El mismo bundle trae `uploads/relojloop.mp4` (video del reloj) y `uploads/relop lop.mp4` (variante/backup), usados tanto en la intro como en el hero. El mockup solo está resuelto para escritorio; el responsive de mobile/tablet se diseña de cero en esta implementación, siguiendo la misma identidad visual. Ver `proposal.md` para el porqué; ver `specs/*/spec.md` para el comportamiento exacto requerido.

## Goals / Non-Goals

**Goals:**
- Un sitio estático (HTML/CSS/JS plano, sin build) que se pueda abrir localmente y luego subir a cualquier hosting estático sin pasos adicionales.
- Paridad visual con el mockup en desktop, y una adaptación responsive coherente en mobile/tablet.
- Los dos formularios funcionando de verdad (Formspree + WhatsApp), sin necesidad de backend propio.

**Non-Goals:**
- Elegir/configurar el hosting final de despliegue (Netlify, Vercel, GitHub Pages, etc.) — se decide en un change futuro.
- Fotos reales de los 6 relojes — se dejan como placeholders visuales hasta que Allan las entregue.
- Cualquier persistencia propia de leads (base de datos, panel admin) — Formspree guarda un historial básico en su dashboard, suficiente por ahora.
- Analítica, SEO avanzado, i18n (el sitio es solo en español, como el mockup).

## Decisions

### Estructura de archivos
```
tico-time-landing-page/            (carpeta final del sitio, en la raíz del repo)
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    ├── video/
    │   └── relojloop.mp4
    └── img/                        (placeholders de los 6 mods; se reemplazan cuando haya fotos reales)
```
Un solo HTML porque es una landing de una sola página (todo por anclas `#coleccion`, `#contacto`), igual que el mockup. Sin framework ni bundler: menos piezas que Allan tiene que entender y mantener, y se despliega copiando la carpeta tal cual a cualquier hosting estático.

**Alternativa considerada:** React/Vite — descartada por decisión explícita de Allan (prioriza simplicidad y cero build tooling para un solo landing page).

### De `.dc.html` a HTML/CSS/JS real
- Los `style="..."` inline del mockup se trasladan a clases en `css/styles.css` (no se copian inline) para que sea mantenible: nombres de clase descriptivos por sección (`.hero`, `.card-mod`, `.nav`, etc.).
- Los placeholders `{{ algo }}` y la clase `Component extends DCLogic` son el "motor" del editor de diseño — se reemplazan por JS plano en `js/main.js`: manejo de estado con variables simples y manipulación directa del DOM (mostrar/ocultar intro, avance del formulario, cambio de texto del botón), sin necesidad de un framework reactivo para esta escala de página.
- Los `<image-slot>` (componente propio del editor de diseño) se reemplazan por `<img>` normales apuntando a `assets/img/` con nombres descriptivos (`sargento-verde.jpg`, etc.); mientras no haya foto real, se usa una imagen placeholder genérica con el nombre del mod superpuesto (mismo tratamiento visual para los 6).
- Fuentes (`Instrument Serif`, `Manrope`) se cargan igual, vía Google Fonts `<link>` en el `<head>`.

### Responsive
Mobile-first con `media queries` en `styles.css`. Breakpoints: `<640px` (celular), `640–1024px` (tablet), `>1024px` (desktop, igual al mockup). La cuadrícula de colección pasa de 3 columnas (desktop) → 2 (tablet) → 1 (celular); el hero y el formulario de contacto pasan de 2 columnas a 1 apilada.

### Formularios: Formspree + WhatsApp
- Cada formulario (`reservation-form`, `waitlist-signup`) hace un `fetch()` con `method: POST` al endpoint de Formspree (`https://formspree.io/f/<form-id>`) que Allan crea gratis en formspree.io y comparte para pegarlo en `js/main.js` como constante.
- Formspree responde vía `fetch`/JSON (no se necesita el `<form action=...>` tradicional con recarga de página), lo que permite mantener la confirmación en pantalla sin salir de la página.
- El botón de WhatsApp usa un enlace `https://wa.me/<numero>?text=<mensaje codificado>` construido en el momento con los datos del formulario — no requiere API de WhatsApp Business ni backend.
- Si el `fetch` a Formspree falla (sin red, servicio caído), el error se atrapa silenciosamente (`catch`) y el flujo visual de confirmación sigue igual (ver spec `reservation-form` / `waitlist-signup`, escenario "el servicio falla") — para no bloquear al visitante ni mostrarle errores técnicos.

**Alternativa considerada:** función serverless propia (Netlify Functions / Vercel API route) para enviar el correo — descartada por ahora: agrega una pieza de backend e infraestructura de despliegue que no aporta nada sobre Formspree en esta etapa (dashboard, límites gratuitos y notificación por correo ya cubren la necesidad).

## Risks / Trade-offs

- **[Riesgo] Formspree gratuito tiene límite de envíos mensuales (50/mes en el plan free).** → Mitigación: si Tico Time crece y se acerca al límite, migrar a un plan pago de Formspree o a una función serverless propia; no bloquea el lanzamiento inicial.
- **[Riesgo] El botón de WhatsApp requiere que Allan provea su número real antes de implementarlo.** → Se pedirá como dato puntual durante `tasks.md` / implementación (no cambia specs ni diseño).
- **[Riesgo] Sin fotos reales, la sección de Colección se ve incompleta/genérica.** → Placeholder con nombre del mod visible, fácil de reemplazar por archivo cuando Allan tenga las fotos (mismo nombre de archivo esperado, documentado en el `README` del sitio).

## Open Questions

- Endpoint real de Formspree y número de WhatsApp: los provee Allan durante la implementación (no requiere crear cuenta antes de escribir el código — se deja como constante placeholder fácil de ubicar y reemplazar).

# reservation-form Specification

## Purpose

Captura los datos de un visitante interesado en encargar un mod (nombre, teléfono, proyecto de interés) y entrega ese lead a Allan de forma confiable, tanto por correo como dándole al visitante una vía directa por WhatsApp.

## Requirements

### Requirement: Campos del formulario de reserva
El sistema SHALL mostrar un formulario con los campos: nombre completo (texto), número de teléfono (texto) y proyecto de interés (selección entre los 6 mods o "Todavía no sé").

#### Scenario: El formulario muestra los 3 campos
- **WHEN** el visitante llega a la sección de Contacto
- **THEN** ve los campos de nombre, teléfono y proyecto de interés, con el proyecto por defecto preseleccionado

### Requirement: Validación antes de enviar
El sistema SHALL impedir el envío del formulario si el nombre o el teléfono están vacíos.

#### Scenario: Intento de envío con campos vacíos
- **WHEN** el visitante hace clic en "Quiero mi mod" sin haber llenado nombre o teléfono
- **THEN** el formulario no se envía y permanece visible para que complete los datos

### Requirement: Confirmación tras envío exitoso
El sistema SHALL reemplazar el formulario por un mensaje de confirmación personalizado con el nombre del visitante tras un envío exitoso, e indicar que será contactado en menos de 24 horas al teléfono provisto.

#### Scenario: Envío exitoso muestra confirmación
- **WHEN** el visitante completa nombre y teléfono y hace clic en "Quiero mi mod"
- **THEN** ve un mensaje de confirmación con su nombre y su número de teléfono, y una opción para "Enviar otro"

#### Scenario: El visitante puede enviar otra solicitud
- **WHEN** el visitante hace clic en "Enviar otro" tras ver la confirmación
- **THEN** el formulario vacío vuelve a mostrarse, listo para una nueva solicitud

### Requirement: Entrega del lead por correo
El sistema SHALL enviar los datos del formulario (nombre, teléfono, proyecto de interés) por correo electrónico a Allan cuando el visitante envía el formulario exitosamente, usando un servicio externo de formularios (Formspree).

#### Scenario: El envío exitoso dispara el correo
- **WHEN** el formulario se envía exitosamente
- **THEN** el sistema envía una solicitud al servicio de formularios con los datos capturados, para que Allan los reciba por correo

#### Scenario: El servicio de correo falla o no responde
- **WHEN** el envío al servicio de formularios falla (sin conexión, servicio caído, etc.)
- **THEN** el visitante igual ve la confirmación en pantalla (no se le bloquea ni se le muestra un error técnico), de modo que puede seguir contactando por WhatsApp

### Requirement: Contacto directo por WhatsApp
El sistema SHALL ofrecer, junto al formulario o en la confirmación, un enlace o botón de WhatsApp que abre una conversación con el número de Tico Time, con un mensaje pre-armado que incluye el proyecto de interés (cuando esté disponible).

#### Scenario: El visitante usa el botón de WhatsApp
- **WHEN** el visitante hace clic en el botón/enlace de WhatsApp
- **THEN** se abre WhatsApp (web o app) con una conversación nueva hacia el número de Tico Time y un mensaje pre-escrito listo para enviar

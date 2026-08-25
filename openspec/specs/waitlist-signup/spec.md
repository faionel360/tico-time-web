# waitlist-signup Specification

## Purpose

Captura el correo de visitantes que quieren enterarse de futuras series de mods aunque no estén listos para reservar ahora, y entrega esos correos a Allan de forma confiable.

## Requirements

### Requirement: Campo de correo para lista de espera
El sistema SHALL mostrar, en la sección de lista de espera, un campo de correo electrónico y un botón para sumarse.

#### Scenario: El campo se muestra
- **WHEN** el visitante llega a la sección de lista de espera
- **THEN** ve un campo para escribir su correo y un botón (por defecto con el texto "Sumarme")

### Requirement: Validación del correo
El sistema SHALL impedir el envío si el campo de correo está vacío.

#### Scenario: Intento de envío con campo vacío
- **WHEN** el visitante hace clic en el botón sin haber escrito un correo
- **THEN** no se envía nada y el campo permanece disponible para completarlo

### Requirement: Confirmación visual tras sumarse
El sistema SHALL cambiar el texto del botón a "Anotado" tras un envío exitoso, indicando al visitante que su correo quedó registrado.

#### Scenario: El botón cambia tras enviar
- **WHEN** el visitante escribe un correo y hace clic en el botón
- **THEN** el texto del botón cambia a "Anotado"

### Requirement: Entrega del correo capturado
El sistema SHALL enviar el correo capturado a Allan mediante un servicio externo de formularios (Formspree) cuando el visitante se suma exitosamente a la lista de espera.

#### Scenario: El envío exitoso dispara el registro
- **WHEN** el visitante se suma exitosamente a la lista de espera
- **THEN** el sistema envía el correo capturado al servicio de formularios, para que Allan lo reciba

#### Scenario: El servicio de correo falla o no responde
- **WHEN** el envío al servicio de formularios falla
- **THEN** el visitante igual ve el botón cambiar a "Anotado" (no se le muestra un error técnico)

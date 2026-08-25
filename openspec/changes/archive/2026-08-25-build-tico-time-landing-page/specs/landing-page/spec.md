## Purpose

Presenta la marca Tico Time y su colección de relojes modificados a un visitante, comunicando identidad de marca y llevándolo a reservar un mod o dejar su correo, en una sola página con estilo visual oscuro/elegante.

## ADDED Requirements

### Requirement: Intro de bienvenida
El sistema SHALL mostrar, al cargar la página por primera vez, una pantalla de introducción a pantalla completa con un video en loop, el nombre "Tico Time" y el lema "Relojes modificados a mano".

#### Scenario: La intro se muestra al cargar
- **WHEN** un visitante carga la página por primera vez
- **THEN** ve la pantalla de intro con el video de fondo, el logo y el lema, cubriendo toda la pantalla

#### Scenario: La intro se puede saltar
- **WHEN** el visitante hace clic en el botón "Entrar"
- **THEN** la intro desaparece con una transición suave y se revela el resto de la página

#### Scenario: La intro desaparece automáticamente
- **WHEN** pasan unos segundos (o el video de intro termina) sin que el visitante haga clic en "Entrar"
- **THEN** la intro desaparece igual, sin bloquear el acceso al resto de la página

### Requirement: Navegación fija
El sistema SHALL mostrar una barra de navegación fija en la parte superior, visible en todo momento durante el scroll, con enlaces a la sección de Colección, la sección de Contacto y un botón de "Reservar".

#### Scenario: Navegación visible durante el scroll
- **WHEN** el visitante hace scroll hacia abajo en la página
- **THEN** la barra de navegación permanece visible en la parte superior

#### Scenario: Los enlaces llevan a su sección
- **WHEN** el visitante hace clic en "Colección", "Contacto" o "Reservar"
- **THEN** la página se desplaza suavemente hasta la sección correspondiente

### Requirement: Sección hero
El sistema SHALL mostrar, como primera sección visible tras la intro, un video de fondo, el titular "El tiempo, reinterpretado", una descripción breve, dos botones de llamada a la acción ("Ver proyectos" y "Encargar el mío"), y tres cifras de credibilidad (mods entregados, tiempo de armado, unicidad de cada configuración).

#### Scenario: El video del hero termina y vuelve a reproducirse
- **WHEN** el video de fondo del hero termina de reproducirse
- **THEN** se reproduce nuevamente, hasta un máximo de repeticiones configurado, y luego se detiene mostrando el último cuadro

#### Scenario: Los botones llevan a la sección correcta
- **WHEN** el visitante hace clic en "Ver proyectos" o "Encargar el mío"
- **THEN** la página se desplaza a la sección de Colección o de Contacto respectivamente

### Requirement: Sección de colección
El sistema SHALL mostrar una cuadrícula con las 6 configuraciones de reloj (Sargento Verde, Pura Vida, Medianoche, Arenal, Cafetal, Cero Uno), cada una con foto, nombre, especificaciones técnicas breves y precio en colones costarricenses (₡).

#### Scenario: Se muestran las 6 tarjetas con su información
- **WHEN** el visitante llega a la sección de Colección
- **THEN** ve las 6 tarjetas, cada una con su foto (o marcador de posición si aún no hay foto real), nombre, especificaciones y precio

### Requirement: Footer
El sistema SHALL mostrar, al final de la página, el nombre de la marca y una línea de copyright con el año y la ubicación (Costa Rica).

#### Scenario: El footer aparece al final
- **WHEN** el visitante llega al final de la página
- **THEN** ve el nombre "Tico Time" y el texto de copyright

### Requirement: Diseño responsive
El sistema SHALL adaptar el diseño de todas las secciones para verse y usarse correctamente en pantallas de escritorio, tablet y celular, sin scroll horizontal ni elementos superpuestos o cortados.

#### Scenario: La página se ve correctamente en celular
- **WHEN** un visitante abre la página desde un celular (ancho de pantalla angosto)
- **THEN** el contenido se reacomoda en una sola columna, el texto es legible y no aparece scroll horizontal

#### Scenario: La página se ve correctamente en tablet y escritorio
- **WHEN** un visitante abre la página desde una tablet o una pantalla de escritorio
- **THEN** el contenido usa el ancho disponible de forma proporcional, manteniendo la composición visual del diseño original

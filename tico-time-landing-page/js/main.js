/* ==========================================================================
   Tico Time — Landing page
   ========================================================================== */

// ---------------------------------------------------------------------------
// CONFIG — reemplazar estos valores con los datos reales de Tico Time.
// ---------------------------------------------------------------------------
const CONFIG = {
  // Número de WhatsApp de Tico Time, en formato internacional sin "+" ni espacios.
  WHATSAPP_NUMBER: '50686403635',

  // Endpoints de Formspree (https://formspree.io) — uno por formulario.
  FORMSPREE_RESERVATION_ENDPOINT: 'https://formspree.io/f/maewroop',
  FORMSPREE_WAITLIST_ENDPOINT: 'https://formspree.io/f/mjybnwro',

  INTRO_DURATION_MS: 5000,
  HERO_LOOP_MAX: 2,
};

// ---------------------------------------------------------------------------
// Intro de bienvenida
// ---------------------------------------------------------------------------
(function initIntro() {
  const intro = document.getElementById('intro');
  const introVideo = document.getElementById('intro-video');
  const skipBtn = document.getElementById('intro-skip');
  let hidden = false;

  function hideIntro() {
    if (hidden) return;
    hidden = true;
    intro.classList.add('is-hidden');
    clearTimeout(timer);
  }

  const timer = setTimeout(hideIntro, CONFIG.INTRO_DURATION_MS);

  skipBtn.addEventListener('click', hideIntro);
  introVideo.addEventListener('ended', hideIntro);

  const playPromise = introVideo.play();
  if (playPromise && playPromise.catch) playPromise.catch(() => {});
})();

// ---------------------------------------------------------------------------
// Video del hero: se repite un número limitado de veces y luego se detiene
// ---------------------------------------------------------------------------
(function initHeroVideo() {
  const heroVideo = document.getElementById('hero-video');
  if (!heroVideo) return;

  let plays = 0;
  heroVideo.addEventListener('ended', () => {
    plays += 1;
    if (plays < CONFIG.HERO_LOOP_MAX) {
      heroVideo.currentTime = 0;
      const p = heroVideo.play();
      if (p && p.catch) p.catch(() => {});
    }
  });

  const playPromise = heroVideo.play();
  if (playPromise && playPromise.catch) playPromise.catch(() => {});
})();

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function buildWhatsAppLink(number, message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

function sendToFormspree(endpoint, data) {
  return fetch(endpoint, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).catch(() => {
    // Si Formspree falla (sin red, servicio caído, endpoint sin configurar),
    // no bloqueamos ni mostramos error al visitante: el flujo visual sigue igual.
  });
}

// ---------------------------------------------------------------------------
// Formulario de reserva
// ---------------------------------------------------------------------------
(function initReservationForm() {
  const form = document.getElementById('reservation-form');
  const confirm = document.getElementById('reservation-confirm');
  const confirmName = document.getElementById('confirm-name');
  const confirmPhone = document.getElementById('confirm-phone');
  const resetBtn = document.getElementById('reservation-reset');
  const whatsappNoteLink = document.getElementById('whatsapp-link');
  const whatsappConfirmLink = document.getElementById('whatsapp-link-confirm');

  function updateWhatsAppLinks(nombre, telefono, proyecto) {
    const parts = ['Hola Tico Time, quiero encargar un mod.'];
    if (proyecto) parts.push(`Proyecto: ${proyecto}.`);
    if (nombre) parts.push(`Mi nombre es ${nombre}.`);
    if (telefono) parts.push(`Mi teléfono: ${telefono}.`);
    const link = buildWhatsAppLink(CONFIG.WHATSAPP_NUMBER, parts.join(' '));
    if (whatsappNoteLink) whatsappNoteLink.href = link;
    if (whatsappConfirmLink) whatsappConfirmLink.href = link;
  }

  // Enlace de WhatsApp genérico disponible desde el inicio (sin datos aún)
  updateWhatsAppLinks('', '', '');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const telefono = form.telefono.value.trim();
    const proyecto = form.proyecto.value;

    if (!nombre || !telefono) return; // validación: no envía con campos vacíos

    updateWhatsAppLinks(nombre, telefono, proyecto);

    sendToFormspree(CONFIG.FORMSPREE_RESERVATION_ENDPOINT, { nombre, telefono, proyecto });

    confirmName.textContent = nombre.split(' ')[0];
    confirmPhone.textContent = telefono;
    form.hidden = true;
    confirm.hidden = false;
  });

  resetBtn.addEventListener('click', () => {
    form.reset();
    form.hidden = false;
    confirm.hidden = true;
  });
})();

// ---------------------------------------------------------------------------
// Lista de espera
// ---------------------------------------------------------------------------
(function initWaitlistForm() {
  const form = document.getElementById('waitlist-form');
  const button = document.getElementById('waitlist-btn');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const correo = form.correo.value.trim();
    if (!correo) return; // validación: no envía con campo vacío

    sendToFormspree(CONFIG.FORMSPREE_WAITLIST_ENDPOINT, { correo });

    button.textContent = 'Anotado';
    button.disabled = true;
  });
})();

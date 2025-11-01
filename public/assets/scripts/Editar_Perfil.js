document.addEventListener('DOMContentLoaded', () => {
  /* ===== Lógica del Header (REUTILIZADO) ===== */
  const header = document.querySelector('header');
  const nav = header?.querySelector('nav');
  const toggleBtn = header?.querySelector('.menu-toggle');
  const perfilBtn = document.getElementById('perfilBtn');
  const popover = document.getElementById('perfilPopover');

  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', (e) => { e.stopPropagation(); nav.classList.toggle('open'); });
  }
  if (perfilBtn && popover) {
    perfilBtn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); popover.classList.toggle('open'); });
  }

  /* ===== NUEVO: Lógica de la Página de Editar Perfil ===== */
  
  // 1. Lógica para el dropdown de Sede
  const dropdownContainer = document.querySelector('.dropdown-container');
  if (dropdownContainer) {
    const toggle = dropdownContainer.querySelector('.dropdown-toggle');
    const menu = dropdownContainer.querySelector('.dropdown-menu');
    const valueSpan = toggle.querySelector('.dropdown-value');
    
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('open');
    });

    menu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        e.preventDefault();
        valueSpan.textContent = e.target.textContent;
        menu.classList.remove('open');
      }
    });
  }
  
  // 2. Lógica para la previsualización de la foto de perfil
  const photoUpload = document.getElementById('photo-upload');
  const photoPreview = document.getElementById('photo-preview');

  if (photoUpload && photoPreview) {
    photoUpload.addEventListener('change', () => {
      const file = photoUpload.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          photoPreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  /* ===== Lógica para cerrar menús al hacer clic fuera ===== */
  document.addEventListener('click', (e) => {
    // Cierra menús del header
    if (nav && nav.classList.contains('open') && !header.contains(e.target)) nav.classList.remove('open');
    if (popover && popover.classList.contains('open') && !popover.contains(e.target) && e.target !== perfilBtn) {
      popover.classList.remove('open');
    }
    // Cierra dropdown de sede
    const openDropdown = document.querySelector('.dropdown-menu.open');
    if (openDropdown && !openDropdown.parentElement.contains(e.target)) {
      openDropdown.classList.remove('open');
    }
  });
});

/* ====== LÓGICA PARA EL MODAL DE TÉRMINOS Y CONDICIONES ====== */
const termsLink = document.getElementById('terms-link');
const termsModal = document.getElementById('terms-modal');
const termsOverlay = document.getElementById('terms-overlay');
const closeModalBtn = document.getElementById('modal-close-btn');

const openModal = () => {
  termsModal.classList.add('visible');
  termsOverlay.classList.add('visible');
};

const closeModal = () => {
  termsModal.classList.remove('visible');
  termsOverlay.classList.remove('visible');
};

if (termsLink && termsModal && termsOverlay && closeModalBtn) {
  // Abrir modal al hacer clic en el enlace
  termsLink.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });

  // Cerrar modal con el botón de flecha
  closeModalBtn.addEventListener('click', closeModal);

  // Cerrar modal al hacer clic en el fondo oscuro
  termsOverlay.addEventListener('click', closeModal);
}

/* ====== LÓGICA PARA EL MODAL DE POLÍTICA DE PRIVACIDAD ====== */
const privacyLink = document.getElementById('privacy-link');
const privacyModal = document.getElementById('privacy-modal');
const privacyOverlay = document.getElementById('privacy-overlay');
const closePrivacyBtn = document.getElementById('privacy-modal-close-btn');

const openPrivacyModal = () => {
  privacyModal.classList.add('visible');
  privacyOverlay.classList.add('visible');
};

const closePrivacyModal = () => {
  privacyModal.classList.remove('visible');
  privacyOverlay.classList.remove('visible');
};

if (privacyLink && privacyModal && privacyOverlay && closePrivacyBtn) {
  // Abrir modal al hacer clic en el enlace
  privacyLink.addEventListener('click', (e) => {
    e.preventDefault();
    openPrivacyModal();
  });

  // Cerrar modal con el botón de flecha
  closePrivacyBtn.addEventListener('click', closePrivacyModal);

  // Cerrar modal al hacer clic en el fondo oscuro
  privacyOverlay.addEventListener('click', closePrivacyModal);
}
// js/menu.js

// Menú hamburguesa
const btnHamburguesa = document.getElementById('btnHamburguesa');
const siteNav = document.getElementById('siteNav');
const navOverlay = document.getElementById('navOverlay');
const navLinks = document.querySelectorAll('.nav-link');

// Abrir/cerrar menú
function toggleMenu() {
  btnHamburguesa.classList.toggle('activo');
  siteNav.classList.toggle('activo');
  navOverlay.classList.toggle('activo');
  document.body.style.overflow = siteNav.classList.contains('activo') ? 'hidden' : '';
}

// Event listeners
if (btnHamburguesa) {
  btnHamburguesa.addEventListener('click', toggleMenu);
}

if (navOverlay) {
  navOverlay.addEventListener('click', toggleMenu);
}

// Cerrar menú al hacer click en un enlace
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    btnHamburguesa.classList.remove('activo');
    siteNav.classList.remove('activo');
    navOverlay.classList.remove('activo');
    document.body.style.overflow = '';
  });
});

// Cerrar con tecla Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && siteNav.classList.contains('activo')) {
    toggleMenu();
  }
});
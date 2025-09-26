// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// =========================================================
// HAMBURGER MENU
// =========================================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// =========================================================
// SWIPER
// =========================================================
const swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    601: { // tablet
      spaceBetween: 30,
    },
    1025: { // desktop
      spaceBetween: 40,
    }
  }
});


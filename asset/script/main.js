const mobileMenu = document.querySelector('.mobile-menu');
const hamburgar = document.getElementById('hamburger-icon');
const navClose = document.querySelectorAll('.mobile-nav-link');
const bars = document.querySelectorAll('.bars');

hamburgar.addEventListener('click', toggleMobileMenu);

navClose.forEach(elem => {
  elem.addEventListener('click', closeNav);
});

function toggleMobileMenu() {
  mobileMenu.classList.toggle('open');
  hamburgar.classList.toggle('change');
}

function closeNav() {
  hamburgar.classList.remove("change");
  mobileMenu.classList.remove("open");
}

const mobileMenu = document.querySelector('.mobile-menu');
const hamburgar = document.getElementById('hamburger-icon');
const navClose = document.querySelectorAll('.mobile-nav-link');
const brand = document.querySelector('#brand');

function toggleMobileMenu() {
  mobileMenu.classList.toggle('open');
  hamburgar.classList.toggle('change');
  brand.classList.toggle('closeBrand');
}

function closeNav() {
  hamburgar.classList.remove('change');
  mobileMenu.classList.remove('open');
  brand.classList.remove('closeBrand');
}

hamburgar.addEventListener('click', toggleMobileMenu);

navClose.forEach((elem) => {
  elem.addEventListener('click', closeNav);
});

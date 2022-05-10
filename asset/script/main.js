const mobileMenu = document.querySelector('.mobile-menu');
const hamburgar = document.getElementById('hamburger-icon');
const navClose = document.querySelectorAll('.mobile-nav-link');
const bars = document.querySelectorAll('.bars');

console.log(mobileMenu)
hamburgar.addEventListener('click', toggleMobileMenu);

navClose.forEach(ele => {
  ele.addEventListener('click', closeNav);
});

function toggleMobileMenu() {
  console.log('Inside toggle')
  mobileMenu.classList.toggle('open');
  hamburgar.classList.toggle('change');
}

function closeNav() {
  hamburgar.classList.remove("change");
  mobileMenu.classList.remove("open");
}

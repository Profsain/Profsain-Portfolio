<<<<<<< HEAD
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
=======
let mobileMobile = document.getElementsByClassName("mobile-menu");
let hamburgar = document.getElementById("hamburger-icon");
let closeNavBar = document.querySelectorAll(".nav-link");



for(i = 0; i < closeNavBar.length; i++ ){
    closeNavBar[i].addEventListener("click", closeNav );
}


function toggleMobileMenu(bars) {
    bars.classList.toggle("change");
    mobileMobile[0].classList.toggle("open");
>>>>>>> 0e12d37f634b2e505a5bef909cb57b2d76c2e2fa
}

function closeNav() {
  hamburgar.classList.remove("change");
  mobileMenu.classList.remove("open");
}

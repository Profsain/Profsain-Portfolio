let mobileMobile = document.getElementsByClassName("mobile-menu");
let hamburgar = document.getElementById("hamburger-icon");
let closeNavBar = document.querySelectorAll(".nav-link");



for(i = 0; i < closeNavBar.length; i++ ){
    closeNavBar[i].addEventListener("click", closeNav );
}


function toggleMobileMenu(bars) {
    bars.classList.toggle("change");
    mobileMobile[0].classList.toggle("open");
}

function closeNav(bars) {
    hamburgar.classList.remove("change")
    mobileMobile[0].classList.remove("open");
    
}

let mobileMobile = document.getElementsByClassName("mobile-menu");
let hamburgar = document.getElementById("hamburger-icon");
function toggleMobileMenu(bars) {
    bars.classList.toggle("change");
    mobileMobile[0].classList.toggle("open");
}

function closeNav(bars) {
    hamburgar.classList.remove("change")
    mobileMobile[0].classList.remove("open");
    
}

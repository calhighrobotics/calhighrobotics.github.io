
function toggleNav() {
    $("nav").toggleClass("togglednav");
    $(".navlink").toggleClass("animated");
    $(".navlink").toggleClass("slideInLeft");
}

function toggleTeamNav() {
    toggleNav();
    $("body").toggleClass("toggledteam");
    $(".teamletter").toggleClass("animated");
    $(".teamletter").toggleClass("slideInLeft");
}

currentYear = document.getElementById('currentYear');
var date = new Date();
var year = date.getFullYear();
currentYear.innerHTML = year;

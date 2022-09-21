// JavaScript Document
console.log("hi");

var menuButton = document.querySelector("header section div button");


menuButton.addEventListener("click", menuOpenen);

function menuOpenen () {
    var deNav = document.querySelector("header section nav ul");
    deNav.classList.toggle("openMenu");
}

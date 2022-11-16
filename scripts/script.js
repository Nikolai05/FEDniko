// JavaScript Document
console.log("hi");

var menuButton = document.querySelector("header section div button");
var menuIcon = document.querySelector("header section div button img")

menuButton.addEventListener("click", menuOpenen);

function menuOpenen () {
    var deNav = document.querySelector("header section nav ul");
    deNav.classList.toggle("openMenu");

    if (deNav.classList.contains("openMenu")) {
        menuIcon.src = "images/kruisje.PNG"
    } else {
        menuIcon.src = "images/menuknop.PNG"
    }
}


var deButton = document.querySelector("button");

deButton.addEventListener("click", toggleTextSize);

function toggleTextSize() {
	document.documentElement.classList.toggle("grote-letters");
}

darklight.addEventListener("click", switchLight);

function switchLight() {
    var element = document.body
    element.classList.toggle("dark-mode");
  } 

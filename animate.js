var popUp = document.querySelector("#setting-pop-up");
var logo = document.querySelector("#icon");
var text = document.querySelector("#text");
var username = document.querySelector("#username");
var save = document.querySelector(".save");

function settingPopUp(){
    popUp.style.display ="block";
}
save.onclick = function() {
    popUp.style.display ="none";    
}
//function on/off music
var toggle = document.querySelector(".toggle");
var button = document.querySelector(".button");
var textButton = document.querySelector(".text-button");
function onOffMusic() {
    toggle.classList.toggle("off");
    button.classList.toggle("buttonOn");
    if(toggle.classList.contains("off")) {
        textButton.innerHTML = "OFF";
    }
    else {
        textButton.innerHTML = "ON";
    }
}
//function on/off sound
var toggle2 = document.querySelector(".toggle2");
var button2 = document.querySelector(".button2");
var textButton2 = document.querySelector(".text-button2");
function onOffSound() {
    toggle2.classList.toggle("off2");
    button2.classList.toggle("buttonOn2");
    if(toggle2.classList.contains("off2")) {
        textButton2.innerHTML = "OFF";
    }
    else {
        textButton2.innerHTML = "ON";
    }
}




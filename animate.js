var popUp = document.querySelector("#setting-pop-up");
var logo = document.querySelector("#icon");
var text = document.querySelector("#text");
var blur = document.querySelector("#blurBackground");
var username = document.querySelector("#username");
function settingPopUp(){
    // blur.style.alignItems = 'center';
    popUp.style.display ="block";
    text.style.color = "#6d6c6d";
    logo.style.color = "#6d6c6d";
    username.style.border = "3px solid #6d6c6d";
    text.style.textShadow = "2px 0 0 #866a7058, -2px 0 0 #866a7058, 0 2px 0 #866a7058, 0 -2px 0 #866a7058, 1px 1px #866a7058, -1px -1px 0 #866a7058, 1px -1px 0 #866a7058, -1px 1px 0 #866a7058";
    username.style.boxShadow = "2px 0 0 #6d6c6d, -2px 0 0 #6d6c6d, 0 2px 0 #6d6c6d, 0 -2px 0 #6d6c6d, 1px 1px #6d6c6d, -1px -1px 0 #6d6c6d, 1px -1px 0 #6d6c6d, -1px 1px 0 #6d6c6d";
}

var toggle = document.querySelector(".toggle");
var button = document.querySelector(".button");
var textButton = document.querySelector(".text-button");
function onOffMusic() {
    toggle.classList.toggle("on");
    button.classList.toggle("buttonOn");
    if(toggle.classList.contains("on")) {
        textButton.innerHTML = "ON";
    }
    else {
        textButton.innerHTML = "OFF";
    }

}
var toggle2 = document.querySelector(".toggle2");
var button2 = document.querySelector(".button2");
var textButton2 = document.querySelector(".text-button2");
function onOffSound() {
    toggle2.classList.toggle("on2");
    button2.classList.toggle("buttonOn2");
    if(toggle2.classList.contains("on2")) {
        textButton2.innerHTML = "ON";
    }
    else {
        textButton2.innerHTML = "OFF";
    }

}

var popUp = document.querySelector("#setting-pop-up");
var logo = document.querySelector("#icon");
var text = document.querySelector("#text");
var username = document.querySelector("#username");
var exit = document.querySelector(".exit");
var save = document.querySelector(".save");
function settingPopUp(){
    popUp.style.display ="block";
    // save.style.display ="block";
    // exit.style.display ="block";
    text.style.color = "#6d6c6d";
    logo.style.color = "#6d6c6d";
    username.style.border = "3px solid #6d6c6d";
    text.style.textShadow = "2px 0 0 #866a7058, -2px 0 0 #866a7058, 0 2px 0 #866a7058, 0 -2px 0 #866a7058, 1px 1px #866a7058, -1px -1px 0 #866a7058, 1px -1px 0 #866a7058, -1px 1px 0 #866a7058";
    username.style.boxShadow = "2px 0 0 #6d6c6d, -2px 0 0 #6d6c6d, 0 2px 0 #6d6c6d, 0 -2px 0 #6d6c6d, 1px 1px #6d6c6d, -1px -1px 0 #6d6c6d, 1px -1px 0 #6d6c6d, -1px 1px 0 #6d6c6d";
}
exit.onclick = function() {
    text.style.textShadow = "2px 0 0 #e02a4f, -2px 0 0 #e02a4f, 0 2px 0 #e02a4f, 0 -2px 0 #e02a4f, 1px 1px #e02a4f, -1px -1px 0 #e02a4f, 1px -1px 0 #e02a4f, -1px 1px 0 #e02a4f";
    popUp.style.display ="none";    
    // popUp.style.animateName = "float2";
    // popUp.style.animationDuration= "1.3a";
    text.style.color = "#fefcfe";
    logo.style.color = "#f9c0cc";    
    username.style.border = "3px solid #93c3fe";
    username.style.boxShadow = "0 0 1px #accef8, 0 0 2px #accef8, 0 0 6px #accef8,0 0 12px #accef8, inset 0 0 1px #accef8, inset 0 0 2px #accef8,inset 0 0 6px #accef8, inset 0 0 12px #accef8";
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




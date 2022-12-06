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

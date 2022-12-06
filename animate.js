var popUp = document.querySelector("#setting-pop-up");
// var menu = document.querySelector("#menu-start-game");
var blur = document.querySelector("#blurBackground");
var text = document.querySelector("#text");
function settingPopUp() {
  popUp.style.display = "block";
  // menu.style.backgroundColor = rgba(0, 0, 0, 0.235);
  blur.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  text.style.color = "#fefcfea2";
  text.style.textShadow =
    "2px 0 0 #e02a4f, -2px 0 0 #e02a4f, 0 2px 0 #e02a4f, 0 -2px 0 #e02a4f, 1px 1px #e02a4f, -1px -1px 0 #e02a4f, 1px -1px 0 #e02a4f, -1px 1px 0 #e02a4f";
}

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="background.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://unpkg.com/ionicons@latest/dist/ionicons.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<link
href="https://fonts.googleapis.com/css?family=Righteous"
rel="stylesheet"
/>
<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100&display=swap" rel="stylesheet">
<script src="https://unpkg.com/phosphor-icons"></script>
<title>BRICK BREAKER</title>
</head>
<body>
    <!-- pause -->
    <div id="border">
        <div id="blurBackground">
            <div id="menu-start-game">
                <div class="logo">
                    <i class="ph-target" id = "icon"></i>
                    <p id="text">BRICK BREAKER</p>
                </div>

                <form>
                    <div class="form-group">
                        <input
                            id="username"
                            type="text"
                            class="form-control"
                            placeholder="Username"
                            name="username"
                            autocomplete="off"
                        />
                    </div>
                    <div class="form-group">
                        <input
                            id="password"
                            type="password"
                            class="form-control"
                            placeholder="Password"
                            name="password"
                        />
                        <i id ="show" onclick="hideShow()" class="ph-eye-slash" ></i>
                        <i id ="hide" onclick="hideShow()" class="ph-eye" style="display: none;"></i>

                    </div>
                    <p id="alert"></p>
                    <button  id="login" type="button" class="btn btn-default"><ion-icon class="game" name="game-controller-outline"></ion-icon>
                        <p id="login-text">LOGIN</p>
                    </button>
                    <button id="setting" type="button" class="btn btn-default" onclick="settingPopUp()">
                        <ion-icon class="setting" name="settings-outline"></ion-icon>
                        <p id="setting-text">SETTING</p>
                    </button>
                    <button onclick="loop()" class="start" id="guest" type = "button">
                        <ion-icon class="guest" name="person"></ion-icon>
                        <p id="guest-text">GUEST</p>
                    </button>
                </form>
                <div id="setting-pop-up">
                    <div class="music"><ion-icon name="musical-notes-outline" id ="music"></ion-icon><span id ="music-text">MUSIC</span></div>
                    <div class="container">
                        <div class="toggle">
                            <div class="button" onclick="onOffMusic()"></div>
                        </div>
                        <div class="text-button">ON</div>
                    </div>
                    <div class="sound"><ion-icon name="musical-note-outline" id = "sound"></ion-icon><span id ="sound-text">SOUND</span></div>
                    <div class="container2">
                        <div class="toggle2">
                            <div class="button2" onclick="onOffSound()"></div>
                        </div>
                        <div class="text-button2">ON</div>
                    </div>
                    <div class="save">
                        <div id="save-text">SAVE</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="pauseGame">
        <div id ="popup">
            <h2><center> PRESS SPACE TO CONTINUE</center></h2>
            <button id="muteSoundBtn"> MUTE Sound</button>
            <button id="unmuteSoundBtn" style="display:none" >UNMUTE Sound</button>
            
            <button id="muteMusicBtn" style="display:block"> MUTE MUSIC</button>
            <button id="unmuteMusicBtn" style="display:none" >UNMUTE MUSIC</button>
            
        </div>
    </div>


    <canvas id="myCanvas" width="600" height="600"></canvas>
  </body>
  <script src="index.js"></script>
  <script src="animate.js"></script>
</html>

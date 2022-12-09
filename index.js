var canvas = document.getElementById("myCanvas");
var stopBtn = document.getElementById("stop");
var contBtn = document.getElementById("cont");
var startBtn = document.getElementsByClassName("start");
var pauseGame = document.getElementById("pauseGame");
var menuStart = document.getElementById("menu-start-game");
var muteBtn = document.getElementById("muteBtn");
var unmuteBtn = document.getElementById("unmuteBtn");
var border = document.getElementById("border");
var ctx = canvas.getContext("2d");
var ballRadius = 8;
var dx = 2 * (Math.random() * 2 - 1);
var dy = -3;
var ballSpeed = 3;
var startGame = false;
var pause = false;
var play = false;
//paddle
var paddleHeight = 10;
var paddleWidth = 100;
var paddleX = (canvas.width - paddleWidth) / 2;
var paddleY = canvas.height - paddleHeight;
var x = canvas.width / 2;
var y = paddleY - ballRadius;
var rightPressed = false;
var leftPressed = false;
//audio:
var muted = false;
//score:
var score = 0;
//lives:
var lives = 3;
//levels:
var levels = 1;
var passedLevel = false;
var maxLevel = 3;
var gameOver = false;
var brick = {
  col: 9,
  width: 50,
  height: 15,
  padding: 10,
  setTop: 50,
  setLeft: 35,
};
if(levels == 1){
  brick.row=3;
}
if(levels == 2){
  brick.row= 4;
}
if(levels == 3){
  brick.row = 5;
}
var bricks = [];
function createBricks() {
  for (var c = 0; c < brick.col; c++) { 
    bricks[c] = [];
    for (var r = 0; r < brick.row; r++) {
      bricks[c][r] = { x: 0, y: 0, status: true };
    }
  }
}
createBricks();
//audio :
var hitPaddle = new Audio();
hitPaddle.src ="audio/sounds_hitpaddle.wav";
var hitBounds = new Audio();
hitBounds.src ="audio/sounds_hitbounds.wav";
var hitWalls = new Audio();
hitWalls.src ="audio/sounds_hitbounds.wav";
var win = new Audio();
win.src = "audio/sounds_wingame.wav";
var lostLife = new Audio();
lostLife.src = "audio/sounds_lostlife.wav";
var lose = new Audio();
lose.src = "audio/sounds_gameover.wav";
//function:
document.addEventListener("keydown", keyDownHandle, false);
document.addEventListener("keyup", keyUpHandle, false);
document.addEventListener("keydown", pauseBtn, false);
document.addEventListener("keydown", pressStart, false);
muteBtn.addEventListener("click", onOffMusic);
unmuteBtn.addEventListener("click", onOffMusic);
//AUDIO MUTED/UNMUTED:
function onOffMusic(){
  muted = !muted;
  if(muted){
    muteBtn.style.display = "none";
    unmuteBtn.style.display = "block";
  }
  else if(!muted){
    muteBtn.style.display = "block";
    unmuteBtn.style.display = "none";
  }
}
function pressStart(event) {
  if (event.keyCode == 38 && play && !pause) {
    startGame = true;
    // hitBounds.muted();
  if(!muted) hitBounds.play();
  }
}
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.strokeStyle = "black";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "purple";
  ctx.fill();
  ctx.closePath();
}
function drawBricks() {
  for (var c = 0; c < brick.col; c++) {
    for (var r = 0; r < brick.row; r++) {
      if (bricks[c][r].status) {
        var brickX = c * (brick.width + brick.padding) + brick.setLeft;
        var brickY = r * (brick.height + brick.padding) + brick.setTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brick.width, brick.height);
        if (r == 0) {
          ctx.fillStyle = "yellowgreen";
        } else if (r == 1) {
          ctx.fillStyle = "orange";
        } else if (r == 2) {
          ctx.fillStyle = "yellow";
        } else if (r == 3) {
          ctx.fillStyle = "red";
        } else {
          ctx.fillStyle = "darkred";
        }
        ctx.strokeStyle = "black";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
}
function drawScore() {
  ctx.font = "16px TimesNewRoman";
  ctx.fillStyle = "darkblue";
  ctx.fillText("Score: " + score, 30, 20);
}
function drawLevel() {
  ctx.font = "16px TimesNewRoman";
  ctx.fillStyle = "orange";
  ctx.fillText("Level: " + levels, canvas.width / 2 - 20, 20);
}
function drawLives() {
  ctx.font = "16px TimesNewRoman";
  ctx.fillStyle = "red";
  ctx.fillText("Lives: " + lives, 510, 20);
}

function pauseBtn(event) {
  if (event.keyCode == 32 && play) {
    pause = !pause;
    console.log(pause);
    if (pause == true) {
      pauseGame.style.display = "block";
      stop();
    } else {
      pauseGame.style.display = "none";
      cont();
    }
  }
  // if (event.keyCode == 9 && play) {
  //   console.log(levels);
  // }
}
function keyDownHandle(e) {
  if (!pause) {
    if (e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = true;
    }
  }
}

function keyUpHandle(e) {
  if (!pause) {
    if (e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = false;
    }
  }
}

function collisionDetection() {
  // createBricks();
  for (var c = 0; c < brick.col; c++) {
    for (var r = 0; r < brick.row; r++) {
      var b = bricks[c][r];
      if (b.status) {
        if (
          x + ballRadius > b.x &&
          x - ballRadius < b.x + brick.width &&
          y + ballRadius > b.y &&
          y - ballRadius < b.y + brick.height
        ) {
          dy = -dy;
          b.status = !b.status;
          if(!muted) hitBounds.play();
          score++;
        }
      }
    }
  }
}
function stop() {
  stopMove = true;
  leftPressed = false;
  rightPressed = false;
  keepX = dx;
  keepY = dy;
  dx = 0;
  dy = 0;
}
function cont() {
  stopMove = false;
  // contBtn.style.display="none";
  dx = keepX;
  dy = keepY;
}
function movePaddle() {
  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    if (startGame == false) {
      paddleX += 5;
      x += 5;
    } else {
      paddleX += 5;
    }
  } else if (leftPressed && paddleX > 0) {
    if (startGame == false) {
      paddleX -= 5;
      x -= 5;
    } else {
      paddleX -= 5;
    }
  }
}
function moveBall() {
  x += dx;
  y += dy;
}
function resetBall() {
  x = canvas.width / 2;
  y = paddleY - ballRadius;
  dx = 2 * (Math.random() * 2 - 1);
  dy = -3;
  paddleX = (canvas.width - paddleWidth) / 2;
}
function ball_wall() {
  if (x + dx > canvas.width - ballRadius || x - ballRadius < 0) {
    dx = -dx;
    if(!muted) hitWalls.play();
  }
  if (y - ballRadius < 0) {
    dy = -dy;
    if(!muted) hitWalls.play();
  }
  if (y + ballRadius > canvas.height) {
    lives--;
    startGame = false;
    if(!muted) lostLife.play();
    if (lives <= 0) {
      alert("GAME OVER");
      gameOver = true;
      lose.play();
      document.location.reload();
    } else {
      resetBall();
    }
  }
}
function handleBall() {
  if (
    x <= paddleX + paddleWidth &&
    x >= paddleX &&
    y <= paddleY + paddleHeight &&
    y >= paddleY
  ) {
    let collisionPoint = x - (paddleX + paddleWidth / 2);
    collisionPoint = collisionPoint / (paddleWidth / 2);
    let angle = collisionPoint * (Math.PI / 3);
    dx = ballSpeed * Math.sin(angle);
    dy = -ballSpeed * Math.cos(angle);
    if(!muted) hitPaddle.play();

  }
}
function levelUp() {
  let isLevelDone = true;
  for (var c = 0; c < brick.col; c++) {
    for (var r = 0; r < brick.row; r++) {
      isLevelDone = isLevelDone && !bricks[c][r].status;
    }
  }
  if (isLevelDone) {
    if (levels >= maxLevel) {
      gameOver = true;
      if(!muted) win.play();
      alert("Thắng rồi chơi gì nữa?");
      location.reload();
      return;
    }
    brick.row = brick.row + 1;
    createBricks();
    resetBall();
    levels++;
    if(!muted) win.play();
    startGame = false;
  }
}
function gameLose() {
  if (lives <= 0) {
    gameOver = true;
  }
}
function update() {
  movePaddle();
  handleBall();
  ball_wall();
  collisionDetection();
  gameLose();
  levelUp();
}
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawLevel();
  drawLives();
  drawPaddle();
  drawScore();
  drawBricks();
}
function loop() {
  canvas.style.display = "block";
  menuStart.style.display = "none";
  border.style.display = "none";
  play = true;
  draw();
  update();
  if (!gameOver) {
    requestAnimationFrame(loop);
  }
  if (startGame) {
    moveBall();
  }
}
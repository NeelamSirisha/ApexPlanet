const bird = document.getElementById("bird");
const pipeTop = document.getElementById("pipe-top");
const pipeBottom = document.getElementById("pipe-bottom");
const scoreDisplay = document.getElementById("score");

let birdTop = 200;
bird.style.top = birdTop + "px";

let gravity = 2;
let jumping = false;
let pipeLeft = 400;
let score = 0;

function jump() {
  if (!jumping) {
    jumping = true;
    let jumpCount = 0;
    const jumpInterval = setInterval(() => {
      if (jumpCount < 15) {
        birdTop -= 5;
        jumpCount++;
        bird.style.top = birdTop + "px";
      } else {
        clearInterval(jumpInterval);
        jumping = false;
      }
    }, 20);
  }
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    jump();
  }
});

function movePipes() {
  pipeLeft -= 2;
  if (pipeLeft < -50) {
    pipeLeft = 400;
    let topHeight = Math.floor(Math.random() * 200) + 50;
    let bottomHeight = 500 - topHeight - 150;
    pipeTop.style.height = topHeight + "px";
    pipeBottom.style.height = bottomHeight + "px";
    score++;
    scoreDisplay.innerText = "Score: " + score;
  }
  pipeTop.style.left = pipeLeft + "px";
  pipeBottom.style.left = pipeLeft + "px";
}

function applyGravity() {
  if (!jumping) {
    birdTop += gravity;
    bird.style.top = birdTop + "px";
  }
}

function checkCollision() {
  const birdBottom = birdTop + 30;
  const topPipeHeight = parseInt(pipeTop.style.height);
  const bottomPipeTop = 500 - parseInt(pipeBottom.style.height);

  if (
    pipeLeft < 130 &&
    pipeLeft + 50 > 100 &&
    (birdTop < topPipeHeight || birdBottom > bottomPipeTop)
  ) {
    alert("Game Over! Score: " + score);
    location.reload();
  }

  if (birdTop >= 470 || birdTop <= 0) {
    alert("Game Over! Score: " + score);
    location.reload();
  }
}

function gameLoop() {
  applyGravity();
  movePipes();
  checkCollision();
}

setInterval(gameLoop, 20);

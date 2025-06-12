const dragon = document.getElementById("dragon");
const obstacle = document.getElementById("obstacle");
const scoreDisplay = document.getElementById("score");

let isJumping = false;
let score = 0;
let gameOver = false;

// Jump function
function jump() {
  if (!isJumping) {
    isJumping = true;
    dragon.classList.add("jump");
    setTimeout(() => {
      dragon.classList.remove("jump");
      isJumping = false;
    }, 500);
  }
}

// Check for collision
let checkGameOver = setInterval(() => {
  const dragonBottom = parseInt(window.getComputedStyle(dragon).getPropertyValue("bottom"));
  const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

  if (obstacleLeft < 90 && obstacleLeft > 20 && dragonBottom <= 50) {
    obstacle.style.animation = "none";
    obstacle.style.display = "none";
    alert("Game Over! Score: " + score);
    gameOver = true;
    clearInterval(scoreInterval);
    clearInterval(checkGameOver);
  }
}, 10);

// Increase score
let scoreInterval = setInterval(() => {
  if (!gameOver) {
    score++;
    scoreDisplay.innerText = "Score: " + score;
  }
}, 100);

// Event listener
document.addEventListener("keydown", jump);

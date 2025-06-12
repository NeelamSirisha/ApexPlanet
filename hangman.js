const wordList = ["apple", "banana", "orange", "cherry", "grapes", "mango"];
let selectedWord = "";
let guessedLetters = [];
let wrongGuesses = 0;
const maxWrong = 6;

function startGame() {
  selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
  guessedLetters = [];
  wrongGuesses = 0;
  document.getElementById("message").textContent = "";
  updateDisplay();
  generateLetterButtons();
  updateImage();
}

function generateLetterButtons() {
  const lettersDiv = document.getElementById("letters");
  lettersDiv.innerHTML = "";

  for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    const btn = document.createElement("button");
    btn.textContent = letter;
    btn.onclick = () => guessLetter(letter.toLowerCase());
    lettersDiv.appendChild(btn);
  }
}

function guessLetter(letter) {
  if (guessedLetters.includes(letter)) return;
  guessedLetters.push(letter);

  const buttons = document.querySelectorAll("#letters button");
  buttons.forEach(btn => {
    if (btn.textContent.toLowerCase() === letter) {
      btn.disabled = true;
    }
  });

  if (selectedWord.includes(letter)) {
    updateDisplay();
    if (isWordGuessed()) {
      document.getElementById("message").textContent = "🎉 You Win!";
      disableAllButtons();
    }
  } else {
    wrongGuesses++;
    updateImage();
    if (wrongGuesses >= maxWrong) {
      document.getElementById("message").textContent = `😢 Game Over! The word was: ${selectedWord}`;
      disableAllButtons();
    }
  }
}

function updateDisplay() {
  const wordDisplay = selectedWord
    .split("")
    .map(letter => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");
  document.getElementById("word-display").textContent = wordDisplay;
}

function isWordGuessed() {
  return selectedWord.split("").every(letter => guessedLetters.includes(letter));
}

function disableAllButtons() {
  document.querySelectorAll("#letters button").forEach(btn => btn.disabled = true);
}

function updateImage() {
  const img = document.getElementById("hangman-img");
  img.src = `hangman${wrongGuesses}.png`;
  img.style.transform = `translateX(${wrongGuesses * 10}px)`; // Add movement
}

function resetGame() {
  startGame();
}

window.onload = startGame;

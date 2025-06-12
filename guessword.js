const words = [
  { word: "apple", hint: "A fruit" },
  { word: "computer", hint: "Electronic device" },
  { word: "elephant", hint: "Largest land animal" },
  { word: "pencil", hint: "Used for writing" },
  { word: "guitar", hint: "A musical instrument" }
];

let selectedWord, displayedWord, attempts, wrongLetters;

function initializeGame() {
  const random = words[Math.floor(Math.random() * words.length)];
  selectedWord = random.word.toLowerCase();
  document.getElementById("hint").textContent = random.hint;

  displayedWord = Array(selectedWord.length).fill("_");
  attempts = 6;
  wrongLetters = [];

  updateDisplay();
  document.getElementById("message").textContent = "";
  document.getElementById("letterInput").value = "";
}

function updateDisplay() {
  document.getElementById("wordDisplay").textContent = displayedWord.join(" ");
  document.getElementById("wrongLetters").textContent = wrongLetters.join(", ");
  document.getElementById("attempts").textContent = attempts;
}

function guessLetter() {
  const input = document.getElementById("letterInput");
  const letter = input.value.toLowerCase();

  if (!letter || letter.length !== 1 || !letter.match(/[a-z]/i)) {
    alert("Please enter a valid letter");
    return;
  }

  if (selectedWord.includes(letter)) {
    selectedWord.split("").forEach((char, i) => {
      if (char === letter) displayedWord[i] = letter;
    });
  } else {
    if (!wrongLetters.includes(letter)) {
      wrongLetters.push(letter);
      attempts--;
    }
  }

  input.value = "";
  updateDisplay();

  if (!displayedWord.includes("_")) {
    document.getElementById("message").textContent = "🎉 You won!";
  } else if (attempts === 0) {
    document.getElementById("message").textContent = `💀 Game over! Word was "${selectedWord}".`;
  }
}

function restartGame() {
  initializeGame();
}

initializeGame();

const container = document.getElementById("game-container");
let board = [];

function createBoard() {
  board = Array.from({ length: 4 }, () => Array(4).fill(0));
  addNumber();
  addNumber();
  drawBoard();
}

function drawBoard() {
  container.innerHTML = '';
  for (let row of board) {
    for (let cell of row) {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.textContent = cell === 0 ? "" : cell;
      if (cell !== 0) {
        tile.setAttribute("data-value", cell);
      }
      container.appendChild(tile);
    }
  }
}

function addNumber() {
  let empty = [];
  board.forEach((row, i) =>
    row.forEach((cell, j) => {
      if (cell === 0) empty.push([i, j]);
    })
  );
  if (empty.length === 0) return;
  let [i, j] = empty[Math.floor(Math.random() * empty.length)];
  board[i][j] = Math.random() > 0.1 ? 2 : 4;
}

function slide(row) {
  row = row.filter(val => val);
  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] === row[i + 1]) {
      row[i] *= 2;
      row[i + 1] = 0;
    }
  }
  return row.filter(val => val).concat(Array(4 - row.filter(val => val).length).fill(0));
}

function rotateBoard(clockwise = true) {
  let newBoard = Array.from({ length: 4 }, () => Array(4).fill(0));
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      newBoard[i][j] = clockwise ? board[3 - j][i] : board[j][3 - i];
    }
  }
  board = newBoard;
}

function moveLeft() {
  let changed = false;
  board = board.map(row => {
    let newRow = slide(row);
    if (JSON.stringify(row) !== JSON.stringify(newRow)) changed = true;
    return newRow;
  });
  if (changed) {
    addNumber();
    drawBoard();
  }
}

function moveRight() {
  board = board.map(row => row.reverse());
  moveLeft();
  board = board.map(row => row.reverse());
}

function moveUp() {
  rotateBoard(false);
  moveLeft();
  rotateBoard(true);
}

function moveDown() {
  rotateBoard(true);
  moveLeft();
  rotateBoard(false);
}

document.addEventListener("keydown", e => {
  switch (e.key) {
    case "ArrowLeft": moveLeft(); break;
    case "ArrowRight": moveRight(); break;
    case "ArrowUp": moveUp(); break;
    case "ArrowDown": moveDown(); break;
  }
});

createBoard();

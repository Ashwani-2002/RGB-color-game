const easyGameData = [0, 0, 0, 0];
const hardGameData = [0, 0, 0, 0, 0, 0, 0];
let prev = 0;

function reset() {
  resetButton.textContent = "NEW COLORS";
  if (prev === 0) easyGame();
  else hardGame();
}

const colorName = document.getElementById("rand-color");
const resetButton = document.getElementById("restart");
const prompt = document.getElementById("prompt");
const easyGameButton = document.getElementById("easy-game");
const hardGameButton = document.getElementById("hard-game");
const easyGameArena = document.querySelector("#easy-part ul");
const hardGameArena = document.querySelector("#hard-part ul");
const easyGameFieldElements = document.querySelectorAll("#easy-part li");
const hardGameFieldElements = document.querySelectorAll("#hard-part li");
const headerPart = document.getElementById("color-part");
const mainPart = document.querySelector("main");

resetButton.addEventListener("click", reset);
easyGameButton.addEventListener("click", easyGame);
hardGameButton.addEventListener("click", hardGame);

for (const easyGameFieldElement of easyGameFieldElements) {
  easyGameFieldElement.addEventListener("click", selectEasyField);
}

for (const hardGameFieldElement of hardGameFieldElements) {
  hardGameFieldElement.addEventListener("click", selectHardField);
}
reset();

let correctCell = 0;
const listItems = document.querySelector("#easy-part ul").children;

function randomNum(num) {
  return Math.floor(Math.random() * num + 1);
}

function color(red, green, blue) {
  let s = "rgb(" + red + "," + green + "," + blue + ")";
  return s;
}

function selectEasyField(event) {
  const selectedField = event.target;
  const fieldId = selectedField.dataset.eid;
  if (easyGameData[fieldId] === 1) return;

  easyGameData[fieldId] = 1;
  if (fieldId == correctCell) {
    let correctColor = listItems[fieldId - 1].style.backgroundColor;
    // console.log(correctColor);
    for (const element of listItems) {
      element.style.backgroundColor = correctColor;
    }
    for (let i = 1; i <= 3; i++) {
      easyGameData[i] = 1;
    }
    headerPart.style.backgroundColor = correctColor;
    prompt.textContent = "Correct!!!";
    resetButton.textContent = "Restart";
  } else {
    listItems[fieldId - 1].style.backgroundColor = "#292927";
    prompt.textContent = "Try Again";
  }
}

function easyGame() {
  prev = 0;
  resetButton.textContent = "NEW COLORS";
  for (let i = 1; i <= 3; i++) easyGameData[i] = 0;
  easyGameArena.style.display = "grid";
  hardGameArena.style.display = "none";
  headerPart.style.backgroundColor = "rgba(255, 189, 1, 255)";
  //   document.querySelector("html").style.backgroundColor = "#292927";
  prompt.textContent = "";
  correctCell = randomNum(3);

  for (let i = 1; i <= 3; i++) {
    let index = i - 1;
    let red = (randomNum(256) - 1).toString();
    let green = (randomNum(256) - 1).toString();
    let blue = (randomNum(256) - 1).toString();
    listItems[index].style.backgroundColor = color(red, green, blue);

    if (i === correctCell) {
      colorName.textContent = color(red, green, blue);
    }
  }
}

let hcorrectCell = 0;
const hlistItems = document.querySelector("#hard-part ul").children;

function selectHardField(event) {
  const selectedField = event.target;
  const fieldId = selectedField.dataset.hid;
  if (hardGameData[fieldId] === 1) return;
  console.log(hardGameData);
  console.log(hcorrectCell);
  console.log(fieldId);

  hardGameData[fieldId] = 1;
  if (fieldId == hcorrectCell) {
    let correctColor = hlistItems[fieldId - 1].style.backgroundColor;
    // console.log(correctColor);
    for (const element of hlistItems) {
      element.style.backgroundColor = correctColor;
    }
    for (let i = 1; i <= 6; i++) {
      hardGameData[i] = 1;
    }
    headerPart.style.backgroundColor = correctColor;
    prompt.textContent = "Correct!!!";
    resetButton.textContent = "Restart";
  } else {
    hlistItems[fieldId - 1].style.backgroundColor = "#292927";
    prompt.textContent = "Try Again";
  }
}

function hardGame() {
  prev = 1;
  resetButton.textContent = "NEW COLORS";
  for (let i = 1; i <= 6; i++) hardGameData[i] = 0;
  easyGameArena.style.display = "none";
  hardGameArena.style.display = "grid";
  headerPart.style.backgroundColor = "rgba(255, 189, 1, 255)";
  //   document.querySelector("html").style.backgroundColor = "#292927";
  prompt.textContent = "";
  hcorrectCell = randomNum(6);

  for (let i = 1; i <= 6; i++) {
    let index = i - 1;
    let red = (randomNum(256) - 1).toString();
    let green = (randomNum(256) - 1).toString();
    let blue = (randomNum(256) - 1).toString();
    hlistItems[index].style.backgroundColor = color(red, green, blue);

    if (i === hcorrectCell) {
      colorName.textContent = color(red, green, blue);
    }
  }
}

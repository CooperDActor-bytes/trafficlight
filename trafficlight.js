const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

function turnOnLight(light) {
  light.style.opacity = 1;
}

function handleKeyPress(event) {
  const numberPressed = event.key;
  if (numberPressed === "1") {
    turnOnLight(red);
  } else if (numberPressed === "2") {
    turnOnLight(yellow);
  } else if (numberPressed === "3") {
    turnOnLight(green);
  }
}

document.addEventListener("keypress", handleKeyPress);
console.log("JS Prick - Cd")

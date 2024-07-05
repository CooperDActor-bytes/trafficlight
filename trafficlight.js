const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

function handleKeyPress(event) {
  const numberPressed = event.key;
  red.style.opacity = 0; // Reset all lights to off initially
  yellow.style.opacity = 0;
  green.style.opacity = 0;
  if (numberPressed === "1") {
    red.style.opacity = 1;
  } else if (numberPressed === "2") {
    yellow.style.opacity = 1;
  } else if (numberPressed === "3") {
    green.style.opacity = 1;
  }
}

document.addEventListener("keypress", handleKeyPress);

console.log("JS Prick - Cd")

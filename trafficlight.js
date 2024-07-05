function handleKeyPress(event) {
  const numberPressed = event.key;
  if (numberPressed === "1") {
    console.log("Turning on red light");
    red.style.opacity = 1;
  } else if (numberPressed === "2") {
    console.log("Turning on yellow light");
    yellow.style.opacity = 1;
  } else if (numberPressed === "3") {
    console.log("Turning on green light");
    green.style.opacity = 1;
  }
}

console.log("u found me! - Cd")

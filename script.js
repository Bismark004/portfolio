const texts = [ "Web developer", "Frontend developer"]; // Array of texts to be displayed
const delay = 1000; // Delay between each text (in milliseconds)
const typingDelay = 60; // Delay between each character during typing (in milliseconds)
const eraseDelay = 10; // Delay between each character during erasing (in milliseconds)

let index = 0;
const textContainer = document.getElementById('typing-effect');

function type() {
  if (index >= texts.length) {
    index = 0; // Reset index to 0 once it reaches the end of the array
  }

  const currentText = texts[index];
  let textIndex = 0;

  function typeCharacter() {
    if (textIndex < currentText.length) {
      textContainer.textContent += currentText.charAt(textIndex);
      textIndex++;
      setTimeout(typeCharacter, typingDelay);
    } else {
      setTimeout(erase, delay);
    }
  }

  function erase() {
    if (textContainer.textContent.length > 0) {
      textContainer.textContent = textContainer.textContent.slice(0, -1);
      setTimeout(erase, eraseDelay);
    } else {
      index++;
      setTimeout(type, delay);
    }
  }

  typeCharacter();
}

type();



import playSound from "./playSound.js";
import blinkButton from "./blinkButton.js";

const handleButtonClick = (element, style, timeInterval) => {
    playSound(element.sound);
    blinkButton(element, style, timeInterval);
}

export default handleButtonClick
import playSound from "./playSound.js";
import blinkButton from "./blinkButton.js";
import saveClickedBtn from "./saveClickedBtn.js";

const handleButtonClick = (element, elementIndex, style, timeInterval) => {
    playSound(element.sound);
    blinkButton(element, style, timeInterval);
    saveClickedBtn(elementIndex);
}

export default handleButtonClick
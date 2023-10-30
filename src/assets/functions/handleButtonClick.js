import { saveClickedBtn } from "./saveClickedBtn.js";
import animateButton from "./animateButton.js";

const handleButtonClick = (element, style, timeInterval, elementIndex = "default") => {
    animateButton(element.sound, element, style, timeInterval)
    const clickedButtons = saveClickedBtn(elementIndex, "click");

    return clickedButtons
}

export default handleButtonClick
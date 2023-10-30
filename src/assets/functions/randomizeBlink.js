import { saveClickedBtn } from "./saveClickedBtn.js";

const randomizeBlink = () => {
    const numberOfButtons = 4;
    const randomNumber = Math.floor(Math.random(numberOfButtons) * numberOfButtons);
    const randomBlinkedButtons = saveClickedBtn(randomNumber);

    return randomBlinkedButtons
}

export default randomizeBlink
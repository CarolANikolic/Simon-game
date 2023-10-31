import levelUp from "./levelUp.js";

let gameLevel = 0;

const compareClickedButtons = (randomBlinkedButtons, clickedButtons, title) => {

    console.log("Blink sequence: " + randomBlinkedButtons)
    console.log("Player sequence: " + clickedButtons)
    
    let isClickedBtnCompatible = true;
    let clickedButtonsLength = clickedButtons.length;

    for (let i = 0; i < clickedButtonsLength; i++) {
        if (clickedButtons[i] !== randomBlinkedButtons[i]) {
            isClickedBtnCompatible = false;
            break;
        }
    }

    if (isClickedBtnCompatible) {
        if (clickedButtonsLength === randomBlinkedButtons.length) {
            gameLevel++;
            levelUp(gameLevel, title, isClickedBtnCompatible);
        }
    }

    return isClickedBtnCompatible;
}

export default compareClickedButtons

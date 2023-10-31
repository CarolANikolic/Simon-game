import randomizeBlink from "./randomizeBlink.js";
import animateButtonsInSequence from "./animateButtonsInSequence.js";

const startGameRound = (
    animationTimer,
    currentIndex, 
    blinkArray, 
    buttonsObject, 
    gameButtons, 
    style, 
    buttonTimer
    ) => {

    randomizeBlink();
    animateButtonsInSequence(
        animationTimer,
        currentIndex, 
        blinkArray, 
        buttonsObject, 
        gameButtons, 
        style, 
        buttonTimer
    )
}

export default startGameRound
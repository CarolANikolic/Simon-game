import randomizeBlink from "./randomizeBlink.js";
import animateButtonsInSequence from "./animateButtonsInSequence.js";

const startGameRound = (
    main,
    animationTimer,
    currentIndex, 
    blinkArray, 
    buttonsObject, 
    gameButtons, 
    style, 
    buttonTimer
    ) => {
    
    main.removeClass("game-over");
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
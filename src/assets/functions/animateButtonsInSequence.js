import animateButton from "./animateButton.js";

const animateButtonsInSequence = (
    animationTimer,
    currentIndex, 
    blinkArray, 
    buttonsObject, 
    gameButtons, 
    style, 
    buttonTimer, 
    ) => {
    animationTimer = setInterval(() => {
        if (currentIndex < blinkArray.length) {
            const buttonIndex = blinkArray[currentIndex];
            animateButton(
                buttonsObject[buttonIndex].sound,
                gameButtons[buttonIndex],
                style,
                buttonTimer
            );
            currentIndex++;
        } else {
            clearInterval(animationTimer);
        }
    }, 1000);
};

export default animateButtonsInSequence
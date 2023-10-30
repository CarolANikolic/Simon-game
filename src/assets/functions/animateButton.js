import playSound from "./playSound.js"
import blinkButton from "./blinkButton.js"

const animateButton = (sound, element, style, time) => {

        playSound(sound);
        blinkButton(
        element, 
        style, 
        time
        )
}

export default animateButton
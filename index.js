import Button from "./src/components/Button/index.js";
import gameButtons from "./src/assets/objects/gameButtons.js";
import handleButtonClick from "./src/assets/functions/handleButtonClick.js";
import randomizeBlink from "./src/assets/functions/randomizeBlink.js";
import { clickedButtons, randomBlinkedButtons } from "./src/assets/functions/saveClickedBtn.js";
import compareClickedButtons from "./src/assets/functions/compareClickedButtons.js";
import animateButton from "./src/assets/functions/animateButton.js";

const main = $("main");
const buttonsContainer = $("<div>");
buttonsContainer.addClass("buttonsContainer");

const title = $("<h1>");
title.text("Press a Key to Start")
title.addClass("gameTitle")
main.append(title)

$(gameButtons).each((i, gameBtn) => {

    buttonsContainer.append(Button(
        gameBtn.type, 
        gameBtn.id, 
        gameBtn.style,
        () => 
        handleButtonClick(
            gameBtn, 
            "buttonsContainer--button-pressed", 
            50, 
            i
            )
        ))
});


main.append(buttonsContainer)


$(document).on("keydown", () => {
    const simonButtons = $("button");
    randomizeBlink()

    $(randomBlinkedButtons).map((_, i) => {
        animateButton(
                gameButtons[i].sound,
                simonButtons[i],
                "buttonsContainer--button-pressed", 
                50
            )
    })

    compareClickedButtons(randomBlinkedButtons, clickedButtons)
})
import Button from "./src/components/Button/index.js";
import gameButtons from "./src/assets/objects/gameButtons.js";
import handleButtonClick from "./src/assets/functions/handleButtonClick.js";

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
            50
            )
        ))
});

main.append(buttonsContainer)
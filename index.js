import Button from "./src/components/Button/index.js";
import gameButtons from "./src/assets/objects/gameButtons.js";

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
        () => console.log("clicked")
        ))
});



main.append(buttonsContainer)
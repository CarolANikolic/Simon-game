import Button from "./src/components/Button/index.js";
import gameButtons from "./src/assets/objects/gameButtons.js";
import handleButtonClick from "./src/assets/functions/handleButtonClick.js";
import { clickedButtons, randomBlinkedButtons } from "./src/assets/functions/saveClickedBtn.js";
import updateTitle from "./src/assets/functions/updateTitle.js";
import compareClickedButtons from "./src/assets/functions/compareClickedButtons.js";
import startGameRound from "./src/assets/functions/startGameRound.js";
import gameOver from "./src/assets/functions/gameOver.js";

// Create and access necessary containers and elements
const main = $("main");
const buttonsContainer = $("<div>");
const title = $("<h1>");

// Add styles
buttonsContainer.addClass("buttonsContainer");
title.addClass("gameTitle gameTitle-smaller-devices")

// On smaller screens the game should start when clicked on the title
    if (window.innerWidth <= 1024) {
        updateTitle(title, "Click Here to Start");

        title.on("click", () => {
            if (!isGameInProgress) {
                isGameInProgress = true;
        
                startGameRound(
                    main,
                    animationTimer,
                    currentButtonIndex, 
                    randomBlinkedButtons, 
                    gameButtons, 
                    simonButtons,  
                    "buttonsContainer--button-pressed",
                    50
                );
            } 
        })
    } else {
        updateTitle(title, "Press a Key to Start");
    }
main.append(title)

// Create Buttons and append them into main
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

const simonButtons = $("button");
let isGameInProgress = false;
let currentButtonIndex = 0;
let animationTimer;


// Automatically starts a new round
const autoStartNewRound = () => {
    if (randomBlinkedButtons.length === clickedButtons.length) {
        setTimeout(() => {
            currentButtonIndex = 0;
            isGameInProgress = true;
            startGameRound(
                main,
                animationTimer,
                currentButtonIndex, 
                randomBlinkedButtons, 
                gameButtons, 
                simonButtons,  
                "buttonsContainer--button-pressed",
                50
            );
        }, 1000); 
    }
};

// Event listener for keydown
$(document).on("keydown", () => {
    if (!isGameInProgress) {
        isGameInProgress = true;
        startGameRound(
            main,
            animationTimer,
            currentButtonIndex, 
            randomBlinkedButtons, 
            gameButtons, 
            simonButtons,  
            "buttonsContainer--button-pressed",
            50
        );
    } 
});

simonButtons.on("click", () => {
    if (isGameInProgress && randomBlinkedButtons.length === clickedButtons.length) {
        let result = compareClickedButtons(randomBlinkedButtons, clickedButtons, title);
        isGameInProgress = false;
        clearInterval(animationTimer);

        if (!result) {
            gameOver(title, "game-over");
        } else {
            autoStartNewRound(); 
        }
    }
});
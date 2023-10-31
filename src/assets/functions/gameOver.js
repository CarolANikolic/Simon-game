import toggleOpacity from "./toggleOpacity.js";
import playSound from "./playSound.js";

const gameOver = (title, style) => {
    const mainPage = $("main");
    mainPage.addClass(style);

    title.text("Game Over!");
    title.css('opacity', 0.2);

    const blinkInterval = setInterval(toggleOpacity(title, 3), 600); 

    setTimeout(() => {
        clearInterval(blinkInterval); 
        title.css('opacity', 1);
        playSound("public/sounds/wrong.mp3")
        location.reload(); 
    }, 3000); 
};

export default gameOver;

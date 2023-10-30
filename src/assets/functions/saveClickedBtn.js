const clickedButtons = [];
const randomBlinkedButtons = [];

const saveClickedBtn = (buttonNumber, keyword = "default") => {
    if (keyword === "click") {
        clickedButtons.push(buttonNumber)
    } else {
        randomBlinkedButtons.push(buttonNumber)
    }
}

export { clickedButtons, randomBlinkedButtons, saveClickedBtn }
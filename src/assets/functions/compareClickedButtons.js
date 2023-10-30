let isClickedBtnCompatible = false;
const compareClickedButtons = (randomBlinkedButtons, clickedButtons) => {

    $(clickedButtons).each((i, btn) => {
        if (btn === $(randomBlinkedButtons)[i]) {
            isClickedBtnCompatible = true;
        } else {
            isClickedBtnCompatible = false;
        }
    });

    return isClickedBtnCompatible
}

export default compareClickedButtons
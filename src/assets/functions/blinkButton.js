const blinkButton = (btnData, style, intervalTime) => {
    const btnElement = $(`#${btnData.id}`);

    $(btnElement).addClass(style);

    setInterval(() => {
        $(btnElement).removeClass(style);
    }, intervalTime)
}

export default blinkButton
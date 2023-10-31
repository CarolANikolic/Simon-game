const toggleOpacity = (title, blinkCount) => {
    let count = 0;

    const blinkInterval = setInterval(() => {
        if (count % 2 === 0) {
            title.css('opacity', 1);
        } else {
            title.css('opacity', 0.2);
        }

        count++;

        // Each states of opacity should be active 3 times.
        if (count >= blinkCount * 2) {
            clearInterval(blinkInterval);
            title.css('opacity', 1); 
        }
    }, 300); 
};

export default toggleOpacity;

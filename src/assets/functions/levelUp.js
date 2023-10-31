const levelUp = (index, title, comparisonMatch) => {
    if(comparisonMatch) {
        title.text("Level " + index);
    } 
}

export default levelUp
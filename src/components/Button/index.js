const Button = (type, id, style, action) => {
    const button = $("<button>");
    button.attr("type", type);
    button.attr("id", id)
    button.addClass(style);
    button.on("click", action)
    
    return button
}

export default Button
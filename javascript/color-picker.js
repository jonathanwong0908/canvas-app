const strokeColorPicker = document.querySelector(".stroke-color-picker");
const fillColorPicker = document.querySelector(".fill-color-picker");

strokeColorPicker.setAttribute("selected-color", "black");
fillColorPicker.setAttribute("selected-color", "black");

const strokePopup = new Picker({
    parent: strokeColorPicker,
    color: "black",
    onChange: function(color) {
        strokeColorPicker.style.backgroundColor = color.rgbaString;
        strokeColorPicker.setAttribute("selected-color", color.rgbaString);
    }
});

const fillPopup = new Picker({
    parent: fillColorPicker,
    color: "black",
    onChange: function(color) {
        fillColorPicker.style.backgroundColor = color.rgbaString;
        fillColorPicker.setAttribute("selected-color", color.rgbaString);
    }
});
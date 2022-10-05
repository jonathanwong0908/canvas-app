const strokeColorPicker = document.querySelector(".stroke-color-picker");
const fillColorPicker = document.querySelector(".fill-color-picker");

const startingColor = "black";
strokeColorPicker.style.backgroundColor = startingColor;
fillColorPicker.style.backgroundColor = startingColor;

const strokePopup = new Picker({
    parent: strokeColorPicker,
    color: "black",
    onChange: function(color) {
        strokeColorPicker.style.backgroundColor = color.rgbaString;
    }
});

const fillPopup = new Picker({
    parent: fillColorPicker,
    color: "black",
    onChange: function(color) {
        fillColorPicker.style.backgroundColor = color.rgbaString;
    }
});
const strokeColorInput = document.querySelector(".stroke-color-picker");
const fillColorInput = document.querySelector(".fill-color-picker");

strokeColorInput.setAttribute("selected-color", "black");
fillColorInput.setAttribute("selected-color", "black");

currentStrokeColor = "black";
currentFillColor = "black";

const strokePopup = new Picker({
    parent: strokeColorInput,
    color: "black",
    onChange: function(color) {
        let rgbaString = color.rgbaString;
        strokeColorInput.style.backgroundColor = rgbaString;
        strokeColorInput.setAttribute("selected-color", rgbaString);
        currentStrokeColor = rgbaString;
        document.querySelector(".width-size").style.backgroundColor = rgbaString;
        document.documentElement.style.setProperty("--accent-clr", rgbaString);
    }
});

const fillPopup = new Picker({
    parent: fillColorInput,
    color: "black",
    onChange: function(color) {
        let rgbaString = color.rgbaString;
        fillColorInput.style.backgroundColor = rgbaString;
        fillColorInput.setAttribute("selected-color", rgbaString);
        currentFillColor = rgbaString;
    }
});
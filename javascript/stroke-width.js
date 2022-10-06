const widthIndicator = document.querySelector(".width-size");
const widthText = document.querySelector(".stroke-width-text");
const widthRangeInput = document.querySelector(".stroke-width-range-input");

let startingWidth = widthRangeInput.value

widthText.innerText = `${startingWidth}px`;
widthIndicator.style.width = `${startingWidth}px`

widthRangeInput.addEventListener("input", (event) => {
    let value = event["target"].value;
    widthText.innerText = `${value}px`;
    widthRangeInput.setAttribute("value", value);
    widthIndicator.style.width = `${value}px`;
})
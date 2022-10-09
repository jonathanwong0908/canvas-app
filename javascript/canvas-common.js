const canvasReal = document.querySelector("#canvas-real");
const canvasDraft = document.querySelector("#canvas-draft");
const contextReal = canvasReal.getContext("2d");
const contextDraft = canvasDraft.getContext("2d");
let currentFunction;
let dragging = false;

let startBackgroundColor = "white";

// undo variables
let canvasHistoryArray = [];
let canvasHistoryIndex = -1;

// drawing tool color change while selected
const drawingToolButtons = document.querySelectorAll(".drawing-tool-button");

drawingToolButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let currentSelectedButton = document.querySelector("[selected=true]");
        currentSelectedButton.setAttribute("selected", "false");
        button.setAttribute("selected", "true");
    })
})

// set fill and stroke inputs as variables for usage in other scripts
const strokeColorInput = document.querySelector(".stroke-color-picker");
const fillColorInput = document.querySelector(".fill-color-picker");

$(() => {
    currentFunction = new DrawingLine(contextReal);

    $(".line-button").on("click", () => {
        currentFunction = new DrawingLine(contextReal);
    })
})

canvasDraft.addEventListener("mousedown", (event) => {
    let mouseX = event.offsetX;
    let mouseY = event.offsetY;
    currentFunction.onMouseDown([mouseX, mouseY], event);
    dragging = true;
})

canvasDraft.addEventListener("mousemove", (event) => {
    let mouseX = event.offsetX;
    let mouseY = event.offsetY;
    
    if(dragging) {
        currentFunction.onDragging([mouseX, mouseY], event);
    }

    currentFunction.onMouseMove([mouseX,mouseY], event);
})

canvasDraft.addEventListener("mouseup", (event) => {
    dragging = false;
    let mouseX = event.offsetX;
    let mouseY = event.offsetY;
    currentFunction.onMouseUp([mouseX, mouseY], event);
})

canvasDraft.addEventListener("mouseleave", (event) => {
    dragging = false;
    let mouseX = event.offsetX;
    let mouseY = event.offsetY;
    currentFunction.onMouseDown([mouseX, mouseY], event);
})

canvasDraft.addEventListener("mouseenter", (event) => {
    let mouseX = event.offsetX;
    let mouseY = event.offsetY;
    currentFunction.onMouseEnter([mouseX, mouseY], event);
})

class PaintFunction {
    constructor() {}
    onMouseDown() {}
    onDragging() {}
    onMouseMove() {}
    onMouseUp() {}
    onMouseLeave() {}
    onMouseEnter() {}
}
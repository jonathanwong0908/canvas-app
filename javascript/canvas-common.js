const canvasReal = document.querySelector("#canvas-real");
const canvasDraft = document.querySelector("#canvas-draft");
const contextReal = canvasReal.getContext("2d");
const contextDraft = canvasDraft.getContext("2d");

contextReal.fillStyle = "white";
contextReal.fillRect(0, 0, canvasReal.width, canvasReal.height);

let currentFunction;
let dragging = false;

let startBackgroundColor = "white";

// undo variables
let canvasHistoryArray = [];
let canvasHistoryIndex = -1;

// colors
let currentStrokeColor = "";
let currentFillColor = "";

// stroke width
let currentStrokeWidth = "";

// drawing tool color change while selected
const drawingToolButtons = document.querySelectorAll(".drawing-tool-button");

drawingToolButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let currentSelectedButton = document.querySelector("[selected=true]");
        currentSelectedButton.setAttribute("selected", "false");
        button.setAttribute("selected", "true");
    })
})

$(() => {
    currentFunction = new Drawing(contextReal);

    $(".draw-button").click(() => {
        currentFunction = new Drawing(contextReal);
    })

    $(".line-button").click(() => {
        currentFunction = new DrawingLine(contextReal, contextDraft);
    })

    $(".rectangle-button").click(() => {
        currentFunction = new DrawingRectangle(contextReal, contextDraft);
    })

    $(".circle-button").click(() => {
        currentFunction = new DrawingCircle(contextReal, contextDraft);
    })

    $(".quadratic-curve-button").click(() => {
        currentFunction = new DrawingQuadraticCurve(contextReal, contextDraft);
    })

    $(".eraser-button").click(() => {
        currentFunction = new Eraser(contextReal);
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
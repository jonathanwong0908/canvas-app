const canvasReal = document.querySelector("#canvas-real");
const canvasDraft = document.querySelector("#canvas-draft");
const contextReal = canvasReal.getContext("2d");
const contextDraft = canvasDraft.getContext("2d");
let currentFunction;
let dragging = false;

// drawing buttons
const drawingToolButtons = document.querySelectorAll(".drawing-tool-button");
const drawButton = document.querySelector(".draw-button");
const lineButton = document.querySelector(".line-button");
const RectangleButton = document.querySelector(".rectangle-button");
const circleButton = document.querySelector(".circle-button");
const polygonButton = document.querySelector(".polygon-button");
const bezierCurveButton = document.querySelector(".bezier-curve-button");
const textButton = document.querySelector(".text-button");
const eraserButton = document.querySelector(".eraser-button");

drawingToolButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let currentSelectedButton = document.querySelector("[selected=true]");
        currentSelectedButton.setAttribute("selected", "false");
        button.setAttribute("selected", "true");
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
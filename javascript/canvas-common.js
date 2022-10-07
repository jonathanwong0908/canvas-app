const canvasReal = document.querySelector("#canvas-real");
const canvasDraft = document.querySelector("#canvas-draft");
const contextReal = canvasReal.getContext("2d");
const contextDraft = canvasDraft.getContext("2d");
let currentFunction;
let dragging = false;

const drawingToolButtons = document.querySelectorAll(".drawing-tool-button");

drawingToolButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let currentSelectedButton = document.querySelector("[selected=true]");
        currentSelectedButton.setAttribute("selected", "false");
        button.setAttribute("selected", "true");
    })
})

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
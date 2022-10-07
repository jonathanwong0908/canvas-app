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
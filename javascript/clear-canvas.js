const clearButton = document.querySelector(".clear-button");

clearButton.addEventListener("click", () => {
    clearCanvas();
})

function clearCanvas() {
    contextReal.fillStyle = startBackgroundColor;
    contextReal.clearRect(0, 0, canvasReal.clientWidth, canvasReal.height);
    contextReal.fillRect(0, 0, canvasReal.clientWidth, canvasReal.height);

    undoArray = [];
    undoIndex = -1;
}
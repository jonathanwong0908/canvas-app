const clearButton = document.querySelector(".clear-button");

clearButton.addEventListener("click", () => {
    if (confirm("This will delete all your data on this canvas")) {
        clearCanvas();
        canvasHistoryArray = [];
        canvasHistoryIndex = 0;
        canvasSavePoint = 0;
    } else {
        return;
    }
})

function clearCanvas() {
    contextReal.fillStyle = startBackgroundColor;
    contextReal.clearRect(0, 0, canvasReal.clientWidth, canvasReal.height);
    contextReal.fillRect(0, 0, canvasReal.clientWidth, canvasReal.height);
}

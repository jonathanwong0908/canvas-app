const undoButton = document.querySelector(".undo-button");
const redoButton = document.querySelector(".redo-button");

undoButton.addEventListener("click", () => {
    undo();
})

redoButton.addEventListener("click", () => {
    redo();
})

function undo() {
    if (canvasHistoryIndex >= 1) {
        canvasHistoryIndex--;
        canvasSavePoint = canvasHistoryIndex;
        contextReal.putImageData(canvasHistoryArray[canvasHistoryIndex - 1], 0, 0);
    } 
}

function redo() {
    if (canvasHistoryIndex === canvasSavePoint && canvasHistoryIndex < canvasHistoryArray.length) {
        canvasHistoryIndex++;
        canvasSavePoint++;
        contextReal.putImageData(canvasHistoryArray[canvasHistoryIndex - 1], 0, 0);
    } else if (canvasHistoryIndex !== canvasSavePoint) {
        canvasHistoryArray.splice(canvasHistoryIndex);
        canvasSavePoint = canvasHistoryIndex;
    }
}

function updateCanvasHistory() {
    canvasHistoryArray[canvasHistoryIndex] = contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height);
    canvasHistoryIndex++;
}
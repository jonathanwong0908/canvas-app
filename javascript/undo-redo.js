const undoButton = document.querySelector(".undo-button");
const redoButton = document.querySelector(".redo-button");

undoButton.addEventListener("click", () => {
    undo();
})

redoButton.addEventListener("click", () => {
    redo();
})

function undo() {
    if (canvasHistoryIndex === 0) {
        clearCanvas();
        // from clear-canvas.js
        canvasHistoryIndex--;
    } else if (canvasHistoryIndex > 0) {
        canvasHistoryIndex--;
        contextReal.putImageData(canvasHistoryArray[canvasHistoryIndex], 0, 0);
    } else {
        return;
    }
}

function redo() {
    // and if current index is less than the length of the array?
    if (canvasHistoryIndex < canvasHistoryArray.length - 1) {
        canvasHistoryIndex++;
        contextReal.putImageData(canvasHistoryArray[canvasHistoryIndex], 0, 0);
    } else {
        return;
    }
}
const undoButton = document.querySelector(".undo-button");
const redoButton = document.querySelector(".redo-button");

undoButton.addEventListener("click", () => {
    undo();
})

redoButton.addEventListener("click", () => {
    redo();
})

function undo() {
    if (undoIndex > 0) {
        undoIndex--;
        let canvasPic = new Image();
        canvasPic.src = undoArray[undoIndex];
        canvasPic.onload = function () {
            contextReal.drawImage(canvasPic, 0, 0);
        }
    }
}

function redo() {
    if (undoIndex < undoArray.length - 1) {
        undoIndex++;
        let canvasPic = new Image();
        canvasPic.src = undoArray[undoIndex];
        canvasPic.onload = function () {
            contextReal.drawImage(canvasPic, 0, 0);
        }
    }
}

function pushToUndoArray() {
    undoIndex++;
    if (undoIndex < undoArray.length) {
        undoArray.length = undoIndex;
    }
    undoArray.push(canvasReal.toDataURL());
}
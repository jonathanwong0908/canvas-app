const undoButton = document.querySelector(".undo-button");
const redoButton = document.querySelector(".redo-button");

undoButton.addEventListener("click", () => {
    undo();
})

// redoButton.addEventListener("click", () => {
//     redo();
// })

function undo() {
    if (undoIndex <= 0) {
        clearCanvas();
    } else {
        undoIndex -= 1;
        redoArray.push(undoArray.pop());
        contextReal.putImageData(undoArray[undoIndex], 0, 0);
    }
}

// function redo() {
//     if (redoIndex < 0) {
//         return;
//     } else {
//         redoIndex -= 1;
//         undoArray.push(redoArray.pop());
//         undoIndex++;
//         contextReal.putImageData(redoArray[redoIndex], 0, 0);
//     }
// }
class DrawingCircle extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coordinates, event) {
        this.contextReal.strokeStyle = currentStrokeColor;
        this.contextReal.fillStyle = currentFillColor;
        this.contextDraft.strokeStyle = currentStrokeColor;
        this.contextDraft.fillStyle = currentFillColor;
        this.contextReal.lineWidth = currentStrokeWidth;
        this.contextDraft.lineWidth = currentStrokeWidth;
        this.contextReal.beginPath();
        this.origX = coordinates[0];
        this.origY = coordinates[1];
    }

    onDragging(coordinates, event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.ellipse(this.origX, this.origY, Math.abs(coordinates[0] - this.origX), Math.abs(coordinates[1] - this.origY), Math.PI / 180, 0, 2 * Math.PI);
        this.contextDraft.fill();
        this.contextDraft.stroke();
    }

    onMouseUp(coordinates) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.ellipse(this.origX, this.origY, Math.abs(coordinates[0] - this.origX), Math.abs(coordinates[1] - this.origY), Math.PI / 180, 0, 2 * Math.PI);
        this.contextReal.fill();
        this.contextReal.stroke();
        updateCanvasHistory();
    }
}
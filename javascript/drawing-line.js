class DrawingLine extends PaintFunction{
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coordinates, event) {
        this.contextReal.strokeStyle = currentStrokeColor;
        this.contextDraft.strokeStyle = currentStrokeColor;
        this.contextReal.lineCap = "round";
        this.contextDraft.lineCap = "round";
        this.contextReal.lineWidth = currentStrokeWidth;
        this.contextDraft.lineWidth = currentStrokeWidth;
        this.origX = coordinates[0];
        this.origY = coordinates[1];
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX, this.origY);
    }

    onDragging(coordinates, event) {
        dragging = true;
        this.contextDraft.closePath();
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(coordinates[0], coordinates[1]);
        this.contextDraft.stroke();
    }

    onMouseUp(coordinates, event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.lineTo(coordinates[0], coordinates[1]);
        this.contextReal.stroke();
        updateCanvasHistory();
    }
}
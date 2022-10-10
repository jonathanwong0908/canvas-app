class DrawingRectangle extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coordinates, event) {
        this.contextReal.strokeStyle = currentStrokeColor;
        this.contextReal.fillStyle = currentFillColor;
        this.contextReal.lineWidth = currentStrokeWidth;
        this.origX = coordinates[0];
        this.origY = coordinates[1];
    }

    onDragging(coordinates, event) {{
        dragging = true;
        this.contextDraft.strokeStyle = currentStrokeColor;
        this.contextDraft.fillStyle = currentFillColor;
        this.contextDraft.lineWidth = currentStrokeWidth;
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.fillRect(this.origX, this.origY, coordinates[0] - this.origX, coordinates[1] - this.origY);
        this.contextDraft.strokeRect(this.origX, this.origY, coordinates[0] - this.origX, coordinates[1] - this.origY);
        this.contextDraft.fill();
        this.contextDraft.stroke();
        this.contextDraft.closePath();
    }}

    onMouseMove() {}

    onMouseUp(coordinates) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.rect(this.origX, this.origY, coordinates[0] - this.origX, coordinates[1] - this.origY);
        this.contextReal.fill();
        this.contextReal.stroke();
        this.contextReal.closePath();
        updateCanvasHistory();
    }
}
class DrawingQuadraticCurve extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.counter = 0;
    }

    onMouseDown(coordinates, event) {
        if (this.counter === 0) {
            this.contextReal.lineCap = "round";
            this.contextDraft.lineCap = "round";
            this.contextReal.strokeStyle = currentStrokeColor;
            this.contextDraft.strokeStyle = currentStrokeColor;
            this.contextReal.lineWidth = currentStrokeWidth;
            this.contextDraft.lineWidth = currentStrokeWidth;
            this.origX = coordinates[0];
            this.origY = coordinates[1];
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.origX, this.origY);
        }
    }

    onDragging(coordinates, event) {
        if (this.counter === 0) {
            this.endX = coordinates[0];
            this.endY = coordinates[1];
            this.contextDraft.closePath();
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX, this.origY);
            this.contextDraft.quadraticCurveTo(this.origX, this.origY, this.endX, this.endY);
            this.contextDraft.stroke();
        } else if (this.counter === 1) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX, this.origY);
            this.contextDraft.quadraticCurveTo(coordinates[0], coordinates[1], this.endX, this.endY);
            this.contextDraft.stroke();
        }
    }

    onMouseUp(coordinates, event) {
        if (this.counter === 0) {
            this.counter = 1;
        } else if (this.counter === 1) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextReal.quadraticCurveTo(coordinates[0], coordinates[1], this.endX, this.endY);
            this.contextReal.stroke();
            this.counter = 0;
            updateCanvasHistory();
        }
    }
}
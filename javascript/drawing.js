class Drawing extends PaintFunction{
    constructor(contextReal) {
        super();
        this.context = contextReal;
    }

    onMouseDown(coordinates, event) {
        this.context.strokeStyle = currentStrokeColor;
        this.context.lineJoin = "round";
        this.context.lineCap = "round";
        this.context.lineWidth = currentStrokeWidth;
        this.context.beginPath();
        this.context.moveTo(coordinates[0], coordinates[1]);
    }

    onDragging(coordinates, event) {
        this.draw(coordinates[0], coordinates[1]);
    }

    onMouseMove() {}

    onMouseUp() {
        updateCanvasHistory();
        // from undo-redo.js
    }

    onMouseLeave() {}
    onMouseEnter() {}

    draw(x, y) {
        this.context.lineTo(x, y);
        this.context.stroke();
    }
}
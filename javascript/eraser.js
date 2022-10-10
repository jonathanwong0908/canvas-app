class Eraser extends PaintFunction {
    constructor(contextReal) {
        super();
        this.context = contextReal;
    }

    onMouseDown(coordinates, event) {
        this.context.strokeStyle = startBackgroundColor;
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
    }

    onMouseLeave() {}
    onMouseEnter() {}

    draw(x, y) {
        this.context.lineTo(x, y);
        this.context.stroke();
    }
}
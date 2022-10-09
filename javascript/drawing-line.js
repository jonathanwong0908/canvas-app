class DrawingLine extends PaintFunction{
    constructor(contextReal) {
        super();
        this.context = contextReal;
    }

    onMouseDown(coordinates, event) {
        let strokeColor = strokeColorInput.getAttribute("selected-color");
        let strokeWidth = document.querySelector(".stroke-width-range-input").getAttribute("value");

        this.context.strokeStyle = strokeColor;
        this.context.lineJoin = "round";
        this.context.lineCap = "round";
        this.context.lineWidth = strokeWidth;
        this.context.beginPath();
        this.context.moveTo(coordinates[0], coordinates[1]);
    }

    onDragging(coordinates, event) {
        this.draw(coordinates[0], coordinates[1]);
    }

    onMouseMove() {}

    onMouseUp() {
        canvasHistoryArray.push(contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height));
        canvasHistoryIndex++;
    }

    onMouseLeave() {}
    onMouseEnter() {}

    draw(x, y) {
        this.context.lineTo(x, y);
        this.context.stroke();
    }
}
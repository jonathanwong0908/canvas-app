class DrawingLine extends PaintFunction{
    constructor(contextReal) {
        super();
        this.context = contextReal;
    }

    onMouseDown(coordinates, event) {
        let strokeColor = document.querySelector(".stroke-color-picker").getAttribute("selected-color");
        let strokeWidth = document.querySelector(".stroke-width-range-input").getAttribute("value");

        this.context.strokeStyle = strokeColor;
        this.context.lineJoin = "round";
        this.context.lineWidth = strokeWidth;
        this.context.beginPath();
        this.context.moveTo(coordinates[0], coordinates[1]);
    }

    onDragging(coordinates, event) {
        this.draw(coordinates[0], coordinates[1]);
    }

    onMouseMove() {}
    onMouseUp() {}
    onMouseLeave() {}
    onMouseEnter() {}

    draw(x, y) {
        this.context.lineTo(x, y);
        this.context.stroke();
    }
}
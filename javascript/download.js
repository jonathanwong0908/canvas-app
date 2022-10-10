const downloadButton = document.querySelector(".download-button");
downloadButton.addEventListener("click", () => downloadImage());

function downloadImage() {
    image = canvasReal.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
    var link = document.createElement('a');
    link.download = "my-paint.png";
    link.href = image;
    link.click();
}
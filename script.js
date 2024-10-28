const gridContainer = document.getElementById("gridContainer");

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.className = "square";
    gridContainer.appendChild(square);
}
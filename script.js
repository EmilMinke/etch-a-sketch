const gridContainer = document.getElementById("gridContainer");

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.className = "square";

    square.addEventListener("mouseover", function() {
        this.style.backgroundColor = getRandomColor(); // Change the square color
    });

    gridContainer.appendChild(square);
}

// helper function to get a random color
function getRandomColor() {
    const hexSymbols = "0123456789ABCDEF";
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hexSymbols[Math.floor(Math.random() * 16)];
    }
    return hexColor;
}
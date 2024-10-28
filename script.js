const gridContainer = document.getElementById("gridContainer");

function createGrid(size) {
    gridContainer.innerHTML = ""; // Clear existing grid
    const totalSquares = size * size;
    const squareSize = 960 / size; // Calculate size of each square

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = getRandomColor();
        });
        gridContainer.appendChild(square);
    }
}

// Function to get a random color
function getRandomColor() {
    const hexSymbols = "0123456789ABCDEF";
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hexSymbols[Math.floor(Math.random() * 16)];
    }
    return hexColor;
}

function changeGridSize() {
    let input = prompt("Enter the number of squares per side (1 to 100):");
    let size = parseInt(input);

    // Validate input
    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100.")
    } else {
        createGrid(size);
    }
}

// Attach event listener to the button
document.getElementById("gridButton").addEventListener("click", changeGridSize);

// Create the initial grid
createGrid(16);
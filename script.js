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

        // Initialize darkening effect data
        square.interactionCount = 0; // Initialize interaction count
        square.rgbColor = getRandomRGBValues();

        square.addEventListener("mouseover", () => {
            // Darken RGB values by 10% each hover
            if (square.interactionCount < 10) {
                square.rgbColor = darkenColor(square.rgbColor, 0.1);
                square.style.backgroundColor = `rgb(${square.rgbColor.r}, ${square.rgbColor.g}, ${square.rgbColor.b})`;
                square.interactionCount++;
            }
        });
        gridContainer.appendChild(square);
    }
}

// Function to get random RGB values
function getRandomRGBValues() {
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    };
}

// Darken color by reducing each RGB component by percentage
function darkenColor(color, percentage) {
    return {
        r: Math.floor(color.r * (1 - percentage)),
        g: Math.floor(color.g * (1 - percentage)),
        b: Math.floor(color.b * (1 - percentage))
    };
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
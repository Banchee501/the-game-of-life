// Define the canvas and its properties
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const resolution = 10;
canvas.width = 600;
canvas.height = 400;

// Define the grid and its properties
const columns = canvas.width / resolution;
const rows = canvas.height / resolution;
let grid = createGrid();

// Create a 2D array to represent the grid
function createGrid() {
  return Array(columns).fill()
    .map(() => Array(rows).fill()
    .map(() => Math.floor(Math.random() * 2)));
}

// Update the grid based on the rules of the Game of Life
function update() {
    const nextGrid = createGrid();
  
    // Loop through each cell in the grid
    for (let col = 0; col < columns; col++) {
      for (let row = 0; row < rows; row++) {
  
        // Count the number of live neighbors for the current cell
        let neighbors = 0;
        for (let i = -1; i < 2; i++) {
          for (let j = -1; j < 2; j++) {
            if (i === 0 && j === 0) {
              continue;
            }
  
            const x = col + i;
            const y = row + j;
  
            if (x >= 0 && y >= 0 && x < columns && y < rows) {
              neighbors += grid[x][y];
            }
          }
        }
  
        // Apply the rules to the current cell
        if (grid[col][row] === 1) {
          if (neighbors < 2 || neighbors > 3) {
            nextGrid[col][row] = 0;
          } else {
            nextGrid[col][row] = 1;
          }
        } else {
          if (neighbors === 3) {
            nextGrid[col][row] = 1;
          } else {
            nextGrid[col][row] = 0;
          }
        }
      }
    }
  
    // Update the grid
    grid = nextGrid;
}
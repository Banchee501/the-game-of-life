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



let cells = [];
let cellSize = 2;
let currentRow = 0;

function setup() {
  background(0);
  createCanvas(400, 400);
    
  let numberOfCells = width / cellSize;
  
  for (let i = 0; i < numberOfCells; i++) {
    cells.push(round(random()));
  }
  
  frameRate(30);
}

// 000
// 001
// 010
function binaryToInteger(b1, b2, b3) {
  return b3 + b2 * 2 + b3 * 4;
}


let rule = [1, 1, 1, 1, 1, 1, 0, 0];

function draw() {
  let newCells = [];
  for (let i = 0; i < cells.length; i++) {
    let index = binaryToInteger(cells[i - 1], cells[i], cells[i + 1]);
    newCells[i] = rule[index];
  }
  cells = newCells;
  
  for (let i = 0; i < cells.length; i++) {
    noStroke();
    if (cells[i] == 0) {
      fill('black');
      
    } else if (cells[i] == 1) {
      fill('white');
      
    }
    rect(i * cellSize, currentRow * cellSize, cellSize, cellSize);
  }
  
  currentRow++;
}

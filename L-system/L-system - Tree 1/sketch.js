function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('black');
  
  
  let turtleString = "B";
  for (let i = 0; i < 7; i++) {
    turtleString = turtleString.replaceAll("B","F[+B][-B][++B]")
  }
  print(turtleString);
  
  
  translate(width / 2, height);
  strokeWeight(3);
  stroke('white');
  renderString(turtleString);
}

let branchLength = 140;
let angle = Math.PI / 10;

// 90 -> Math.PI / 2
// 45 -> Math.MI / 4

// Super secret render string function
function renderString(string) {
  for (let character of string) {
    if (character == 'F') {
      strokeWeight(branchLength / 10);
      line(0, 0, 0, -branchLength);
      translate(0, -branchLength);
    } else if (character == '+') {
      rotate(angle);
    } else if (character == '-') {
      rotate(-angle);
    } else if (character == '[') {
      branchLength = branchLength / 1.5;
      push();
    } else if (character == ']') {
      branchLength = branchLength * 1.5;
      pop();
    }
  }
}
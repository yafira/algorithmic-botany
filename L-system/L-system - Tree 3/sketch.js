function setup() {
  createCanvas(400, 400);
  frameRate(3);
}

function draw() {
  
  randomSeed(0);
  
  background('black');
  
  let turtleString = "B";
  
  for (let i = 0; i < 6; i++) {
    
    var randomNum = random();
    
    if(randomNum < 0.5) {
      
      turtleString = turtleString.replaceAll("B","F[+B][-B]");
      
    } else if (randomNum < 0.75) {
      
      turtleString = turtleString.replaceAll("B","F[+B]")
      
    } else {
      
      turtleString = turtleString.replaceAll("B","F[-B]")
      noStroke();
      fill(0, 200, 0);
      
    }
    
  
    
    // turtleString = turtleString.replaceAll("B","F[+B][-B]")
    
    // replacements = F++F
  }
  print(turtleString);
  
  
  translate(width / 2, height);
  strokeWeight(3);
  stroke('white');
  renderString(turtleString);
}

let branchLength = 100;
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
      // rotate(mouseX / 400);
    } else if (character == '-') {
      rotate(-angle);
      // rotate(-mouseX / 400);
    } else if (character == '[') {
      branchLength = branchLength / 1.5;
      push();
    } else if (character == ']') {
      branchLength = branchLength * 1.5;
      pop();
    }
  }
}
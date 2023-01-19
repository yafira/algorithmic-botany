var numberOfSeeds = 1000;
var c = 4;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  background('black')
  
  for(let i = 0; i < numberOfSeeds; i++) {
    
    let angle = i * 37.5;
    let radius = c * sqrt(i);
    
    // we're about to convert polar coordinates to cartesian coordinates
    let x = radius * cos(angle) + width/2;
    let y = radius * sin(angle) + height/2;
    
    fill('fuchsia');
    stroke('white');
    ellipse(x, y, 4, 4);
  }
}

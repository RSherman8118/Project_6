
// All the paths
function setup() {
  createCanvas(2000, 2000);
  
}

function draw() {
  stroke(255);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
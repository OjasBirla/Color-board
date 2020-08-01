var col
function setup() {
  createCanvas(1366, 657);
}

function draw() {
  col = map(mouseX, 1366, 0, 0, 255) 
  background(col);
}
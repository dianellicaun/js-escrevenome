function setup() {
  createCanvas(400, 400);
  background("yellow");
}

function draw() {
  
  stroke ("navy")
  fill ("purple")
  
  if(mouseIsPressed) 
  rect (mouseX, mouseY, 20, 20);
}

function setup() {
  // put setup code here
createCanvas(600,400);

}

function draw() {
  // put drawing code here
  background('pink');
  ellipse (mouseX,mouseY,100,100);
  fill('white');
  stroke('none');
  textSize(50);
  text ('Happy Copenhagen',50,50);

}

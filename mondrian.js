function setup() {
  createCanvas(400, 400);
  strokeCap(SQUARE);
}

function draw() {
  background(255, 255, 150);
  noStroke()

  // Red square
  fill(230, 10, 100);
  rect(20, 100, 220, 190);

  // Blue square
  fill(30, 90, 230);
  rect(320, 210, 100, 110);

  // Yellow square
  fill(25, 140, 0);
  rect(370, 360, 30, 40);

  fill(255, 100, 0);
  rect(290, 30, 100, 100);


  stroke(0);
  strokeWeight(10);
  line(20, 0, 20, 400); // left line  
  line(0, 100, 290, 100); // middle line

  strokeWeight(10);
  line(320, 320, 400, 320); // right line

  line(370, 320, 370, 400); // right line

  strokeWeight(15);
  line(240, 100, 240, 290); // right line

  strokeWeight(10);
  line(365, 360, 400, 360); // bottom

  strokeWeight(15);
  line(20, 30, 390, 30); // top

  strokeWeight(11);
  line(20, 290, 320, 290); // top
  line(315, 130, 315, 325); // top
  line(315, 210, 400, 210); // top

  strokeWeight(28);
  line(400, 0, 400, 210); // top

  strokeWeight(14);
  line(290, 130, 400, 130); // top
  line(290, 25, 290, 137); // top

}

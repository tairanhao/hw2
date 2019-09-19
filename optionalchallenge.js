function setup() {
  createCanvas(400, 400);
}

var ballX = 30;
var ballSpeed = 3;

var ballX2 = 370;
var ballSpeed2 = 5;

var ballX3 = 230;

var shape = 30;

var xcx = 50;

function draw() {
  background(220);

  fill(255, 0, 0);
  ellipse(ballX2, ballX, 20);

  fill(0, 0, 255);
  ellipse(ballX, ballX2, 30);


  fill(223, 144, 255);
  noStroke();
  ellipse(ballX, shape, 40);

  ballX = ballX + ballSpeed;
  ballX2 = ballX2 + ballSpeed2;
  ballX3 = ballX2;
  shape = shape + 1;

  if (ballX >= 400) {
    ballSpeed = -3;
  }

  if (ballX2 >= 400) {
    ballSpeed2 = -5;
  }

  if (ballX <= 0) {
    ballSpeed = 3;
  }

  if (ballX2 <= 0) {
    ballSpeed2 = 5;
  }
  if (shape >= 255) {
    shape = -1;
  }
}

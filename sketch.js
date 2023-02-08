//Moonrising Project
var sunSize = 100;
var DilatingMoon = 50;
var y = 110;
var wheelX = 10;
var BurningPulse = 0.2;

function setup() {
  createCanvas(640, 400);
}

function draw() {
  //purple sky
  background(206, 71, 255);

  //street, be careful on the order of functions
  fill(66, 66, 66);
  rect(0, 350, 640, 100);
  //street lines
  stroke(247, 247, 247);
  strokeWeight(3);
  line(0, 375, 640, 375);

  //The sun
  stroke(206, 242, 0);
  strokeWeight(10);
  fill(250, 180, 10);
  ellipse(200, y + 40, sunSize, sunSize);
  if (sunSize > 105) {
    BurningPulse = -0.4;
  }
  if (sunSize < 85) {
    BurningPulse = 0.4;
  }
  sunSize = sunSize + BurningPulse;

  //mountains
  stroke(1);
  strokeWeight(4);
  fill(40, 92, 21);
  triangle(109 + 40, 350, 350 + 40, 350, 300 + 40, 150);
  triangle(149 + 40, 350, 390 + 40, 350, 325 + 40, 200);

  noStroke();
  // car body
  fill(9, 59, 240);
  rect(wheelX, 320, 100, 20);
  rect(wheelX + 15, 300, 70, 40);
  // wheels
  fill(9, 59, 240);
  ellipse(wheelX + 25, 350, 24, 24);
  ellipse(wheelX + 75, 350, 24, 24);
  //light
  fill(255, 234, 0);
  ellipse(wheelX + 91, 327, 14, 8);
  //movement
  wheelX = wheelX + 0.8;

  //moon eclipsing
  for (var i = 1; i < 2; i++) {
    fill(51, 53, 61);
    ellipse(100, y, DilatingMoon * i, DilatingMoon * i);
    DilatingMoon = DilatingMoon + 0.5;
  }
}

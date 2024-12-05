function setup() {
  createCanvas(1500, 800);
}

function draw() {
  background(231, 109, 103);

  // fill("white")
  // triangle(150,800,250,600,370,770 )
  // //lines of legs of triangle
  // line(225, 880, 230, 790) 
  // line(290,860, 280,780)
  //text styling
  fill(81, 78, 128);
  stroke(81, 78, 128)
  strokeWeight(2)
  textSize(55)
  text("Tattle BLog", 280, 350)
  fill(81, 78, 128);
  // text("bold")
  // text("BLog",430,350 )
  fill("white ")
  stroke("white")
  strokeWeight(0)
  textSize(36);
  text("Process, Updates and Notes", 170, 430)
  text("from our team", 170, 490)

  //styling of cirle
  fill(81, 78, 128)
  stroke(81, 78, 128)
  circle(200, 330, 105)

  //styling of ellipse
  stroke(231, 109, 103)
  strokeWeight(6)
  ellipse(200, 335, 80, 30)

  //styling of line
  stroke(231, 109, 103)
  line(200, 350, 200, 390)

  //scurve
  arc(200, 350, 35, 95, PI + QUARTER_PI, TWO_PI - QUARTER_PI)

  //lines
  stroke(231, 109, 103)
  strokeWeight(4)
  line(210, 323, 200, 335)
  line(198, 335, 192, 330)
}



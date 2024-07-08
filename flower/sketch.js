//order of code - variables -> setup -> draw (moon -> sun -> bg animation -> left flower -> lf color confition -> middle flower -> right flower -> rf color condition -> grass -> left petal -> middle petal -> worms -> worm movement -> you won) -> key (sun -> right petal -> worm speed -> rest)

let x2 = 0;
let y2 = 400;
let x3 = 200;
let y3 = 0;
let c1; //sun
let c2; //leftflower
let c3; //mouse / middleflower
let c4; //rightflower
let b1 = 128;
let r1 = 25;
let g1 = 25;
let wormX1 = 0;
let wormY1 = 360;
let wormX2 = 10;
let wormY2 = 380;
let numsq = 5;
let bodysq = 10;
let xright = 400;
let yright = 0;
let xleft = 400;
let yleft = 0;
let step = 1;

function setup() {
  createCanvas(400, 400);
  c1 = color(50, 100, 150);
  c2 = color(255, 255, 255);
  c3 = color(150, 200, 250);
  c4 = color(255, 255, 255);
  frameRate(10);
}

infobuttonX = 200
infobuttonY = 200

function infobuttonAD1(infobuttonX, infobuttonY) {
    push();
    translate(infobuttonX, infobuttonY);
    let distance = dist(mouseX, mouseY, infobuttonX + 50, infobuttonY + 50);

    // Check if the mouse is hovering over the circle
    if (distance < 40 / 2) {
      fill("white");
      rect(70, 90, 340, 290, 4, 4, 4, 4);
      fill("black");
      text(
        "Hello!\nIt is night time. Why are all of the flowers missing a petal? \nWe need to fix this before dawn.\nThe aim is to use the WASD commands and move the \ndark blue circle from the bottom left corner, to the moon at \ntop before the night ends\nNext, you must complete the flowers; \n 1. use your cursor and place the missing part on to the \nsecond flower (from the left) \n 2. use the arrow keys to place the missing petal of the \nfirst flower (from the left) which is currently at the top \nright corner. \n 3. use ijkl keys to place the missing petal on the third \nflower (from the left) which is currently at the top right corner. \n w,i = up; a,j = left; s,k = down; d,l = right\nWhen the colours change you'll know you have completed \nthe task! Use keys - 1,2 to make the worms go faster, 0 to make \nthem go backwards, and click on v to get their default speed\nTo play again just click the r key",
        72,
        105
      );
      fill("white");
      circle(50, 50, 20);
      fill("black");
      text("i", 49, 53);
    } else {
      fill("white");
      circle(50, 50, 20);
      fill("black");
      text("i", 49, 53);
    }
    pop();
  }

function draw() {
  
  background(r1, g1, b1);

  //where does the sun go
  fill("white");
  ellipse(200, 60, 50, 50);

  // sun
  if (x2 == 200 && y2 == 60) {
    c1 = color("yellow");
  } else {
    c1 = color(50, 100, 150);
  }
  fill(c1);
  ellipse(x2, y2, 100, 100);

  //background animation
  //173, 216, 230 - light blue
  if (r1 < 173) {
    r1++;
  }
  if (g1 < 216) {
    g1++;
  }
  if (b1 < 230) {
    b1++;
  }

  //flowerleft
  fill(200, 150, 255); //lilac
  line(100, 100, 100, 400);
  ellipse(100, 70, 30, 30);
  //missing peice
  fill(c2);
  ellipse(xleft, yleft, 30, 30); //ellipse(100, 130, 30, 30);
  fill(200, 150, 255);
  ellipse(70, 100, 30, 30);
  ellipse(130, 100, 30, 30);
  ellipse(115, 85, 30, 30);
  ellipse(85, 115, 30, 30);
  ellipse(85, 85, 30, 30);
  ellipse(115, 115, 30, 30);
  fill(0);
  ellipse(100, 100, 20, 20);

  if (xleft == 100 && yleft == 130) {
    c2 = color(200, 150, 255);
  } else {
    c2 = color(255, 255, 255);
  }

  //flowermiddle
  fill(240, 150, 255); //lilac+
  line(200, 200, 200, 400);
  ellipse(200, 170, 30, 30);
  ellipse(200, 230, 30, 30);
  ellipse(170, 200, 30, 30);
  ellipse(230, 200, 30, 30);
  ellipse(215, 185, 30, 30);
  ellipse(185, 215, 30, 30);
  ellipse(185, 185, 30, 30);
  ellipse(215, 215, 30, 30);

  //flowerright
  fill(280, 150, 255); //lilac++
  line(300, 100, 300, 400);
  ellipse(300, 70, 30, 30);
  ellipse(300, 130, 30, 30);
  ellipse(270, 100, 30, 30);
  ellipse(330, 100, 30, 30);
  ellipse(315, 85, 30, 30);
  ellipse(285, 115, 30, 30);
  fill(255, 255, 255);
  //missing piece
  fill(c4);
  ellipse(xright, yright, 30, 30); //ellipse(285, 85, 30, 30)
  fill(280, 150, 255);
  ellipse(315, 115, 30, 30);
  fill(0);
  ellipse(300, 100, 20, 20);

  if (xright == 285 && yright == 85) {
    c4 = color(280, 150, 255);
  } else {
    c4 = (255, 255, 255);
  }

  //grass
  fill(0, 128, 0); //green
  triangle(0, 400, 50, 350, 100, 400);
  triangle(50, 400, 100, 350, 150, 400);
  triangle(100, 400, 150, 350, 200, 400);
  triangle(150, 400, 200, 350, 250, 400);
  triangle(200, 400, 250, 350, 300, 400);
  triangle(250, 400, 300, 350, 350, 400);
  triangle(300, 400, 350, 350, 400, 400);

  //moving missing part of flower-left
  // ellipse(100, 130, 30, 30);

  if (keyIsDown(37)) {
    xleft = xleft - 10; //move left
  } else if (keyIsDown(39)) {
    xleft = xleft + 10; //move right
  } else if (keyIsDown(38)) {
    yleft = yleft - 10; //move up
  } else if (keyIsDown(40)) {
    yleft = yleft + 10; //move down
  }

  // obj 1 - with mouse
  fill(c3);
  ellipse(mouseX, mouseY, 20, 20);
  if (mouseX == 200 && mouseY == 200) {
    fill(0);
    ellipse(200, 200, 20, 20);
  }

  fill(150, 75, 0);
  // worm 1
  for (let n = 0; n < numsq; n++) {
    rect(wormX1 + n * bodysq, wormY1, bodysq, 10);
  }
  fill(170, 70, 0);
  // worm 2
  for (let n = 0; n < numsq; n++) {
    rect(wormX2 + n * bodysq, wormY2, bodysq, 10);
  }

  // worm movement - default
  wormX1 += step;
  wormX2 += step;

  // Reset the position when worm reaches end of the canvas
  if (wormX1 > width - 50) {
    wormX1 = -numsq * bodysq;
  }
  if (wormX2 > width - 50) {
    wormX2 = -numsq * bodysq;
  }

  if (
    /*middleflower*/ mouseX == 200 &&
    mouseY == 200 &&
    /*sun*/ x2 == 200 &&
    y2 == 60 &&
    /*rightflower*/ xright == 285 &&
    yright == 85 &&
    /*leftflower*/ xleft == 100 &&
    yleft == 130
  ) {
    background(220);
    textSize(48);
    fill(0);
    textAlign(CENTER, CENTER);
    text("You won", width / 2, height / 2);
  }
  
  infobuttonAD1(-30,-30)
}

function keyPressed() {
  //moving the sun to the top

  if (key == "d") {
    x2 = x2 + 10; //move right
  } else if (key == "a") {
    x2 = x2 - 10; //move left
  } else if (key == "w") {
    y2 = y2 - 10;
  } else if (key == "s") {
    y2 = y2 + 10;
  }

  //moving missing part of flower-right
  // ellipse(285, 85, 30, 30);

  if (key == "l") {
    xright = xright + 5; //move right
  } else if (key == "j") {
    xright = xright - 5; //move left
  } else if (key == "i") {
    yright = yright - 5; //move down
  } else if (key == "k") {
    yright = yright + 5; //moveup
  }

  //changing the speed of the worm (BONUS)

  if (key == "1") {
    step = 2;
  } else if (key == "2") {
    step = 4;
  } else if (key == "0") {
    step = -1;
  } else if (key == 'v') {
    step = 1
  }

  //reset
  if (key == "r") {
    x2 = 0;
    y2 = 400;
    x3 = 200;
    y3 = 0;
    c1 = color(50, 100, 150);
    c2 = color(255, 255, 255);
    c3 = color(150, 200, 250);
    c4 = color(255, 255, 255);
    b1 = 128;
    r1 = 25;
    g1 = 25;
    wormX1 = 0;
    wormY1 = 360;
    wormX2 = 10;
    wormY2 = 380;
    numsq = 5;
    bodysq = 10;
    xright = 400;
    yright = 0;
    xleft = 400;
    yleft = 0;
    step = 1;
  }
}

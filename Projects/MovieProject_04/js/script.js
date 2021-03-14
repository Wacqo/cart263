"use strict";

/**
S.H.A.R.K
Nico Brinton

this is my project one where I have made a perlin noise loop that can
be manipulated based on multiple commands such as:
move left, right, up, down
grow and shrink
make it smooth or rougher
change the colour, add more red, green, blue
make the circle move faster, slower
the program can also be changed if you press on the screen, and reset the colours if
you press the ENTER key
*/

/**
Description of preload
*/


// these are all the variables that are properties for
// the perlin loop
let phase = 0;
let zoff = 0;
let xpos = 600;
let ypos = 400;
let xSize = 100;
let ySize = 200;

// these are the colour for the loop
let r = 0;
let g = 0;
let b = 0;

// these are the properties for the background
let bgr = 255;
let bgg = 255;
let bgb = 255;

// the alpha for the background
let a = 30;

// this is where you set up how much noise you want
// the higher the noise the faster it moves
let noiseMax = 3;

let zoffChange = 0.01;

// this is where the voice commands are all set up
function setup() {
  createCanvas(1200, 800);

  if (annyang) {

    // these are all the commands that you can say to the program
     let commands = {
       'right': moveCircleRight,
       'left': moveCircleLeft,
       'up': moveCircleUp,
       'down': moveCircleDown,
       'make the circle grow': circleGrow,
       'make the circle shrink': circleShrink,
       'add some red': circleMoreRed,
       'add less red': circleLessRed,
       'add some green': circleMoreGreen,
       'add less green': circleLessGreen,
       'add some blue': circleMoreBlue,
       'add less blue': circleLessBlue,
       'get more rough': circleRougher,
       'get smoother': circleSmoother,
       'faster': circleFaster,
       'slower': circleSlower

     };


     annyang.addCommands(commands);
     annyang.start();



  }
}

function draw() {

// this is where the colour for the background is declared
background(bgr, bgg, bgb, a);
// calls the function for the loop or what i call circle
perlinNoiseCircle();
}



// allows for the circle to move right
function moveCircleRight (){

xpos = xpos + 30;

}

// allows for the circle tp move left
function moveCircleLeft (){

xpos = xpos - 30;

}

// allows for the circle to move up
function moveCircleUp (){

ypos = ypos - 30;

}

//allows for the circle to move down
function moveCircleDown (){

ypos = ypos + 30;

}

// allows for the circle to grow
function circleGrow(){
xSize = xSize + 30;
ySize = ySize + 30;
}

//allows for the circle to be able to shrink
function circleShrink(){
xSize = xSize - 30;
ySize = ySize - 30;
}

//adds more red to the circle
function circleMoreRed(){
  r = r + 40;
}

//allows the circle to turn less red
function circleLessRed(){
  r = r - 40;
}

//adds more green to the circle
function circleMoreGreen(){
  g = g + 40;
}

//allows the circle to turn less green
function circleLessGreen(){
  g = g - 40;
}

//adds more blue to the circle
function circleMoreBlue(){
  b = b + 40;
}

//allows the circle to turn less blue
function circleLessBlue(){
  b = b - 40;
}

// changes the noise so the circle gets circleRougher
function circleRougher(){
  noiseMax = noiseMax + 1;
}

//changes the noise smaller so the noise gets smaller and it looks circleSmoother
function circleSmoother(){
  noiseMax = noiseMax - 1;
}

// changes the z axis which allows the circle to appear to be changing circleFaster
function circleFaster(){
  zoffChange = zoffChange + 0.005;
}

//changes the z off to get smaller which makes the cirlce mpve circleSlower
function circleSlower(){
  zoffChange = zoffChange - 0.005;
}



// this is all the information for the perlin loop
function perlinNoiseCircle(){
  translate(xpos,ypos);
  stroke(r,g,b, 50);
  noFill();
  beginShape();





  for (let a = 0; a < TWO_PI; a += 0.1) {

    let xoff = map(cos(a), -1, 1, 0, noiseMax);
    let yoff = map(sin(a), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, xSize, ySize);
    let x = r * cos(a );
    let y = r * sin(a );


    vertex(x, y);

  }


  endShape(CLOSE);

  zoff += zoffChange;

// changes the backgrounds colour randomly if you click on the screen
  if (mouseIsPressed){

bgr = random(0,255);
bgg = random(0,255);
bgb = random(0,255);

a = 50;
  }

}

// allows you to click the enter screen so the background
// colour returns to normal
function keyPressed(){
  if (keyCode === ENTER){
    bgr = 255;
    bgg = 255;
    bgb = 255;
    a = 30;

    r = 0;
    g = 0;
    b = 0;

  }

}

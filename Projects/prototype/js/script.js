"use strict";

/**
The Myth Of Sisyphus
Nico Brinton

This is the prototytpe for my final project in class Cart 263
this just shows you the final idea of what I would want to do with the idea of everything
*/

/**
Description of preload
*/


// these are all the variables that are properties for
// the perlin loop
let phase = 0;
let zoff = 0;
let xpos = 100;
let ypos = 700;
let xSize = 50;
let ySize = 100;

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

       'cool': cool

     };


     annyang.addCommands(commands);
     annyang.start();



  }
}

function draw() {

// this is where the colour for the background is declared
background(bgr, bgg, bgb);
// calls the function for the loop or what i call circle
perlinNoiseCircle();
}


//allows you to move the circle diagonally
function cool(){
  xpos = xpos + 30;
  ypos = ypos - 30;
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


  if (mouseIsPressed){


  }

}

// allows you to click the enter screen so the background
// colour returns to normal
function keyPressed(){


}

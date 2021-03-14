"use strict";

/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

/**
Description of preload
*/


let video = undefined;

// the handpose model
let handpose = undefined;

// the current set of predictions
let predictions = [];

//where we create the bubble to pop
let bubble = undefined;

function preload() {

}

let state = 'menu'

// this is where we declare the text that will be used
let txtMenu01 = 'Click to Start'


/**
Description of setup
*/
function setup() {
  createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.hide();

  // load the handpose model
  handpose = ml5.handpose(video,{
    flipHorizontal: true
  }, function(){
    console.log(`Model loaded`);
  });

  // listen for the predictions
  handpose.on(`predict`, function(results){
    console.log(results);
    // assings the results into the global array
    predictions = results;
  });

  bubble = {
    x: random(width),
    y: random(height),
    size: 100,
    vx: 0,
    vy: -2,
    r: 0,
    g: 100,
    b: 200
  }
}


/**
Description of draw()
*/
function draw() {
background(0);
if (state === 'menu'){
  displayMenu();
}

if (state === 'displayMed'){
displayLevelMed();
}

}

function changeScreen(){
  if (state === 'menu'){
    state = 'displayMed'
  }
}

function mousePressed(){
changeScreen();
}

function displayLevelMed(){
  Maze();
  displayPin();
  //errorColour();
}

function Maze(){
  stroke(255);
    strokeWeight(6);
    fill(255);
    line(50, 50, 190, 50);
    line(190, 50, 190, 130);
    line(90, 90, 150, 90);
    line(150, 90, 150, 170);
    line(50, 50, 50, 130);
    line(50, 130, 110, 130);
    line(83, 130, 83, 170);
    line(120, 170, 230, 170);
    line(230, 50, 230, 80);
    line(230, 120, 230, 250);
    line(270, 50, 270, 170);
    line(50, 210, 190, 210);
    line(270, 250, 160, 250);
    line(120, 210, 120, 290);
    line(160, 330, 80, 330);
    line(80, 330, 80, 250);
    line(160, 330, 160, 290);
    line(160, 290, 230, 290);
    line(270, 250, 270, 330);
    line(270, 330, 200, 330);
    line(200, 410, 200, 290);
    line(50, 130, 50, 450);
    line(50, 370, 100, 370);
    line(140, 370, 200, 370);
    line(160, 410, 80, 410);
    line(80, 410, 80, 450);
    line(200, 410, 240, 410);
    line(270, 290, 350, 290);
    line(350, 290, 350, 210);
    line(350, 210, 270, 210);
    line(310, 210, 310, 250);
    line(270, 170, 310, 170);
    line(240, 370, 310, 370);
    line(275, 370, 275, 450);
    line(310, 370, 310, 330);
    line(350, 330, 415, 330);
    line(350, 330, 350, 370);
    line(310, 410, 310, 450);
    line(310, 410, 350, 410);
    line(390, 410, 390, 370);
    line(390, 370, 450, 370);
    line(390, 410, 420, 410);
    line(390, 290, 450, 290);
    line(350, 170, 385, 170);
    line(350, 210, 420, 210);
    line(390, 250, 390, 330);
    line(420, 210, 420, 250);
    line(385, 210, 385, 90);
    line(420, 170, 450, 170);
    line(310, 90, 310, 130);
    line(350, 90, 350, 50);
    line(310, 130, 385, 130);
    line(385, 90, 420, 90);
    line(420, 130, 420, 170);
    line(230, 50, 450, 50);
    line(450, 50, 450, 290);
    line(450, 330, 450, 450);
    line(50, 450, 450, 450);
    noStroke();
}

function displayPin(){

    if (predictions.length > 0){
      let hand = predictions[0];
      let index = hand.annotations.indexFinger;
      let tip = index[3];
      let tipX = tip[0];
      let tipY = tip[1];


      if (tipX === Maze()){
    backround(255, 255, 0);
      }
  // where the circles for the pin
      push();
      noStroke();
      fill(255, 0, 0);
      ellipse(tipX, tipY, 20, 20);
      pop();

    // check bubble popping
    let d = dist(tipX, tipY, bubble.x, bubble.y);

    if (d < bubble.size/2){
      bubble.x = random(width);
      bubble.y = height;

    }

    }

}


function displayMenu(){
  push();
  textSize(32);
  textAlign(CENTER);
  fill(255);
  text(txtMenu01, width/2, height/2);
  pop();
}

function errorColour(){
  if (tipX === Maze()){
backround(255, 255, 0);
  }
}

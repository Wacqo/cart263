"use strict";

/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

/**
Description of preload
https://codepen.io/Grilly86/pen/rvmKex?editors=0010
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




// daniel shiftmans code
// explain what is does after watching the video
let cols, rows;
let w = 30;
let grid = [];
let current;
let stack = [];

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
  cols = floor(width / w);
  rows = floor(height / w);

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  current = grid[0];
}

function draw() {
  background(51);
displayPin();

  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  current.visited = true;
  current.highlight();
  // STEP 1
  let next = current.checkNeighbors();
  if (next) {
    next.visited = true;

    // STEP 2
    stack.push(current);

    // STEP 3
    removeWalls(current, next);

    // STEP 4
    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
  }
}

function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }
  return i + j * cols;
}

function removeWalls(a, b) {
  let x = a.i - b.i;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }
  let y = a.j - b.j;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}

function displayPin(){

    if (predictions.length > 0){
      let hand = predictions[0];
      let index = hand.annotations.indexFinger;
      let tip = index[3];
      let tipX = tip[0];
      let tipY = tip[1];



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

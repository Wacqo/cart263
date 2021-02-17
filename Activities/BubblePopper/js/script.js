"use strict";

/**
Bubble popper
Nico Brinton

this is a project where your goal is to pop the bubble, the Bubble
will become faster and will change colours the more you pop it.
if you reach the score of 10 which youll "win" the game because a end screen will
pop up. it is no the most insane changes but i am happy with how it turned out.
and how well i was able to understand it.


credit to:
ml5.js Handpose:
https://learn.ml5js.org/#/reference/handpose
*/


let count = 0;

// the users webcame
let video = undefined;

// the handpose model
let handpose = undefined;

// the current set of predictions
let predictions = [];

//where we create the bubble to pop
let bubble = undefined;

// this tells the program that the main state of the game
//and where the program will start
let state = `menu`;

// these are the both the text information for the
// start and the end screen
let txtEnd = `YOU WIN`
let txtMenu = `Click To Start`;

 function preload(){

 }

 function setup(){
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

//where the information is for the Bubble

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

 function draw(){

  background(0);

// this is where we all display all the screens and display all the
//the different screens
// the menu, main, and the end screen
if (state === `menu`){
  startScreen();
}

if (state === 'main'){
  playInformation();
}

if (state === `end`){
  endScreen();
}

// this is where if you reach a score of 10
// it will send you to the end screen where you "win"
else if (count === 10){
  state = `end`;
}

 }

// this is where all the functions
//that allows the game to run are stored
function playInformation(){
  displayPin();

  displayBubble();

  displayCounter();
}

// function that shows the counter
 function displayCounter(){
   push();
   textSize(32);
   fill(255);
   textAlign(CENTER);
   text(count, 50, 50);
   pop();
 }
// all the information for the end screen
// where it displays that you win
 function endScreen(){
   push();
   textSize(32);
   textAlign(CENTER);
   fill(255);
   text(txtEnd, width/2, height/2);
   pop();
 }

 function startScreen(){
   push();
   textSize(32);
   textAlign(CENTER);
   fill(255);
   text(txtMenu, width/2, height/2);
   pop();
 }


// this is the function fo rall the information that displays the pin
function displayPin(){

    if (predictions.length > 0){
      let hand = predictions[0];
      let index = hand.annotations.indexFinger;
      let tip = index[3];
      let base = index[0];
      let tipX = tip[0];
      let tipY = tip[1];
      let baseX = base[0];
      let baseY = base[1];

  // where we create the linen the pin body
      push();
      noFill();
      stroke(255, 255, 255);
      strokeWeight(2);
      line(baseX, baseY, tipX, tipY);
      pop();

  // where the circles for the pin
      push();
      noStroke();
      fill(255, 0, 0);
      ellipse(baseX, baseY, 20, 20);
      pop();

    // check bubble popping
    let d = dist(tipX, tipY, bubble.x, bubble.y);

    if (d < bubble.size/2){
      bubble.x = random(width);
      bubble.y = height;
      count = count + 1;
    }



    }
}





// this is the function for the bubble where it contains all
// the bubble information
 function displayBubble(){
   // moving the bubble
     bubble.x += bubble.vx;
     bubble.y += bubble.vy;

     if (bubble.y < 0){
       bubble.x = random(width);
       bubble.y = height;
     }

     //where we change the speed of how fast the ball is moving
     //based on your points
     if (count === 4){
       bubble.vy = -5;
       bubble.r = 255;
       bubble.g = 255;
       bubble.b = 0;

     }

// where if you get to a score of 7 it will icrease the difficulty
// by increasing the speed and change the colour
     if (count === 7){
       bubble.vy = -10;
       bubble.r = 255;
       bubble.g = 0;
       bubble.b = 0;
     }

     push();
     fill(bubble.r, bubble.g, bubble.b);
     noStroke();
     ellipse(bubble.x, bubble.y, bubble.size);
     pop();
 }

 function mousePressed(){
  changeScreen();
 }

// When you click it will change the startScreen
//which will display a different screen
 function changeScreen(){
   if (state === `menu`){
     state = `main`;
   }
   else if (state === `end`){
     state = `menu`;
     count = 0;
   }
 }

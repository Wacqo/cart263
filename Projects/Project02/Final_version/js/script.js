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

// the array for names that you need to speak
const greeks  = [
		"Aphrodite",
		"Apollo",
		"Ares",
		"Artemis",
		"Athena",
		"Demeter",
		"Dionysus",
		"Hades",
		"Hephaestus",
		"Hera",
		"Hermes",
		"Hestia",
		"Poseidon",
		"Zeus",
		"Aether",
		"Ananke",
		"Chaos",
		"Chronos",
		"Erebus",
		"Eros",
		"Hypnos",
		"Uranus",
		"Gaia",
		"Phanes",
		"Pontus",
		"Tartarus",
		"Thalassa",
		"Thanatos",
		"Hemera",
		"Nyx",
    "Arachne",
    "Caucasian Eagle",
    "Centaur",
    "Charybdis",
    "Chimera",
    "Empousai",
    "Gorgon",
    "Harpy",
    "Hippalectryon",
    "Hippocampus",
    "Icthyocentaur",
    "Ipotane",
    "Lamia",
    "Hydra",
    "Manticore",
    "Minotaur",
    "Mormo",
    "Ophitaurus",
    "Satyr",
    "Synthian Dracanus",
    "Siren",
    "Taraxippus",
    "Telekhines",
    "Typhon",
		"Nemesis"
	];

// where we keep the word from the array

let keyWord = `Sisyphus`;
let keyCodeAnswer = ``;

//where we create the states which allows for the different screens
let state = 'title'

//this is where we have all the variables for the score/liveCounter
let counter = 0;

// this is where the lives are declared
let lives = 2;


// this is the info for the timer
let timerValue = 15;
let fixedTimeValue = 15;
let timerReset = 1;

// these are all the variables that are properties for
// the gear
let angle = 0;
let xpos = 150;
let ypos = 700;

// the tag for the Image
let img;
let menuImg;
let titleImg;
let instructionImg;
let endImg;

//where we have the properties for the background bgChange
let tri = {
  x1: 1200,
  y1: 0,
  x2: 0,
  y2: 800,
  x3: 1200,
  y3: 800,

  r: 255,
  g: 255,
  b: 0,

  a: 100
};

// these are the properties for the background
let bgr = 0;
let bgg = 0;
let bgb = 0;

// the alpha for the background
let a = 30;


//where we load the images
function preload(){
  img = loadImage('assets/images/gear.png');
	menuImg = loadImage('assets/images/menu.png');
	titleImg = loadImage('assets/images/title.png');
	instructionImg = loadImage('assets/images/instruction.png');
	endImg = loadImage('assets/images/end.png');
}


// this is where the voice commands are all set up
function setup() {
  createCanvas(1200, 800);

  setInterval(timeIt, 1000);


  if (annyang) {

    // these are all the commands that you can say to the program
     let commands = {

       '*greek': cool

     };


     annyang.addCommands(commands);
     annyang.start();



  }
}

function draw() {

// where we create teh all the pages for the games mode
if (state === 'title'){
titleScreen();
}
else if (state === 'instruction'){
instructionScreen();
}
else if (state === 'menuScreen') {
menu();
}
else if (state === 'run'){
runMode();
}

else if (state === 'endScreen') {
endScreen();
}

if (lives === 0){
state = 'endScreen'
}
}



//where we keep all the information for the play sequence
function runMode(){
  // this is where the colour for the background is declared
  background(bgr, bgg, bgb);
  hud();
  restartGear();
  bgChange();
  gear();
}


//allows you to move the circle diagonally
function cool(greek){



//keyWord = keyCodeAnswer;

if (greek === keyWord){
	xpos = xpos + 60;
	ypos = ypos - 40;
}
}

function bgChange(){
let red = map(xpos, 0, 1200, 125, 255 );
let green = map(ypos, 800, 0, 255, 60);

  push();
  noStroke();
  fill(red, green, tri.b, tri.a);
  triangle(tri.x1, tri.y1, tri.x2, tri.y2, tri.x3, tri.y3);
  pop();
}



// this is all the information for the perlin loop
function gear(){

 angle = angle + 0.05;

  push();
  imageMode(CENTER);
  translate(xpos, ypos);
  rotate(angle);
  image(img, 0, 0);
  pop();

  }



// this is all the stuff for the timer and the lives
function hud(){

changeWord();

  stroke(255);
  fill(255);
  textSize(24);
  if (timerValue >= 10) {
  text("0:" + timerValue, width / 2, 100);
  text("Lives: " + lives, 100, 100);
  text("Rock Counter: " + counter, 100, 200);
  text("Say: " + keyWord, 100, 300);

}
if (timerValue < 10) {
  text('0:0' + timerValue, width / 2, 100);
  text("Lives: " + lives, 100, 100);
  text("Rock Counter: " + counter, 100, 200);
    text("Say: " + keyWord, 100, 300);

}
if (timerValue === 0) {
lives = lives - 1;
text("Lives: " + lives, 100, 100);
text("Rock Counter: " + counter, 100, 200);
text("Say: " + keyWord, 100, 300);
fixedTimeValue = fixedTimeValue - timerReset;
timerValue = fixedTimeValue;
xpos = 150;
ypos = 700;
}


}


function changeWord(){
	if (xpos >= 1200){
	keyWord = random(greeks);
	}
}


// where we check where the gear is and where we coud restart
function restartGear(){
  if (xpos >= 1200){
    timerValue = 59;
    xpos = 150;
    ypos = 700;
    counter = counter + 1;
  }
}


function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}


//menu screen information
function titleScreen(){
  background(0)
  push();
  imageMode(CENTER, CENTER);
  image(titleImg, width / 2, height / 2);
  pop();
}

// where we set up all information for the instruction screen
function instructionScreen(){
  background(0)
  push();
  imageMode(CENTER, CENTER);
  image(instructionImg, width / 2, height / 2);
  pop();
}




//menu screen information
function menu(){
  background(0)
	imageMode(CENTER, CENTER);
  image(menuImg, width / 2, height / 2);
  pop();
}

// where we create the end screen which is where technically you always loose
//because there is no way to win
function endScreen(){
  background(0)
  push();
	imageMode(CENTER, CENTER);
  image(endImg, width / 2, height / 2);
  pop();

}





// allows you to click the enter screen so the background
// colour returns to normal
function keyPressed(){
  if (keyCode === LEFT_ARROW){
    //xpos = xpos + 30;
    //ypos = ypos - 20;
    xpos = xpos + 60;
    ypos = ypos - 40;
  }

}

// mouse pressed function where it allows us to switch between screens
function mousePressed(){
if (state === 'title'){
state = 'instruction';
}

else if (state === 'instruction'){
	state = 'menuScreen';
}
else if (state === 'menuScreen'){
state = 'run';
fullReset();
  }
  else if (state === 'endScreen') {
  state = 'menuScreen';
  lives = 2;
  }
}

function fullReset(){
  fixedTimeValue = 59;
  timerValue = 59;
  lives = 2;
  counter = 0;
}

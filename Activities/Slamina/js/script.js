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

let phrase = `How is it going my good fellow?`;
let words = ``;
let on = false;

function preload() {

}


/**
Description of setup
*/
function setup() {
createCanvas(500, 500);

if (annyang) {
    let commands = {
      'Turn Lights on' : function(){
      on = true;
      },
       'turn lights off' : function(){
         on = false;
       }
    };

    annyang.addCommands(commands);
    annyang.start();
}

}


/**
Description of draw()
*/
function draw() {
background(255 );

push();
textSize(32);
fill(0);
textAlign(CENTER);
text(words, width /2, height / 2);
pop();

if (on){
  background (255);
}
else {
  background (0);
}


}

function mousePressed() {
  responsiveVoice.speak(phrase, "UK English Male", {
    onstart: showSaying,
    onend: stopShowing
  });
}

function showSaying(){
  words = phrase;
}

function stopShowing(){
  words = ``;
}

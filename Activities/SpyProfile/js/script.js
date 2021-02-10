"use strict";

/**
Spy Profile
NIco Brinton

this is a spy simulater where you enter your code name and the computer
will give you a random set of values for your username, password, Alias, and a secret weapon
you then will need to re enter your username and password, so you might want to write them down.
the text will also change colour based of if you get the answer correct or not.

What I changed, I added a username and that you need to enter a Username
I change the colour of the text depending on if you get the answer right or not
You can clear and reset your code name by pressing the UP ARROW and you
can reset your values by pressing the r key

there are some minor bugs, like you can press the r key whenever you want.


i will try to fix if i get the time throughout the week
*/



//this is an objeect that holds the information when
//the program first starts without any information
let spyProfile = {
  name:`** REDACTED **`,
  username: `** REDACTED **`,
  alias:`** REDACTED **`,
  secretWeapon:`** REDACTED **`,
  password:`** REDACTED **`
};

//where we declare the variables for all the information for
// the alias, secret Weapon,
let instrumentsData = ``;
let objectData = ``;
let tarotData = ``;
let filmData =``;

let r = 255;
let g = 255;
let b = 255;

function preload(){
// this is where we load all the json files for the random
// weapons, alias,
instrumentsData = loadJSON(`assets/data/music_instruments.json`);
tarotData = loadJSON(`assets/data/tarot_interpretations.json`);
objectData = loadJSON(`assets/data/objects.json`);
filmData = loadJSON(`assets/data/popular-movies.json`);
}

function setup(){
createCanvas(windowWidth, windowHeight);
checkPassword();

}

//this function is all the information about the checkPassword all put into a function
function checkPassword(){
  //this is where we re get thte data and change it from a string
  let data = JSON.parse(localStorage.getItem(`spy-profile-data`));
  if (data !== null){
    let password = prompt(`Agent! enter your password!`);
    let username = prompt(`Agent! enter your username!`);
    if (username === data.username){
      if (password === data.password){
        spyProfile.name = data.name;
        spyProfile.alias = data.alias;
        spyProfile.secretWeapon = data.secretWeapon;
        spyProfile.password = data.password;
        spyProfile.username = data.username;

//this will allow the colour of tex to turn to green if you get pass and username correct
        r = 0;
        g = 255;
        b = 0;


      }
      }
      //this will allow the colour of text to turn to red if you get pass and username incorrect
      else {
        r = 255;
        g = 0;
        b = 0;
      }

  }
  else {
    generateSpyProfile();
  }

}



//where we create all the informaion for the spy information
function generateSpyProfile() {
  spyProfile.name = prompt(`Agent, Enter your Code Name`);
  let instrument = random(instrumentsData.instruments);
  spyProfile.alias = `The ${instrument}`;
  spyProfile.secretWeapon = random(objectData.objects);
  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords);
  spyProfile.username = random(filmData.popularmovies)

  // this is where we save the data
 localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile));

}

// this is the funciton that allows for you to change your values
// when you press the key r
function restartSpyProfile(){
  let instrument = random(instrumentsData.instruments);
  spyProfile.alias = `The ${instrument}`;
  spyProfile.secretWeapon = random(objectData.objects);
  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords);
  spyProfile.username = random(filmData.popularmovies)

  // this is where we save the data
 localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile));
}





function draw(){
background(0);

//this is the text that gets displayed on the screen
let profile = `** SPY PROFILE **

Name: ${spyProfile.name}
Username: ${spyProfile.username}
Alias: ${spyProfile.alias}
Secret Weapon: ${spyProfile.secretWeapon}
password: ${spyProfile.password}
Please Remember your Username and Password`;

push();
textFont(`courier`);
textSize(24);
textAlign(LEFT, TOP);
fill(r, g, b);
text(profile, 100, 100);
pop();


}

//allows you tto press a key and clear all the information in this particular storage
function keyPressed(){
  if (keyCode === UP_ARROW){
    localStorage.removeItem(`spy-profile-data`);
    r = 255;
    g = 255;
    b = 255;
  }
// if you press r it will change your values
  if (key === `r`){
    restartSpyProfile();
  }
}

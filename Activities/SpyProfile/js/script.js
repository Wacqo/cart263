"use strict";

/**
Spy Profile
NIco Brinton

this is a game where you need to try and guess the animal
that is being said to you but ttthe twist is that the animal is being said backwards
*/

//this is an objeect that holds the information when
//the program first starts without any information
let spyProfile = {
  name:`** REDACTED **`,
  alias:`** REDACTED **`,
  secretWeapon:`** REDACTED **`,
  password:`** REDACTED **`
};

//where we declare the variables for all the information for
// the alias, secret Weapon,
let instrumentData = undefined;
let objectData = undefined;
let toratData = undefined;


function preLoad(){
// this is where we load all the json files for the random
// weapons, alias,
instrumentData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`);
tarotData = loadJSON(`assets/data/torat_interpretations.json`);
objectData = loadJSON(`assets/data/objects.json`);
}

function setup(){
createCanvas(windowWidth, windowHeight);

generateSpyProfile();
}

//where we create all the informaion for the spy information
function generateSpyProfile() {
  spyProfile.name = prompt(`Agent, Enter your Code Name`);
  let instrument = random(instrumentData.instruments);
  spyProfile.alias = `The ${instrument}`;
  spyProfile.secretWeapon = random(objectData.objects);
  let card = random(tarotData.torat_interpretations);
  spyProfile.password = random(card.keywords);
}

function draw(){
background(0);

let profile = `** SPY PROFILE **

Name: ${spyProfile.name}
Alias: ${spyProfile.alias}
Secret Weapon: ${spyProfile.secretWeapon}
password: ${spyProfile.password}`;

push();
textFont(`courier`);
textSize(24);
textAlign(LEFT, TOP);
fill(255);
text(profile, 100, 100);
pop();
}

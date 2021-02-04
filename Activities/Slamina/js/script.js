"use strict";

/**
Slamina
NIco Brinton

this is a game where you need to try and guess the animal
that is being said to you but ttthe twist is that the animal is being said backwards
*/



const numbers = [

];

// this is the array for the names of the animals
const animals  = [
      "aardvark",
      "alligator",
      "alpaca",
      "antelope",
      "ape",
      "armadillo",
      "baboon",
      "badger",
      "bat",
      "bear",
      "beaver",
      "bison",
      "boar",
      "buffalo",
      "bull",
      "camel",
      "canary",
      "capybara",
      "cat",
      "chameleon",
      "cheetah",
      "chimpanzee",
      "chinchilla",
      "chipmunk",
      "cougar",
      "cow",
      "coyote",
      "crocodile",
      "crow",
      "deer",
      "dingo",
      "dog",
      "donkey",
      "dromedary",
      "elephant",
      "elk",
      "ewe",
      "ferret",
      "finch",
      "fish",
      "fox",
      "frog",
      "gazelle",
      "gila monster",
      "giraffe",
      "gnu",
      "goat",
      "gopher",
      "gorilla",
      "grizzly bear",
      "ground hog",
      "guinea pig",
      "hamster",
      "hedgehog",
      "hippopotamus",
      "hog",
      "horse",
      "hyena",
      "ibex",
      "iguana",
      "impala",
      "jackal",
      "jaguar",
      "kangaroo",
      "koala",
      "lamb",
      "lemur",
      "leopard",
      "lion",
      "lizard",
      "llama",
      "lynx",
      "mandrill",
      "marmoset",
      "mink",
      "mole",
      "mongoose",
      "monkey",
      "moose",
      "mountain goat",
      "mouse",
      "mule",
      "muskrat",
      "mustang",
      "mynah bird",
      "newt",
      "ocelot",
      "opossum",
      "orangutan",
      "oryx",
      "otter",
      "ox",
      "panda",
      "panther",
      "parakeet",
      "parrot",
      "pig",
      "platypus",
      "polar bear",
      "porcupine",
      "porpoise",
      "prairie dog",
      "puma",
      "rabbit",
      "raccoon",
      "ram",
      "rat",
      "reindeer",
      "reptile",
      "rhinoceros",
      "salamander",
      "seal",
      "sheep",
      "shrew",
      "silver fox",
      "skunk",
      "sloth",
      "snake",
      "squirrel",
      "tapir",
      "tiger",
      "toad",
      "turtle",
      "walrus",
      "warthog",
      "weasel",
      "whale",
      "wildcat",
      "wolf",
      "wolverine",
      "wombat",
      "woodchuck",
      "yak",
      "zebra"
    ];

// to check what the current animal is
let currentAnimal = ``;
let currentAnswer = `Click to start`;

//these are the variabels that contain all the information
//in order to display the text when you either get it right or wrong
let txt = ``;
let phrase = "Good Job Fellow";
let txt02 = ``;
let phrase02 = "Please Try Again";

// this is the state the game starts in which is the title screen
let state = 'title';

// text for the title and end screen
let titleTxt = 'Welcome to Slamina';
let titleTxt02 = 'Click to Start';
let titleTxt03 = 'Try and reach a score of 10!';
let endTxt = 'Congradualations you beat the game';
let endTxt02 = 'Click to Restart';

// this variable is for the counter for how many you guess right
let count = 0;

function setup() {
createCanvas(windowWidth, windowHeight);
// this is where you set up annyang and checks for your voice
if (annyang) {
   let commands = {
     'I think it is a *animal': guessAnimal
   };
   annyang.addCommands(commands);
   annyang.start();

   textSize(32);
   textStyle(BOLD);
   textAlign(CENTER, CENTER);
}

}


/**
Description of draw()
*/
function draw() {



// this is swhere i checks if it is the title screen
if (state === 'title'){
  title();
}
// checks if it is in tthe game stage
else if (state === 'theGame'){
  theGame();
}
//checks if it is in the end screen
else if (state === 'endScreen') {
  endScreen();
}


}

//this holds all the content for the game play, wit all the otther
//functions discribed in the following code.
function theGame(){
  background(0);
  display();
  displayCounter();
  state = 'theGame';
}


function displayCounter(){
  push();
  textSize(32);
  fill(255);
  textAlign(CENTER);
  text(count, 30, 30);
  pop();


}

// this is the information for the title screen
function title(){

background(255, 255, 0);
push()
fill(0);
text(titleTxt, width /2, 200);
pop();
push();
fill(0);
text(titleTxt02, width /2, 400);
pop();
push();
fill(0);
text(titleTxt03, width /2, 600);
pop();
state = 'title';
}



// this is where it checks whether the user gets the answer right
// displays the text in green if right and red if wrong
function display() {
  if (currentAnswer === currentAnimal) {
    fill(0, 255, 0);
    text(txt, width / 2, 100);
  }
  else {
    fill(255, 0, 0);
  }
  text(currentAnswer, width / 2, height / 2);
  text(txt02, width / 2, 100);
}


function mousePressed(){
  currentAnswer = ``;
  currentAnimal = random(animals);
  let reverseAnimal = reverseString(currentAnimal);
  responsiveVoice.speak(reverseAnimal);

  changeScreen();
}

//where it checks to see if you guesssed the answer right
function guessAnimal(animal){
  currentAnswer = animal.toLowerCase();
  console.log(currentAnswer);
  if (currentAnswer === currentAnimal) {
    count = count + 1;
    responsiveVoice.speak("Good Job Fellow");
    txt = phrase;
  }
else {
  responsiveVoice.speak("please try again");
  txt02 = phrase02;
}
//this is where we check to see if they reached 10 right answers
if (count === 10){
endScreen();
}

}

/**
Reverses the provided string
*/
function reverseString(string) {
  // Split the string into an array of characters
  let characters = string.split('');
  // Reverse the array of characters
  let reverseCharacters = characters.reverse();
  // Join the array of characters back into a string
  let result = reverseCharacters.join('');
  // Return the result
  return result;
}

// if you click the screen it will change to the next screen
function changeScreen(){
  if (state === 'title'){
    state = 'theGame';
  }
  else if (state === 'endScreen'){
    state = 'title';
  }
}

// this is when it will switch the end screeen
function endScreen(){
    background(255, 255, 0);
    push()
    fill(0);
    text(endTxt, width /2, 200);
    pop();
    push();
    fill(0);
    text(endTxt02, width /2, 400);
    pop();
    state = 'endScreen';

}

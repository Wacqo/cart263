"use strict";

/**
WHere is the sausage?
Nico Brinton

the project is about a bunch of images of animals get
placed on the screen and there is one hot dog. the goal of the game is
to find and click on the dog in order to win

what I added from new to the code is I added new movements to the
sausage dog when it gets clicked, also changed the orientation of the images,
I also set it so there is a random amount of images placed on the screen each
time you refresh it

*/

/**
Description of preload
*/


// this is created to allow for the random amount of img to be created
let numAnimal = 0;
const NUM_ANIMAL_IMAGES = 10;

//these are where the arrays are called
let animalImages = [];
let animals = [];

let sausageDogImage = undefined;
let sausageDog = undefined;

// this is where the images are pre loaded
function preload() {
  for (let i = 0; i < NUM_ANIMAL_IMAGES; i++){
    let  animalImage = loadImage(`assets/images/animal${i}.png`);
    animalImages.push(animalImage);
  }
    sausageDogImage = loadImage(`assets/images/sausage-dog.png`)

}

/**
this is where all the properties are also given to the images
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
//create screen states and where they relate to the sceen

let numAnimal = random(75, 150);
//create animals at a random amount
for (let i = 0; i < numAnimal; i++) {

//where the properties are created for the animals
let x = random(0, width);
let y = random(0, height);
let angle = random(0, 360);
// this is what allows for the random amount of images
let animalImage = random(animalImages);
let animal = new Animal(x, y, angle, animalImage);
animals.push(animal);
}
//where the properties are created for the sausage dog
let x = random(0, width);
let y = random(0, height);
let angle = random(0, 360);
sausageDog = new SausageDog(x, y, angle, sausageDogImage);
}


/**
this is where the animal images and sausage dog image arer displayed
*/
function draw() {
  background(255,255,0);
  for (let i = 0; i < animals.length; i++){
    animals[i].update();
  }

  sausageDog.update();
}

// this is where the function is called for when the sausage dog is displayed
// to allow the sausage dog to do its rotation
function mousePressed() {
  sausageDog.mousePressed();



}

/**
Haiku generater
Nico Brinton

generates a random haiku
*/

"use strict";

// Code goes here

// declare the arrays

let fiveSyllabeLines = [
  `O, to be a tree`,
  `The cat does not know`,
  `We are all forests`,
  `You have done your best`,
  `They are all gone now`
];

let sevenSyllabeLInes = [
  `Say the things left unsaid`,
  `Never believe the wind's lies`,
  `The autumn stretches its legs`,
  `Nothing can satisfy you`,
  `They will not come back again`
];

// where we create the random haiku
let line01 = random(fiveSyllabeLines);
let line02 = random(sevenSyllabeLInes);
let line03 = random(fiveSyllabeLines);


let line1P = document.getElementById("line-1");
let line2P = document.getElementById("line-2");
let line3P = document.getElementById("line-3");

line1P.innerText = line01;
line2P.innerText = line02;
line3P.innerText = line03;

function random(array){
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}

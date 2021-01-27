
// this is the kid of the animal class
class SausageDog extends Animal{
  constructor(x, y, angle, image){
    super(x, y, angle, image);

    this.found = false;
    this.rotationSpeed = 0.25;
    this.movementSpeed = 4;
  }

//this is where you allow to display the class
update(){
  super.update();

// this is where it gives the sausage dog image its properties to move
  if (this.found) {
    this.angle += this.rotationSpeed;

    this.x += this.movementSpeed;
  }
}

// this is also the function that allows you to click the
//sausage dog
mousePressed(){
  if (this.overlap(mouseX, mouseY)){
      this.found = true;
  }
   }
}

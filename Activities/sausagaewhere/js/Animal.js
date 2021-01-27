class Animal {
  constructor(x, y, angle, image){
    this.x = x;
    this.y = y;
    this.image = image;
    this.angle = angle;

    this.found = false;
    this.rotationSpeed = 0.5;
  }

// this is the update which you call to display the image
  update() {
    this.display();


    if (this.found) {
      this.angle += this.rotationSpeed;
    }
  }

// this is the information for the animal images
  display(){

    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, 0, 0);
    pop();

  }

//this overlay function is there to allow you to click on the image of the sausage dog
overlap(x, y) {

  if  ((x > this.x - this.image.width / 2) &&
      (x < this.x + this.image.width / 2) &&
      (y > this.y - this.image.height / 2) &&
      (y < this.y + this.image.height / 2)) {
      return true;
      }
      else {
       return false;
      }
  }




  }

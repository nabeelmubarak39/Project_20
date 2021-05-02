var cat, catImage1, catImage2, catImage3;
var mouse, mouseImage1, mouseImage2, mouseImage3;

var garden, gardenImage;


function preload() {
    //load the images here
    gardenImage = loadImage("garden.png");
    catImage1 = loadAnimation("cat1.png");
    mouseImage1 = loadAnimation("mouse1.png");
    catImage2 = loadAnimation("cat2.png","cat3.png");
    mouseImage2 = loadAnimation("mouse2.png","mouse3.png");
    catImage3 = loadAnimation("cat4.png");
    mouseImage3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat = createSprite(800,600);
   cat.addAnimation(catImage1);

   mouse = createSprite(100,600);
   mouse.addAnimation(mouseImage1);

   garden = createSprite(500,400);
   garden.addImage(gardenImage);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
   if (cat.x - mouse.x < (cat.width - mouse.width)/2) {
       mouse.changeAnimation(mouseImage3);
       cat.changeAnimation(catImage2);
   }

   keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === right_arrow) {
      mouse.addAnimation("mouseTeasing", mouseImage2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }

  if (keyCode === left_arrow) {
    mouse.addAnimation("mouseTeasing", mouseImage2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
}

}

var bg, bgImg;
var shooter,shooterImg,shooterShooting,shooterImg2;
var zombie,zombieImg,zombieGroup;

function preload () {
  bgImg = loadImage("assets/bg.jpeg");
  shooterImg = loadImage("assets/shooter_1.png");
  shooterImg2 = loadImage("assets/shooter_2.png");
  shooterShooting = loadImage("assets/shooter_3.png");
  zombieImg = loadImage("assets/zombie.png");
}

function setup () {
   createCanvas(windowWidth,windowHeight);

   // adding a background image
   bg = createSprite(displayWidth/2 - 20,displayHeight/2 - 20,590,700);
   bg.addImage(bgImg);
   bg.scale = 0.90;

   // creating player/shooter sprite
   shooter = createSprite(displayWidth - 1150,displayHeight - 300,50,50);
   shooter.addImage(shooterImg);
   shooter.scale = 0.4;

   zombie = createSprite(displayWidth - 700,displayHeight - 400,70,70);
   zombie.addImage(zombieImg);
   zombie.scale = 0.2;

   zombieGroup = new Group();

}

function draw () {
  background(0);

  // moving the shooter in different direction
  if (keyDown("UP_ARROW") || touches.length > 0) {
    shooter.y = shooter.y-30 ;
  }

  if (keyDown("DOWN_ARROW")) {
     shooter.y = shooter.y+30;
  }

  if (keyWentDown("RIGHT_ARROW")) {
    shooter.x = shooter.x+30 ;
    shooter.addImage(shooterImg2);
  }

  if (keyWentUp("RIGHT_ARROW")) {
    shooter.x = shooter.x+30 ;
    shooter.addImage(shooterImg);
  }

  if (keyDown("LEFT_ARROW")) {
    shooter.x = shooter.x-30 ;
  }

  drawSprites();

}


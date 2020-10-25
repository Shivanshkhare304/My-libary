var fixedRect, movingRect;
var ob1,ob2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 600, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ob1 = createSprite(600,200,80,30);
  ob1.shapeColor = "green";
  ob1.debug = true;

  ob2 = createSprite(400,200,80,30);
  ob2.shapeColor = "green";
 ob2.debug = true;

 fixedRect.velocityY=-5;
  ob1.velocityY=+5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching( movingRect, ob2)){
    movingRect.shapeColor = "red";
    ob2.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    ob2.shapeColor = "green";
  }
  
  bounceOff(fixedRect,ob1);

  drawSprites();
}


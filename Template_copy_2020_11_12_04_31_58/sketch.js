var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score = 0;
var ground;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(500, 500);
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 350, 900, 10);
  ground.x = ground.width / 2;
  console.log(ground.x);
  bananaGroup = new Group();
}


function draw() {
  background("white");
  if (keyDown("space") && monkey.y >= 314) {
    monkey.velocityY = -16;
  }
  if (monkey.isTouching(bananaGroup)) {
    score++;
  }
  monkey.velocityY += 0.8;
  monkey.collide(ground);
  spawnBananas();
  drawSprites();
  textSize(20);
  text("Score: " + score, 200, 50);
}


function spawnBananas() {
  if (frameCount % 80 === 0) {
    banana = createSprite(500, 200, 15, 30);
    banana.addImage(bananaImage);
    bananaGroup.add(banana);
    banana.velocityX = -4;
    banana.scale = 0.1;
  }
}
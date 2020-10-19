
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var ground,invisibleground ,groundImage;
var foodGroup, obstacleGroup
var score
var gameState="play";
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  createCanvas(400,400);

  
 if(gameState==="play"){
    }
  
  
  monkey = createSprite(100,315,20,50);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  
ground = createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
   invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
   //create Obstacle and Cloud Groups
  obstacleGroup = createGroup();
  foodGroup = createGroup();
  
}


function draw() {
  background("lightblue");
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
      
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    
     monkey_running.velocityY = monkey_running.velocityY + 0.8
    
    var survivalTime = 0; 
    stroke("black");
    textSize(20);
    fill("black");
    survivalTime=Math.ceil(frameCount/frameRate())
    text("survival Time: "+ survivalTime ,100,50);
  }
  
  spawnfood();
  obstacle();
drawSprites();
  
}

function spawnfood() {
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(150,200,20,20);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    foodGroup.add(banana);
    
  }
}

function  obstacle(){
  if(frameCount%300===0){
     
   var obstacle = createSprite(200,330,20,50);

    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
     obstacleGroup.add(obstacle);
}




}
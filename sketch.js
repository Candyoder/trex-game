//creating variables
var trex ,trex_running;
var ground
var ground_img;
function preload(){

trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
ground_img=loadImage("ground2.png")


}

  



function setup(){
  createCanvas(600,200)
  
trex=createSprite(50,160,20,50);
//sprite.addAnimation("running", var name animation)
trex.addAnimation("running", trex_running)
  //create a trex sprite
  trex.scale = 0.5;
ground=createSprite(200,180,500,20)
ground.addImage("ground",ground_img);
ground.velocityX=-6;


}

function draw(){
  background("white")
  if(keyDown("space")){
    trex.velocityY=-10;
  }
  trex.velocityY =trex.velocityY +0.8;


  trex.collide(ground);
drawSprites();

}

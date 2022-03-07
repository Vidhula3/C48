var street,streetImg;
var player,playerImg;
var theif,theif_running;
var powerCoins,powerCoinsImg;
var score=0;
var powerCoinsG;

function preload(){
streetImg=loadImage("bg.jpg");
playerImg=loadImage("player.png")
theif_running=loadAnimation("theif1.png","theif2.png","theif3.png","theif4.png")
powerCoinsImg=loadImage("powerCoins.png")
}

function setup() {
  createCanvas(800,400);

  street=createSprite(250,100);
  street.addImage("street",streetImg);
  street.scale=0.6;
  street.velocityX=-1.6;

  player=createSprite(100,260,20,20);
  player.addImage("player",playerImg);
  player.scale=0.7

  theif=createSprite(760,260,20,20);
  theif.addAnimation("theif",theif_running);
  theif.scale=0.5;

  powerCoinsG = new Group();
 
//add sounds
//gameover condition and game over getting 15 coins
// adding obstacles
//after limited score player can catch the theif

}

function draw() {
  background(streetImg); 
  
  if(street.x<300){
    street.x=width/2;
  }

createEdgeSprites()

  showPowerCoins();

  drawSprites();
 
  if(keyDown(UP_ARROW)){
    player.y=player.y-1;
  }

  if(keyDown(DOWN_ARROW)){
    player.y=player.y+1;
  }

  if(player.y<=215){
   player.y=260;
  }

  if(powerCoinsG.isTouching(player)){
    powerCoinsG.destroyEach();
   score=score+1;
    }
    //add text for score
    //add sounds
  }

    function showPowerCoins(){
      if(frameCount%100===0){
  var powerCoins=createSprite(350,260,10,10);
  powerCoins.addImage("powerCoins",powerCoinsImg);
  powerCoins.scale=0.01;
  powerCoins.y=Math.round(random(250,350));
  powerCoins.velocityX=-2;
  powerCoinsG.add(powerCoins);
   }
}


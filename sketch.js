var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
var cars;
var player;

function preload()
{
 
}

function setup() {
  createCanvas(1366,2700);
  
  
  carGroup1 = new Group();
  logGroup1 = new Group();
 

  

  for( var i=0;i<6;i++){
    var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight)
    if(i%2===0){
      var road = createSprite(683,height-150-(i*400)-grassHeight,width,300);
      road.shapeColor="black";
      
    }
    bottomGrass1.shapeColor="grey";
  }

  

   for( var i=0;i<40; i++)
   {
     logs = new Log(2);
    logGroup1.add(logs.sot);
   }

 
   
   for(var i=0;i<40; i++)
   {
     cars = new Car(2);
     carGroup1.add(cars.sit);
   }

   

   
 }

function draw() {
  background("skyblue");

 

 
 
  player = new Player(width/2,height-25);

  translate(0,-player.spt.y+height-150);

  
  
  
 
  
  
  
  drawSprites();
}

function keyPressed(){
  if(keyCode==UP_ARROW){
    player.move(0,-2);
  }else if(keycode==DOWN_ARROW){ 
    player.move(0,2);
  }else if(keycode==LEFT_ARROW){
    player.move(-2,0);
  }else if(keycode==RIGHT_ARROW){
    player.move(2,0);
  }
}
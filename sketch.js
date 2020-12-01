var TileGroup;
var score=0
var NaachMeriRanisound;
var gameState="Play";

function preload()
{
  backgroundIMG=loadImage("background.png")
 NaachMeriRanisound=loadSound("test.mp3")
}
function setup() {
  createCanvas(windowWidth,windowHeight);

  TileGroup=new Group();
   NaachMeriRanisound.loop(); 
   //TileGroup.debug=true;
}

function draw() {
  background(255);
  imageMode(CENTER);
  image(backgroundIMG,windowWidth/2,windowHeight/2,windowWidth,windowHeight)
  textSize(30)
  fill("white")
  strokeWeight(2);
  stroke(15);
  text("Score: "+score,20,20)
  if(gameState==="Play"){
  for(var i=0;i<TileGroup.length;i++){
    if(mousePressedOver(TileGroup.get(0)) ){
    
      TileGroup.get(0).destroy();
      score++
      //NaachMeriRanisound.play();
    }
  }
  if (touches.length>0){
    for(var i=0;i<TileGroup.length;i++){
      if(TileGroup.get(0).overlapPoint(touches[0].x,touches[0].y)){
        TileGroup.get(0).destroy();
        score++
      }
    }
  }

  for(var i=0;i<TileGroup.length;i++){
    if(TileGroup.get(0).y>height){
      gameState="End"
    }
  }
  spawnTiles()
 
}
if(gameState==="End"){
  textSize(70)
  fill("red")
  strokeWeight(2);
  stroke(15);
  textAlign(CENTER)
  text("GameOver",width/2,height/2)
  NaachMeriRanisound.pause();
}
  drawSprites();
}
function spawnTiles(){
  if (frameCount%40===0){
  var tiles=createSprite(50,0,100,150)
  tiles.velocityY=4+frameCount/100
  var num=Math.round(random(1,3))
  tiles.shapeColor="black";
  switch(num){
    case 1:tiles.x=width/4;
    break;
    case 2:tiles.x=width/2;
    break;
    case 3:tiles.x=3*width/4;
    break;
  }
  TileGroup.add(tiles);
  }
}



var stick1,stick2,stick3,stick4,stick5;
var base,door;
function setup() {
  
  var canvas =createCanvas(1000,570);
  base= createSprite(500,400,900,450)
  stick1= createSprite(100,450,100,700);
  stick2= createSprite(300,450,100,700);
  stick3= createSprite(700,450,100,700);
  stick4= createSprite(900,450,100,700);
  stick5= createSprite(500,200,100,200);
  door= createSprite(500,430,200,280);
  base.shapeColor="brown";
  door.shapeColor="yellow";
  stick1.shapeColor=(124,213,39);
  stick2.shapeColor=(124,213,39);
  stick3.shapeColor=(124,213,39);
  stick4.shapeColor=(124,213,39);
  stick5.shapeColor=(124,213,39);
}
function draw() {
  background("blue");
  drawSprites();
}
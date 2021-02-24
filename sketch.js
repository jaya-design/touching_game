var s1,s2,s3;


function setup() {
  createCanvas(800,400);
 //createSprite(400, 200, 50, 50);
  s1 = createSprite(51,380,300,50);
  // s2.debug = false;
  s2 = createSprite(200,200,30,30);
  s3 = createSprite(350,380,300,50);
  s2.shapeColor = "white";
  s1.shapeColor = "orange";
  s3.shapeColor = "blue";
}

function draw() {
  background("pink"); 
  
s2.x = World.mouseX
s2.y = World.mouseY

// s2.xPosition =1;
// s2.yPosition = mouseY;

if(s2.isTouching(s1)){
  s1.shapeColor = "red";
  s2.shapeColor = "red";
  
}
else{
  s1.shapeColor = "orange";
}

if(s2.isTouching(s3)){
  s3.shapeColor = "black";
  s2.shapeColor = "black";
}
else{
  s3.shapeColor = "blue";
}
if(s2.isTouching(s1)){
  background("white");
  
}
else{
  background("pink");
}

if(s2.isTouching(s3)){
  background("green");
}
else{
  background("pink");
}

   
   
createEdgeSprites();
s2.bounceOff(edges);
s2.bounceOff(s1);
s2.bounceOff(s3);

  drawSprites();

}

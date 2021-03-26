var helicopterIMG, helicopterSprite, packageSprite,packageIMG;

var packageBody,ground;
//packageBody is the var for creating packageBody ki physics engine wali body

var myEngine, myWorld;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10, 10);
	//simple rectangle bnaega jismey realistic effects
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	//simple sprite ground ki create kr chuke ho
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="white";


	myEngine = Engine.create();
	//creating your own copy of the physics engine

	myWorld = myEngine.world;
	//creating your own copy of the physics world

var packageBody_options= {
	'restitution':0.4,
	isStatic: true
};

 
 packageBody = Bodies.circle(width/2 , 200 , 5, packageBody_options);
	World.add(myWorld, packageBody);

	var ground_options= {
		isStatic: true

		//boolean values are NEVER written within " "
	 };
	 

 //Create a Ground ka physics engine ki body
 ground = Bodies.rectangle(width/2, 650, width, 10, ground_options);
 World.add(myWorld, ground);
  
  leftBoxSprite = createSprite(375, 650, 20, 50);
  leftBoxSprite.shapeColor= "red";
  //(code.org)
  //leftBoxSprite.shapeColor= color(255,0,0);
  

  boxLeftBody = Bodies.rectangle(375, 650, 20, 50, {isStatic: false});
  World.add(myWorld, boxLeftBody);

  rightBoxSprite = createSprite(585, 650, 20, 50);
  rightBoxSprite.shapeColor="red";
  
  boxrightBody = Bodies.rectangle(585, 650, 20, 50, {isStatic: false});
  World.add(myWorld, boxrightBody);

  BottomBoxSprite = createSprite(475, 650, 200, 20);
BottomBoxSprite.shapeColor="red";
  
  boxBottomBody = Bodies.rectangle(475, 650, 200, 20, {isStatic: false});
 World.add(myWorld, boxBottomBody);

 //isStatic mtlb ruka rehna. Physics Engine body mei by default gravity hoti hi hai. toh vo automatically girgi hi giregi. 
 //Agar tumhe uss physics engine body ko rokna hai, toh tm dedoge --> isStatic: true


 	

/*Steps to create  a box
1) leftBoxSprite = createSprite(--)
leftBoxSprite.shapeColor= "red";

2) Similarly right wale k liye and bottom wale k liye. 

3) Positions aise dena ki canvas ke beechon beech aaye

4) Then start making physics engine bodies.
var leftboxBody_options=
{
isStatic: true
};
leftBoxBody = Bodies.rectangle(x y width height, options);
World.add(myWorld, leftBoxBody);

5) Similarly make physics engine body for right and bottom

*/


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(myEngine);

  //sprite is a simple rectangle thing
  //physics body aap sprite k upar ek realistic body bnate ho 

	packageSprite.x = packageBody.position.x ;
  	packageSprite.y = packageBody.position.y ;

	  //simple sprite ko move krne ko keyDown
	  //physics engine body ko move krne ko keyCode

	  packageSprite.x=helicopterSprite.x;
	  
	  if(keyDown("LEFT_ARROW")){
		helicopterSprite.x=helicopterSprite.x -3;
	}
	
	if(keyDown("RIGHT_ARROW")){
		helicopterSprite.x=helicopterSprite.x +3;
	}
	
  drawSprites();
  
  
 
}

/*
1) keyPressed, mouseDragged, mouseReleased are all event listener functions.
2) event listener functions are pre defined functions just like function preload, func setup & THEY ARE NOT CALLED IN SIDE FUNCTION DRAW
3) event listener functions means: --> kisi ek event k hone pe koi action hona
Example: function keyPressed: --> koi key press hogi or fir koi action action. down arrow press kroge toh packageBody giregi

4) keycode (or ASCII CODE) are the unique values given to every key on ur keyboard. it is the same thoughout the world.
QWERTY keyboard throughout the world

Har key k liye ek fixed/unique code hota hai, jo pure world k har keyboard k liye same hota h.
Spacebar= 32 (it is the same throughout the world)
A-Z : 65-90
==> B= 66
==> C= 67

a-z: 97-122
a= 97
b=98

0-9: 48-57

*/

function keyPressed(){

	if (keyCode===DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false);
	  
	}
	
	
	}
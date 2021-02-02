const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObject, paperObject,groundObject	
var world;


function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject = new paper(100,450,70);
	groundObject = new ground(width/2,670,width,370);
	dustbinObject = new dustbin(650,480);
	
	Engine.run(engine);
  
}


function draw() {

	background("lightblue");

  rectMode(CENTER);
 
  paperObject.display();
  groundObject.display();
  dustbinObject.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:70,y:-145});
  	}
}

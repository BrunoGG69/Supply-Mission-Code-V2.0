var helicopterIMG, helicopterSprite;
var packageBody, ground;

var lsideBox, rsideBox, centreBox;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")	
}

function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);

	engine = Engine.create(); 
	world = engine.world;

	packageBody = new package(width/2, 80, 50, 50);

	centreBox = new RedBox1(width/2, height-42, 200, PI);
	lsideBox = new RedBox1(300, height-42, 100, PI/2);
	rsideBox = new RedBox1(500, height-42, 100, -PI/2);

	Engine.run(engine);

	ground = createSprite(width/2, 650, width, 10);

  
}


function draw() {
  rectMode(CENTER);

	packageBody.display();
	centreBox.display();
	lsideBox.display();
	rsideBox.display();  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
  }
}




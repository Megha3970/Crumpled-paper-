const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var crumpledPaper;
var ground;
var dustbinBottom, dustbinSide1, dustbinSide2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	crumpledPaper = new Paper (60,600,70);
	ground = new Ground (400,620,800,30);
	dustbinBottom = new Dustbin (600,600,200,20);
	//dustbinSide1 = new Dustbin (510,545,20,100);
	//dustbinSide2 = new Dustbin (690,545,20,100);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  Engine.update(engine);

   
  crumpledPaper.display();
  ground.display();
  dustbinBottom.display();
  //dustbinSide2.display();
  //dustbinSide1.display();
 
 
  
  drawSprites();
 
}

function keyPressed ()
{
if (keyCode === UP_ARROW)
{
	Matter.Body.applyForce (crumpledPaper.body, crumpledPaper.body.position, {x:900, y:-900});
}
}




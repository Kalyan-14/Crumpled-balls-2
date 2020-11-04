
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paperBall;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,80);
	this.image=loadImage("Imgs/dustbin.png");
	
	paperBall = new Paper(20,100,50,20);


	 rightBox=createSprite(780,610,20,100);
	 rightBox.shapeColor=color(200,500,200);

	 downBox=createSprite(690,651,200,20);
	 downBox.shapeColor=color(200,500,200);

	 leftBox=createSprite(600,610,20,100);
	 leftBox.shapeColor=color(200,500,200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paperBall.display();

  drawSprites();

  keyPressed();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}
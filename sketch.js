
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var groundobj;
var leftside;
 

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	//createCanvas(600,800);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = Bodies.circle(20,20,20,ball_options);
	World.add(world,ball);

	ground =  new Ground(1350,600,20,120);
	groundobj = new Ground(width/2,670,width,20);
	leftside =  new Ground(1100,600,20,120);

	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  drawSprites();
  groundobj.display();
  groundobj.show();
  leftside.show();
  

}

function hforce()
{

	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})

}

function vforce()
{

	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}

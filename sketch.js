const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper, ground;
var line1,line2,line3;


function preload()
{
	dustbinimage = loadImage('dustbingreen.png')
}

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


	ground = new Ground(400,690,800,20)
	paper = new Paper(100,600,40)
	line1 = new Dustbin(650,673,175,10);
	line2 = new Dustbin(560,603,10,150);
	line3 = new Dustbin(735,603,10,150);
    console.log(ground)
	Engine.run(engine);
  
}


function draw() {

rectMode(CENTER)
  background('white');
  
   ground.display();
   paper.display();
//    line1.display();
//    line2.display();
//    line3.display();
  drawSprites();
  image(dustbinimage ,552,530,198,150);
}
function keyPressed() {
	if(keyCode === UP_ARROW){
	
		Matter.Body.applyForce(paper.body,paper.body.position,{x:225,y:-225});
	}
}	




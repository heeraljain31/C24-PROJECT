
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
  var trash,ground,world;
  var box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	 box1=createSprite(400,649,200,20);
	 box1.shapeColor=color("red")

	 box2=createSprite(290,610,20,100);
	 box2.shapeColor=color("red")

	 box3=createSprite(500,610,20,100);
	 box3.shapeColor=color("red")


	 //Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){


	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});


}

}




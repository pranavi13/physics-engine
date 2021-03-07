 const Engine =Matter.Engine;
 const World =Matter.World;
 const Bodies =Matter.Bodies;
 
 function setup() {
  createCanvas(400,400);
 
  engine= Engine.create();
  world= engine.world;
  var goptions={
    isStatic:true
  }
  ground= Bodies.rectangle(200,390,400,20,goptions)
World.add(world,ground);
var boptions={
  restitution:1
}
ball= Bodies.circle(200,100,40,boptions)
World.add(world,ball)
}

function draw() {
  background("pink"); 
  Engine.update(engine);
  rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20) 
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,40,40)
}
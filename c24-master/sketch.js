const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector} = Matter;

var engine, world;
var tanker;
var angle = 0
var canonBall;
var shot;
var ground;
var ball_1,ball_2,ball_3,ball_4,ball_5;
var launcherX,launcherY;
var flag = "start"

function setup(){
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2, height-10, width, 30);
  tanker = new Tanker(75,height-110,60,30);

  ball_1 = new Ball(400,50,20)
  ball_2 = new Ball(500,100,20)
  ball_3 = new Ball(600,150,20)
  ball_4 = new Ball(700,200,20)
  ball_5 = new Ball(800,250,20)

  canonBall = new CanonBall(20,20);


  shot = new ShootBall(canonBall.body,{x:70, y:height-220});
}

function draw() {
   background("powderblue");
   Matter.Engine.update(engine);
   ground.display()
   ball_2.display()
   ball_1.display()
   ball_3.display();
   ball_4.display();
   ball_5.display();
   canonBall.display();
   tanker.display();
   shot.display();
   if(keyIsDown(UP_ARROW)){
     shot.attach(canonBall.body)
   }
   fill("crimson");
    textSize(15);
    text("Use the Left and Right Arrow keys to aim",20,46);
    text("Use the Up Arrow to reload and use the Down Arrow to shoot",20,76);
}


function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    flag = "launch"

    shot.shoot()
  }
}
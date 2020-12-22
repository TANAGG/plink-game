const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground;
var division,division1,division2,division3,division4,division5;
var plinko,plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8,plinko9,plinko10,plinko11,plinko12;
var plink1,plink2,plink3,plink4,plink5,plink6,plink7,plink8;
var particles = []
var particle;
var score = 0;
var turn = 0;

var gameState = PLAY;
var gameState = END;



function setup() {
  createCanvas(480,600);
  
  engine = Engine.create();
  world = engine.world;
  

  division = new Division(80,535,10,200);
  division1 = new Division(180,535,10,200);
  division2 = new Division(280,535,10,200);
  division3 = new Division(380,535,10,200);
  division4 = new Division(0,10,5,1000);
  ground = new Ground(250,598,700,10);
  plinko = new Plink(30,50,8);
  plinko1 = new Plink(60,100,8);
  plinko2 = new Plink(90,50,8);
  plinko3 = new Plink(120,100,8);
  plinko4 = new Plink(150,50,8);
  plinko5 = new Plink(180,100,8);
  plinko6 = new Plink(210,50,8);
  plinko7 = new Plink(240,100,8);
  plinko8 = new Plink(270,50,8);
  plinko9 = new Plink(300,100,8);
  plinko10 = new Plink(330,50,8);
  plinko11 = new Plink(360,100,8);
  plinko12 = new Plink(390,50,8);
  plink1 = new Plink(30,150,8);
  plink2 = new Plink(90,150,8);
  plink3 = new Plink(150,150,8);
  plink4 = new Plink(210,150,8);
  plink5 = new Plink(270,150,8);
  plink6 = new Plink(330,150,8);
  plink7 = new Plink(390,150,8);
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  text("Score:"+score,10,40);
  text("500",40,535);
  text("100",150,535);
  text("200",240,535);
  text("400",330,535);
  text("300",420,535);
  ground.display();
  division.display();
 division1.display();
 division2.display();
 division3.display();
 plinko.display();
 plinko1.display();
 plinko2.display();
 plinko3.display();
 plinko4.display();
 plinko5.display();
 plinko6.display();
 plinko7.display();
 plinko8.display();
 plinko9.display();
 plinko10.display();
 plinko11.display();
 plinko12.display();
 plink1.display();
 plink2.display();
 plink3.display();
 plink4.display();
 plink5.display();
 plink6.display();
 plink7.display();
 
for(var j = 0; j < particles.length; j++){
    particles[j].display();
}

if(frameCount%60===0){
particles.push(new Particle(random(width/10-10, width/10+10),10,10))
}

if(frameCount%90===0){
  particles.push(new Particle(random(width/7-10, width/7+10),10,10))
  }

  if(frameCount%120===0){
    particles.push(new Particle(random(width/40-10, width/40+10),10,10))
    }

    if(frameCount%160===0){
      particles.push(new Particle(random(width/70-10, width/70+10),10,10))
      }
 
}

function mousePressed()
{
  if(gameState!=="end")
  {
    score++;
    particle = new Particle(mouseX,10,10,10);
  }
}



  
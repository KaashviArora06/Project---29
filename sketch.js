const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var standR,standR_img;
var standL,standL_img;

function preload(){
  polygon_img=loadImage("polygon.png");
  bgImg = loadImage("bg.jpeg");
  standR_img = loadImage("stickR.png");
  standL_img = loadImage("stickL.png");

}

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ball = new Ball(100,200,10)

  topStand = new Stand(400,275,250,10);
  
  bottomStand = new Stand(400,575,250,10)

 // top stand 
  //level one
  block1 = new Block(305,235,30,40);
  console.log(block1);
  block2 = new Block(335,235,30,40);
  block3 = new Block(365,235,30,40);
  block4 = new Block(395,235,30,40);
  block5 = new Block(425,235,30,40);
  block6 = new Block(455,235,30,40);
  block7 = new Block(490,235,30,40);
  //level two
  block8 = new Block(330,195,30,40);
  block9 = new Block(360,195,30,40);
  block10 = new Block(390,195,30,40);
  block11 = new Block(420,195,30,40);
  block12 = new Block(450,195,30,40);
  //level three
  block13 = new Block(360,155,30,40);
  block14 = new Block(390,155,30,40);
  block15 = new Block(420,155,30,40);
  //top
  block16 = new Block(390,115,30,40);
  
 // bottom stand 
 //level one 
 bblock1 = new Block(305,500,30,40);
  console.log(bblock1);
  bblock2 = new Block(335,500,30,40);
  bblock3 = new Block(365,500,30,40);
  bblock4 = new Block(395,500,30,40);
  bblock5 = new Block(425,500,30,40);
  bblock6 = new Block(455,500,30,40);
  bblock7 = new Block(490,500,30,40);
  //level two
  bblock8 = new Block(330,460,30,40);
  bblock9 = new Block(360,460,30,40);
  bblock10 = new Block(390,460,30,40);
  bblock11 = new Block(420,460,30,40);
  bblock12 = new Block(450,460,30,40);
  //level three
  bblock13 = new Block(360,420,30,40);
  bblock14 = new Block(390,420,30,40);
  bblock15 = new Block(420,420,30,40);
  //top
  bblock16 = new Block(390,380,30,40);
  

}

function draw() {
  background(bgImg); 
  
  //textSize(20)
  
  topStand.display();
  bottomStand.display();

  strokeWeight(2);
  stroke(15);
  // top stand 
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
 
 // bottomstand 
  bblock1.display();
  bblock2.display();
  bblock3.display();
  bblock4.display();
  bblock5.display();
  bblock6.display();
  bblock7.display();
  bblock8.display();
  bblock9.display();
  bblock10.display();
  bblock11.display();
  bblock12.display();
  bblock13.display();
  bblock14.display();
  bblock15.display();
  bblock16.display();

  ball.display();
}

function mouseDragged(){

  Matter.Body.setPosition()
}
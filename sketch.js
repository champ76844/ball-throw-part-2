const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bin,paperball;
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    paperball = loadImage("sprites/paper.png");
    dustbin = loadImage("sprites/dustbingreen.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    dustbin = new bin(700,320,70,70);
    paper = new paperball(700,240,70,70);
   
    

   
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    console.log(dustbin.body.position.x);
    console.log(dustbin.body.position.y);
    console.log(dustbin.body.angle);
    dustbin.display();
    paper.display();
    platform.display();
}

//Namespacing to a simpler format
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engineV,worldV;
var ground;
var box1,box2;

function setup() {
  createCanvas(400,400);
  engineV = Engine.create();
  worldV=engineV.world;


  //obeject -- physical obj vs displayed obj


  box1 = new boxClass(200,300,50,50)
  box2 = new boxClass(240,150,50,100)

  ground = new grounds(200,390,400,20)

  }



function draw() {
  background("lightgreen"); 
  Engine.update(engineV);
 

  box1.display()
  box2.display()

  ground.display()
  



  
}
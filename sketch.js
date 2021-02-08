const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var score= 0
var rope1,ball1;

function preload(){
 getBg()
}

function setup() {
  var canvas = createCanvas(1200,400);
  engine  = Engine.create();
  world = engine.world;
 
  

  ground1=new Ground(500,400,1200,30)

   
    box1 = new Box(400,350,50,50)
    box2 = new Box(450,350,50,50)
    box3 = new Box(500,350,50,50)
    box4 = new Box(550,350,50,50)
    box5 = new Box(600,350,50,50)
    box6 = new Box(650,350,50,50)
    box7 = new Box(450,300,50,50)
    box8 = new Box(500,300,50,50)
    box9 = new Box(550,350,50,50)
    box10 = new Box(600,350,50,50)
    box11 = new Box(500,350,50,50)
    box12 = new Box(550,350,50,50)
   
    ball1 = new Ball(100,200,40,40)

    rope1= new Rope(ball1.body,{x:180,y:90})

}

function draw() {
 // background(backgroundImg);  
 background("lightblue")
  Engine.update(engine);
  text("score :"+ score, width-300, 50);
  ground1.display()
  
  
  
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()

  box1.score()
  box2.score()
  box3.score()
  box4.score()
  box5.score()
  box6.score()
  box7.score()
  box8.score()
  box9.score()
  box10.score()
  box11.score()
  box12.score()

  ball1.display()
  rope1.display()
}
  

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
  }
  
 
  function mouseReleased(){
    rope1.fly();
  }
  
 // ground.display();
  


 function keyPressed() {

  if (keyCode === 32)
  {
    rope1.attach(ball1.body)
  }
}

//Noe add the code for api call and changing the background same as we did in the class.Remove this below code from comments
// and complete it.

async function getBg() 
{
    var responce = await fetch( "http://worldtimeapi.org/api/timezone/Asia/kolkata" ) ;
    var responceJSON = await responce.json();
    console.log(responceJSON)
    var datetime = responceJSON.datetime
    var hour=datetime.slice(11.13)
    //console.log(datetime.hour)

    if(hour>=0600 && hour<=1900)
    {
        
        bg="sprites/bg.png"
    }

    else
    {
        bg="sprites/bg2.jpg"
    }
     backgroundImage=loadImage(bg)
}

/*async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
}*/
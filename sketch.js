const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,ground,box2,ball;
var score = 0;
var bg;

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);
    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,1955,30,40);
    box16 = new Box(390,155,30,40);
    stand1 = new Ground(390,300,250,10);
    stand2 = new Ground(700,200,200,10);
    box17 = new Box(640,175,30,40);
    box18 = new Box(670,175,30,40);
    box19 = new Box(700,175,30,40);
    box20 = new Box(730,175,30,40);
    box21 = new Box(760,175,30,40);
    box22 = new Box(670,135,30,40);
    box23 = new Box(700,135,30,40);
    box24 = new Box(730,135,30,40);
    box25 = new Box(700,95,30,40);
    getbg();





    ground = new Ground(450,390,900,20);
    ball = new Ball (200,200,30);
    slingshot = new SlingShot(ball.body,{x:200,y:200})
}

function draw(){
    if(bg){
        background(bg);
    }
    else{
        background(0);   
    }
    noStroke();
    textSize(35);
    fill("red");
    text("score: "+score,width-300,50);
    
    Engine.update(engine);
    
    ground.display();
    slingshot.display();
    fill ("#DA9648")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill ("#69C2D2")
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill ("#E4ED70")
    box13.display();
    box14.display();
    box15.display(); 
    fill("#9EA39D") 
    box16.display();
    fill ("#9EA39D")
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    fill ("#ADD826")
    box22.display();  
    box23.display();
    box24.display();
    fill ("#A52A2A")
    box25.display();
    stand1.display();
    stand2.display();
    
    ball.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
 
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    
    box13.score();
    box14.score();
    box15.score(); 
    
    box16.score();
    
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
   
    box22.score();  
    box23.score();
    box24.score();
   
    box25.score();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
   slingshot.fly() 
}
function keyPressed(){
    if(keyCode == 32){
        Matter.Body.setPosition(ball.body,{x:200,y:50});
        slingshot.attached(ball.body)
    }
}
async function getbg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responsejson = await response.json();
    var dt = responsejson.datetime;
    var hour = dt.slice(11,13);
    if(hour>=06 && hour<=19){
        bg = "grey";
    
    }
    else{
        bg = "skyblue";
    }
}
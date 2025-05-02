var x = 50
var y = 50
var w = 87;
var a = 65;
var s = 83;
var d = 68;

var obstacle;
var obstaclex = [];
var obstacley = [];
var obstaclew = [];
var obstacleh = [];
var obstaclesize = [];
var obstaclediameter = [];
var movementx = [];
var movementy = [];

class shape{
  constructor(x,y,size,color,type){
  this.x = x;
  this.y = y;
  this.color = color;
  this.size = size;
  this.type = type;
  }
display(){
  fill(this.color)
  if(this.type==="circle")
  {
    circle(this.x,this.y,this.size)
  }
  if(this.type==="square")
  {
    square(this.x,this.y,this.size)
  }
  }
}
var square0 = new shape(100,200,40,"green","square")
var square1 = new shape(340,510,400,"pink","square")
var circle0 = new shape(750,25,150,"yellow","circle")
function setup()
{

  createCanvas(800,800);
  for(var i = 0; i < 5; i++)
        {
            obstaclex[i] = random(0,400);
            obstacley[i] = random(0,400);
            obstaclew[i] = random(0,400);
            obstacleh[i] = random(0,400);
            obstaclesize[i] = random(0,200);
            movementx[i] = random (-15,15);
            movementy[i] = random (-15,15);
        }
  
  movement = floor(random() * 10);
}

function draw()
{
  background(0,0,0)
  Player();
  Control();
  WinC();
  obstacleplace();
  obstaclecreation();
  obstaclemovement();
  square0.display();
  square1.display();
  circle0.display();
}
function Player()
{
  fill(255,255,255)
  circle(x,y,50);
  
}
function Control()
{
   if (keyIsDown(d))
    {
      x+=5;
    }
  else
    {
    if (keyIsDown(a))
      {
        x-=5;
      }
  else
    {
    if (keyIsDown(s))
      {
        y+=5;
      }
  else
    {
    if (keyIsDown(w))
      {
        y-=5;
      }
}
}
}
}
function WinC()
{
  fill(0,255,0);
  square(700,700,100);
    if (x > 700 && x < 800 && y > 700 && y < 800)
  {
    textSize(32);
    fill(255);
    text("YOU WIN THE GAME!", 80, 80)
  }
}
function mousePressed()
{
  obstacle = {
    x: mouseX,
    y: mouseY,
    w: 120,
    h: 60,
    }
}
function obstacleplace()
{
  if (obstacle)
  {
  fill(0,random(0,255),random(0,255));
  rect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);
  }
}
function obstaclecreation()
{
  fill(random(0,255),random(0,255),random(0,255));
        for(var i = 0; i < 5; i++)
        {
            rect(obstaclex[i],obstacley[i],obstaclew[i],obstacleh[i]);
}
}
function obstaclemovement(){
  for (var i = 0; i < obstaclex.length; i++){
    obstaclex[i]+=movementx[i]
    obstacley[i]+=movementy[i]
  if (obstaclex[i]<=0){
    obstaclex[i]=799
  }
  else
  if(obstaclex[i]+obstaclew[i]>=800){
    obstaclex[i] = 1
  }
  else
  if (obstacley[i]<=0){
    obstacley[i]=799
  }
  else
  if (obstacley[i]+obstacleh[i]>=800){
    obstacley[i]=1
  }
}
}
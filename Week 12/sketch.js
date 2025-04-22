var x = 50
var y = 50
var w = 87;
var a = 65;
var s = 83;
var d = 68;
var obstacle;
var obstacle1x = 400;
var obstacle1y = 400;
var obstacle2x = 400;
var obstacle2y = 400;
function setup()
{
  createCanvas(800,800);
  movement = floor(random() * 10);
  movement2 = floor(random() * 10);
}
function draw()
{
  background(0,0,0)
  Player();
  Control();
  WinC();
  obstacleplace();
  obstaclecreation();
  obstaclexmovement();
  obstacleymovement();
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
  fill(0,0,255)
  rect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);
  }
}
function obstaclecreation()
{
  fill(255,0,0);
  rect(obstacle1x,obstacle1y,200,100)
  fill(255,255,0);
  rect(obstacle2x,obstacle2y,100,200)
}
function obstaclexmovement()
{
    obstacle1x += movement;
  if(obstacle1x >= 800 || obstacle1x <= 0)
    {
      obstacle1x=1;
      movement *= -1;
    }

    obstacle1y += movement;
    if(obstacle1y >= 800 || obstacle1y <= 0)
    {
      obstacle1y=1;
      movement *= -1;
    }
}
function obstacleymovement()
{
    obstacle2x+= movement2;
  if(obstacle2x >= 800 || obstacle2x <= 0)
    {
      obstacle2x=1;
      movement2 *= -1;
    }
    if(obstacle2y >= 800 || obstacle2y <= 0)
    {
      obstacle2y=1;
      movement2 *= -1;
    }
}
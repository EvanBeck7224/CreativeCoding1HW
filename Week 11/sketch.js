var x=100;
var y=100;
var obstacle1X=200;
var obstacle1Y=400;
var obstacle2X=300;
var obstacle2Y=300;
var movement;
var movement2;
var obstacle;
function setup()
{
  createCanvas(800,800);
  movement = floor(random() * 10);
  movement2 = floor(random() * 10);
}
function draw()
{
  background(100);
  fill("red");
  rect(obstacle1X,obstacle1Y,200,20);
  obstacle1X += movement;
  if(obstacle1X >= 800 || obstacle1X <= 0)
    {
      obstacle1X=1;
      movement *= -1;
    }

    obstacle1Y += movement;
    if(obstacle1Y >= 800 || obstacle1Y <= 0)
    {
      obstacle1Y=1;
      movement *= -1;
    }

  fill("yellow");
  rect(obstacle2X,obstacle2Y,20,200);
    obstacle2X+= movement2;
  if(obstacle2X >= 800 || obstacle2X <= 0)
    {
      obstacle2X=1;
      movement2 *= -1;
    }
    if(obstacle2Y >= 800 || obstacle2Y <= 0)
    {
      obstacle2Y=1;
      movement2 *= -1;
    }
  fill("blue")
    if (obstacle) {
    rect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);
    }
  
  fill("white");
  circle(x,y,50);
   if (keyIsDown(68))
    {
      x+=5;
    }
  else
    {
    if (keyIsDown(65))
      {
        x-=5;
      }
  else
    {
    if (keyIsDown(83))
      {
        y+=5;
      }
  else
    {
    if (keyIsDown(87))
      {
        y-=5;
      }
    }
}
    }
  fill("green")
  square(700,700,50)
  if (x > 700 && x < 750 && y > 700 && y < 750)
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
    w: 60,
    h: 30,
    }
}
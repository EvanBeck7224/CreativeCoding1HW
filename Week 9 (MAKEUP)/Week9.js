function setup()
{
  createCanvas(800,800);
}
function draw()
{
  background(100);
  fill(237, 194, 138);
  circle(400,400,500);
  fill("black");
  circle(300,300,20);
  circle(500,300,20);
  triangle(300,500,400,600,500,500);
  fill("yellow");
  triangle(100,100,400,250,600,100);
  fill("white");
  rect(325,500,150,10);
  line(250,250,300,250);
  line(450,250,550,250);
  text("A Self Portrait",40, 50)
  text("By Evan Beck", 60, 70)
  console.log("hi");
}
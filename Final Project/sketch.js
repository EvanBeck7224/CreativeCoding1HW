x = 100;
y = 800;

var a = 65;
var d = 68;
var space = 32;
var direction = 1;

circlex = 100;
circley = 100;
var bugspeed = 3;

var lives = 3;
var lifeimage = [];

var invistoungex = x-125*direction;
var invistoungey = y+25;
var invistoungeh = 10;
var invistoungew = 125;
var toungex = x-125*direction;
var toungey = y+25;
var toungeh = 4;
var toungew = 125; 
var toungeout = false;
var lasttoungetime = 0;
var toungesounddelay = 300;

var bomb = false;
var bombhit = false;
var bombspeed = 3;
var bombinterval = 3000;
var lastbomb = 0;
bombx = 100;
bomby = 100;

var scoretext = 0;
var scoretext2 = 0;
var scoreimage = [];
var scoreimage2 = [];


var walkrightmouth = [];
var walkleftmouth = [];
var walkright = [];
var walkleft = [];
var lastwalktime = 0;
var walktimer = 0;
var walkdelay = 150;
var walkframe = 0;
var recentlywalking = 0;
var walking = false;

var stage = 0;
var buttonx = 500;
var buttony = 500;
var buttonw = 200;
var buttonh = 100;

function preload(){
  walkright[0] = loadImage("chameleon1.png");
  walkright[1] = loadImage("chameleon2.png");
  walkright[2] = loadImage("chameleon3.png");
  walkright[3] = loadImage("chameleon4.png");
  walkright[4] = loadImage("chameleon5.png");
  walkright[5] = loadImage("chameleon6.png");
  walkright[6] = loadImage("chameleon7.png");
  
  walkleft[0] = loadImage("chameleonf.png");
  walkleft[1] = loadImage("chameleonf2.png");
  walkleft[2] = loadImage("chameleonf3.png");
  walkleft[3] = loadImage("chameleonf4.png");
  walkleft[4] = loadImage("chameleonf5.png");
  walkleft[5] = loadImage("chameleonf6.png");
  walkleft[6] = loadImage("chameleonf7.png");
  
  walkrightmouth[0] = loadImage("chameleonmouth1.png");
  walkrightmouth[1] = loadImage("chameleonmouth2.png");
  walkrightmouth[2] = loadImage("chameleonmouth3.png");
  walkrightmouth[3] = loadImage("chameleonmouth4.png");
  walkrightmouth[4] = loadImage("chameleonmouth5.png");
  walkrightmouth[5] = loadImage("chameleonmouth6.png");
  walkrightmouth[6] = loadImage("chameleonmouth7.png");
  
  walkleftmouth[0] = loadImage("chameleonmouthf.png");
  walkleftmouth[1] = loadImage("chameleonmouthf2.png");
  walkleftmouth[2] = loadImage("chameleonmouthf3.png");
  walkleftmouth[3] = loadImage("chameleonmouthf4.png");
  walkleftmouth[4] = loadImage("chameleonmouthf5.png");
  walkleftmouth[5] = loadImage("chameleonmouthf6.png");
  walkleftmouth[6] = loadImage("chameleonmouthf7.png");
  
  lifeimage[1] = loadImage("1.png");
  lifeimage[2] = loadImage("2.png");
  lifeimage[3] = loadImage("3.png");
  
  scoreimage[0] = loadImage("0.png");
  scoreimage[1] = loadImage("1yellow.png");
  scoreimage[2] = loadImage("2yellow.png");
  scoreimage[3] = loadImage("3yellow.png");
  scoreimage[4] = loadImage("4.png");
  scoreimage[5] = loadImage("5.png");
  scoreimage[6] = loadImage("6.png");
  scoreimage[7] = loadImage("7.png");
  scoreimage[8] = loadImage("8.png");
  scoreimage[9] = loadImage("9.png");
  
  scoreimage2[0] = loadImage("0.png");
  scoreimage2[1] = loadImage("1yellow.png");
  scoreimage2[2] = loadImage("2yellow.png");
  scoreimage2[3] = loadImage("3yellow.png");
  scoreimage2[4] = loadImage("4.png");
  scoreimage2[5] = loadImage("5.png");
  scoreimage2[6] = loadImage("6.png");
  scoreimage2[7] = loadImage("7.png");
  scoreimage2[8] = loadImage("8.png");
  scoreimage2[9] = loadImage("9.png");
  
  img1 = loadImage("bombgif.gif");
  img2 = loadImage("apple.png");
  img3 = loadImage("boom.png");
  img4 = loadImage("lives.png");
  img5 = loadImage("score.png");
  img6 = loadImage("start.png");
  img7 = loadImage("title.png");
  img8 = loadImage("winscreen.png");
  img9 = loadImage("lossscreen.png")
  img10 = loadImage("branch.png")
  img11 = loadImage("title2.png")
  
  soundFormats('mp3', 'ogg','wav');
  mySound = loadSound('chameleongamesoundtrack-1.wav');
  titlesong = loadSound('chameleontitlescreen.wav');
  deathsong = loadSound('chameleondeathscreen.wav');
  boomsound = loadSound('Record (online-voice-recorder.com)(7).mp3');
  toungesound = loadSound('Record (online-voice-recorder.com)(8).mp3');
  
}
function setup() {
  
  createCanvas(1000,1000);

}

function draw() {
    background(220);
    startbutton();
    
  if (stage==1){
    
  
  background("lightblue");
 
  movement();
  invistounge();
  toungesprite();
  bug();
  scoredisplay();
  bombspawn();
  bombtimer();
  bombcollisiontounge();
  bombcollision();
  livesdisplay();
  gameover();
  speedup();
  levelborder();  
  wincondition();
  loggy();
  music();
  chameleon();
}
}

function loggy(){
  if (lives>0){
    if (scoretext2<3){
  image(img10,0,850,0,0)
  }
}
}
function chameleon() {
  let recentlyWalking = (millis() - lastwalktime) < 500;
if (lives>0){
    if (scoretext2<3){
  image(img10,0,850,0,0)
  if (walking || recentlywalking) {
    if (millis() - walktimer > walkdelay) {
      walkframe = (walkframe + 1) % 6
      walktimer = millis();
    }
    }

if (direction === -1 &&toungeout==false) {
  image(walkright[walkframe], x, y, 200, 100);
} 
else 
{
if (direction === -1 &&toungeout==true) {
  image(walkrightmouth[walkframe], x, y, 200, 100);
}
else
{
if (direction === 1&&toungeout==false) {
  image(walkleft[walkframe], x, y, 200, 100);
}
else
{
if (direction === 1&&toungeout==true) {
  image(walkleftmouth[walkframe], x, y, 200, 100);
}
}
}
}
}
}
}
function movement(){
  if(keyIsDown(a))
    {
      x -= 5;
      direction = 1
      walking = true;
      lastwalktime = millis();
    }
  else
  if(keyIsDown(d))
    {
      x += 5;
      direction =-1;
      walking=true;
      lastwalktime = millis();
    }
  else walking=false;
}

function invistounge(){
    if(toungeout){
      if(millis()-lasttoungetime > toungesounddelay)
      {
        toungesound.play();
        lasttoungetime = millis()
      }
    
    invistoungex = x - 100 * direction;
    invistoungey = y + 45;
    if (direction==-1){
      invistoungex+=75;
    }
      fill(0,0,0,0)
      noStroke()
      rect(invistoungex,invistoungey,invistoungew,invistoungeh)
    }
}
function toungesprite(){
    if(toungeout){
      
    toungex = x - 100 * direction;
    toungey = y + 45;
    if (direction==-1){
      toungex+=75;
    }
      
      fill(255,98,73)
      stroke(0)
      rect(toungex,toungey,toungew,toungeh)
    }

   
    
}
function bug(){
    fill("black")
    image(img2,circlex,circley,25, 25)
    circley+=bugspeed;
  
  if(circley>1000)
    {
    circley=0
    circlex=random(10,990)
    bugspeed=random(3,10)
    }
  if(
      circlex > invistoungex &&
      circlex < invistoungex + invistoungew &&
      circley > invistoungey &&
      circley < invistoungey + invistoungeh&&
      toungeout
  )
     {
    circley=0
    circlex=random(10,990)
    bugspeed=random(3,10)
    scoretext+=1;
     }
  
}
function bombspawn(){
  if(bomb){
    
    image(img1,bombx, bomby, 50);
    bomby+=bombspeed;
  }
}
function bombtimer() {
  if (!bomb && millis()-lastbomb>bombinterval) {
    bomb = true;
    bombx = x+random(-50,50);
    bomby = -50;
    bombspeed = random(5,10);
    lastbomb = millis();
    }
      if (bomb&&bomby>height){
      bomb=false;
}
}
function bombcollisiontounge(){
  if(
      bomb&&
      !bombhit&&
      bombx > invistoungex&&
      bombx < invistoungex + invistoungew&&
      bomby > invistoungey&&
      bomby < invistoungey + invistoungeh&&
      toungeout
    )
    {
    bomb=false;
    bombhit=true;
    image(img3,bombx,bomby,50,50)  
    lives -= 1;
    boomsound.play();
    }
    bombhit=false
}
function bombcollision(){
  if(
  bomb&&
  !bombhit&&
  bombx > x &&
  bombx < x+200&&
  bomby > y&&
  bomby < y+100
    )
  {
    bomb=false;
    bombhit=true;
    image(img3,bombx,bomby,50,50)
    lives -= 1;
    boomsound.play();
  }
  bombhit=false

}
function scoredisplay(){
  if (scoretext>9){
    scoretext2 +=1;
    scoretext =0;
  }
  image(img5,50,40,200,100)
  image(scoreimage[scoretext],275,40,100,100)
  image(scoreimage2[scoretext2],225,40,100,100)
}
function livesdisplay(){
  if (lives>0){
    image(img4,600,40,200,100)
    image(lifeimage[lives],800,40,100,100)
    }
}
function gameover(){
  if(lives<=0){
  noLoop();
  image(img9,0,0,1000,1000)
  }
    }
function speedup(){
  if (scoretext+scoretext2*10>=15)
  {
    bombspeed=17
  }
}  
function levelborder(){
  if (x>=width-200){
      x=width-200;
    }
  else
  if (x<=0){
     x=0;
    }
}
function startbutton(){
  image(img6,buttonx-buttonw/2,buttony,buttonw,buttonh)
  
  if(mouseX>buttonx-buttonw/2&&
    mouseX<buttonx+buttonw/2&&
    mouseY>buttony&&
    mouseY<buttony+buttonh&&
    mouseIsPressed){
    stage=1
  }
  image(img7,100,100,800,400)
  image(img11,0,0,1000,1000)
  
}
function wincondition(){
  if (scoretext2==3){
    noLoop();
    image(img8,0,0,1000,1000)
  }
}

function keyPressed() {
  if (keyCode === space) {
    toungeout = true;
      setTimeout(() => {
      toungeout = false;
    }, 300);
  }
}

function keyReleased() {
  if (keyCode === space) {
    toungeout = false;
  }
}
var musicplayed = false;

function music() {
    if (stage == 0) {
    titlesong.loop();
    }
  else 
  if (stage == 1 && !musicplayed) {
    titlesong.stop();
    mySound.loop();
    musicplayed = true;
  }
  if (scoretext2==3){
    mySound.stop();
    titlesong.loop();
  }
  if (lives==0){
    mySound.stop();
    deathsong.loop();
  }
}

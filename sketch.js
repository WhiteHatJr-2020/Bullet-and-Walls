var bullet,wall,thickness;
var s,w;
function setup() {
  createCanvas(1600,400);
  s=random(223,321);
  w=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,50,50);
  bullet.velocityX=s;
  bullet.shapeColor=color(255);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);  
  if(iscollide(bullet,wall))
  {
    bullet.velocityX=0;
    var d=0.5*w*s*s/(thickness*thickness*thickness);
    if(d>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    if(d<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}

function iscollide(lb,lw)
{
  rb=lb.x+lb.width;
  wl=lw.x;
  if(rb>=wl)
  {
    return true;
  }
  else
  {
    return false;
  }
}
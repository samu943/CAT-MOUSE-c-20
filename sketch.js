var tom,jerry,tom1Img,tom2Img,tom3Img,jerry1Img,jerry2Img,jerry3Img;
var canvas,bg;

function preload() {
 bg=loadImage("images/garden.png")   
tom1Img=loadAnimation("images/cat1.png")
tom2Img=loadAnimation("images/cat2.png","images/cat3.png")
tom3Img=loadAnimation("images/cat4.png")
jerry1Img=loadAnimation("images/mouse1.png")
jerry2Img=loadAnimation("images/mouse2.png","images/mouse3.png")
jerry3Img=loadAnimation("images/mouse4.png")
}



function setup(){
    createCanvas(1000,800);
    tom=createSprite(870,600)
    tom.addAnimation("tom",tom1Img)
    tom.scale=0.2

   jerry=createSprite(600,200)
   jerry.addAnimation("jerry",jerry1Img)
  jerry.scale=0.15
}

function draw() {

    background(bg);
    if (tom.x-jerry.x<(tom.width-jerry.width)/2)
    {
    tom.velocityX=0
    tom.addAnimation("tom3",tom3Img)
    tom.x=300
    tom.scale=0.2
    tom.changeAnimation("tom3")
    jerry.addAnimation("jerry3",jerry3Img)
    jerry.changeAnimation("jerry3")
    jerry.scale=0.15
    }
    drawSprites();
}


function keyPressed()
{
if(keyCode===LEFT_ARROW)
{
tom.velocityX=-5
tom.addAnimation("tomrunning",tom2Img)
tom.changeAnimation("tomrunning")
jerry.addAnimation("jerryteasing",jerry2Img)
jerry.frameDelay=25;
jerry.changeAnimation("jerryteasing");
} 
}

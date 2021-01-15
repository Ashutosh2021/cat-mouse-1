var bg , bgImg ;
var cat , cat1 , cat2,cat3;
var mouse , mouse1, mouse2,mouse3;
function preload() {
    bgImg = loadImage("images/garden.png");
    cat1=loadImage("images/tomOne.png");
    cat2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    cat3=loadImage("images/tomFour.png");
    mouse1=loadImage("images/jerryOne.png");
    mouse2=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    mouse3=loadImage("images/jerryFour.png");
}
   

function setup(){
    createCanvas(600,600);
    bg=createSprite(300,300,20,20);
    bg.addImage("backG",bgImg);
    bg.scale=0.7;
    cat=createSprite(450,450,10,10);
    cat.addImage("img1",cat1);
    cat.scale=0.1;
    mouse=createSprite(100,450,20,20);
    mouse.addImage("m1",mouse1);
    mouse.scale=0.09;
}

function draw() {

    background(255);

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("sitting",cat3);
        cat.changeAnimation("sitting");
        mouse.addAnimation("stop",mouse3);
        mouse.changeAnimation("stop");
      }
    
   
    drawSprites();
}


function keyPressed(){

if(keyCode===LEFT_ARROW){

cat.velocityX=-3;
cat.addAnimation("running",cat2);
cat.changeAnimation("running");
mouse.addAnimation("teasing",mouse2);
mouse.changeAnimation("teasing");


}  
}

function Collision(){

    //abcd
}
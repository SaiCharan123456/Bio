
 
var bg
var play;
var gameState = 0;

function preload(){
  play=loadImage('bio images/play.png');
  saveImg=loadImage('bio images/save.PNG')
  CH1=loadImage('bio images/ch1.png');
  CH2=loadImage('bio images/ch2.png');
}

function setup() {
  createCanvas(1330,620);
 bg=createSprite(displayWidth/2,displayHeight/2-50,50,50);
 //bg.addImage(bg1);
 bg.visible = true;
 playImg=createSprite(displayWidth/2,displayHeight/2+100,50,50);
 playImg.addImage(play);
 playImg.scale=0.3
  form = new Form();
 
  
  playAlone=createSprite(displayWidth/2-250,displayHeight/2-100,50,50);
 // playAlone.addImage(PA);
  playAlone.visible = false;
  playWFrends=createSprite(displayWidth/2+250,displayHeight/2-100,50,50);
  //playWFrends.addImage(PWF);
  playWFrends.visible = false
}
 


function draw() {
  background("black");
   /*play = createButton('play');
   play.position(displayWidth/2,displayHeight/2+100);
   play.style.width = '200px'; // setting the width to 200px
    play.style.height = '200px'; // setting the height to 200px 
    play.style.background = 'teal'; // setting the background color to teal
     play.style.color = 'white'; // setting the color to white
      play.style.fontSize = '20px';
  // play.id='mainButton';
  //play.x=playImg.x;
  //play.y=playImg.y;
  //play.visiable=false;*/

  ///
  /*if(gameState === 0){
    if(character1.visible = true && character2.visible){
    fill("white")
    textSize(30);
    text("Chose your Character",displayWidth/2-170,displayHeight/2-200);
    }*/
  if(mousePressedOver(playImg)) {
    playImg.visible = false;
    ///bg.visible = false;
    bg.x= 700
    bg.y= 100
    
    //form.start();
    this.input = createInput('Entre username');
    this.input.position(650,displayHeight/2);
    save=createSprite(785,490);
    save.addImage(saveImg);
    if(mousePressedOver(save)){        
      gameState = 1;
    }
   }

if(gameState === 1){
  //background("blue");
      fill("white")
      textSize(30);
      text('choose your character',500,200)
      this.input.hide();
      save.destroyEach();
      character1=createSprite(440,400,50,50);
      character1.addImage(CH1);
      character2=createSprite(850,displayHeight/2,50,50);
      character2.addImage(CH2);
  
  if(mousePressedOver(character1)) {    
    gameState = 2;
  }
  if(mousePressedOver(character2)) {
    
    gameState = 3;
    }
}
if(gameState === 2){
  background("blue");

}/*
if(gameState === 3){
  background(map)
  textSize(50)
  fill("white");
  text("be far from imposters and every level has a safe point",displayWidth/2-550,displayHeight/2-200)
  text("complete all task to go to the next level",displayWidth/2-450,displayHeight/2-100)
  text("to complete the game you need to find the treasure",displayWidth/2-550,displayHeight/2)
  text("click on the start button to start the game",displayWidth/2-450,displayHeight/2+100)
  start=createButton('START');
  start.position(displayWidth/2+450,displayHeight/2+200);
  
  start.mousePressed(()=>{
    gameState = 4;
   start.hide();
  })
}
if(gameState === 4){
  background(map1);
  start.hide();
 /* character1.visible = true;
  character2.visible = true;*/

 // gameState = 5;
/*/}
if(gameState === 5){
  background(map2);
  gameState = 6;
}
if(gameState === 6){
  background(map3);
  gameState = 7;
}
if(gameState === 7){
  background(map4);
}*/
  
 
  textSize(20);
  fill("white");
  text(mouseX+","+mouseY,mouseX,mouseY); 
  drawSprites();
}

function hide(){
  this.input.hide();
}
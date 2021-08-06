class Form{
    constructor(){
       
        
    }
start(){
   
    
  
    
    if(mousePressedOver(character1)) {
     character1.x = 30;
     character1.y = 50;
     character1.scale = 0.5;
     character2.visible = false;
     if(gameState = 4 ){
        character2.visible = false;
        character1.visible = true; 
     }
     background("blue");
      gameState = 1;
    }
    if(mousePressedOver(character2)) {
        character2.x = 30;
        character2.y = 50;
        character2.scale = 0.5;
        character1.visible = false;
        background("blue");
        gameState = 1;
       }
}



}
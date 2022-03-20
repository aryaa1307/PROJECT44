var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var gameState="start"
var p=1

function preload(){
bgImg = loadImage("assets/bg.png")
bg2Img= loadImage ("assets/starNight.png")
bg3Img= loadImage ("assets/PLANET.png")
bg4Img= loadImage ("assets/PLANET ISLAND.png")
aImg= loadImage ("assets/ASTRONAUT.png")
bg5Img= loadImage ("assets/HORROR HOUSE .png")
bg6Img= loadImage("assets/BOOK.png")
bg7Img= loadImage("assets/SNAKES AND LADDERS.png")

balloonImg = loadAnimation("assets/ROCKET.png")
}

function setup(){

bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3  
r = createSprite(200,380,20,50);
r.addAnimation("balloon",balloonImg);
r.scale = 0.08;
}

function draw() {
  
  background("black");
if (gameState=="start")
{
  textSize(20);
  fill("white")
  text ("You are an astronaut who loves to explore", 15,110)
  text ("space.So,you decide to go an adventure to",15, 135)
  text("find new planets unaware of what awaits.",15, 160)
  text("for you", 150,185)
  text("Press n to play",120,275)
  bg.visible=false
  r.visible=false
}

if (keyDown("n"))
{
  gameState="play"
}
     if(gameState=="play")   
     { 
      bg.visible=true
      r.visible=true
        //making the hot air balloon jump

          if(keyDown("space") && bg.scale==1.3) {
            r.velocityY=-6;
          }
          console.log(r.y)
         if (r.y<0 && r.velocityY==-6)
         {
         // bg = createSprite(165,485,1,1);
          bg.addImage(bg2Img);
          bg.scale = 1.2
          r.y= 200
          r.velocityY=0
          bg.velocityY=3
         }  
         if (bg.y>1050 && bg.velocityY==3)
         {
            bg.y= 485
         } 

         if (keyDown("up") && bg.scale==1.2)
         {
          bg.addImage(bg3Img)
          bg.scale=0.7
          bg.velocityY=0
          bg.y=200
          bg.x=190  
          r.y= 370
         }
   
        if (keyDown("e") &&  bg.scale==0.7 )
        {
          bg.addImage(bg4Img)
          bg.scale=1
          bg.y=230
          r.y=-140
          r.x= 300
          r.velocityY=3
          r.scale=0.3
        }
       
      if (bg.y==230 && r.y>340)
      {
        r.velocityY=0
        if (keyDown("o"))
        {
          a=createSprite(200,380,20,50)
          a.addImage(aImg)
          a.scale= 0.05
          p=2
        }
        if (keyDown("f"))
        {
          bg.addImage(bg5Img)
          bg.scale=0.5
          a2=createSprite(200,300,20,50)
          a2.addImage(aImg)
          a2.scale= 0.2
          a.destroy()
          r.destroy()
          p=3

        }
      }
      if (keyDown("b") && bg.scale==0.5)
      {
          bg.addImage(bg6Img)
          bg.x= 190
          bg.scale= 0.4
          bg.y= 200
          bg.height=2
          a2.destroy();
          p=4
      }
      if (keyDown("s") && bg.scale==0.4)
      {
        bg.addImage(bg7Img)
        bg. scale= 0.85
        bg.x= 200
      }
    }
   
        drawSprites();
        if (bg.scale==1.3 && gameState=="play" && r.velocityY==0 )
        {
          textSize(20);
          fill("green")
          text ("Press space to launch your rocket.", 50,50)
        }
        if (r.y==200 && r.velocityY==0 && gameState=="play")
        {
          textSize(20);
          fill("yellow")
          text ("You have been travelling for 6 months now.", 10,50)
          text("Press up arrow key to see what you ",40,100)
          text("discover.",160,125)
        }
        if (bg.scale==0.7 && gameState=="play")
        {
          textSize(20);
          fill("lightblue")
          text ("Press e to land on this mysterious planet", 20,50)
        }
    
        if (bg.scale==1 && r.velocityY==0 && gameState=="play"&& p==1)
        {
          textSize(20);
          fill("red")
          text ("Press o to start your venture ", 70,50)
        }

        if (p==2 && gameState=="play")
        {
          textSize(20);
          fill("red")
          text ("As you look around, You now decide to", 25,50)
          text ("go to the cottage next to you. Press f ",25,75)
          text ("to continue",130,100)
        }
      
        if (p==3 && gameState=="play")
        {
          textSize(20);
          fill("brown")
          text ("You find the cottage empty so you", 35,50)
          text("decide to read the book next to you in", 25,75)
          text(" order to find out more about the place", 20,100)
          text ("Press b to continue",100,200)
        }
}
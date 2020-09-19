var car1, car2, car3, car4;

var speed1, speed2, speed3, speed4;

var weight1, weight2, weight3, weight4;

var wall1, wall2, wall3, wall4;

var line1, line2, line3, line4, line5;

function setup(){
  createCanvas(1500, 700);
  
  speed1 = random(55, 90);
  speed2 = random(55, 90);
  speed3 = random(55, 90);
  speed4 = random(55, 90);

  weight1 = random(400, 1500); 
  weight2 = random(400, 1500);
  weight3 = random(400, 1500);
  weight4 = random(400, 1500);

  car1 = createSprite(50, 200, 50, 10);
  car2 = createSprite(50, 300, 50, 10);
  car3 = createSprite(50, 400, 50, 10);
  car4 = createSprite(50, 500, 50, 10);

  line1 = createSprite(750, 250, 1500, 5);
  line2 = createSprite(750, 350, 1500, 5);
  line3 = createSprite(750, 450, 1500, 5);
  line4 = createSprite(750, 550, 1500, 5);
  line5 = createSprite(750, 150, 1500, 5);

  wall1 = createSprite(1300, 200, 10, 50);
  wall2 = createSprite(1300, 300, 10, 50);
  wall3 = createSprite(1300, 400, 10, 50);
  wall4 = createSprite(1300, 500, 10, 50);
  
}

function draw(){

  background(0, 0, 169);
  
  car1.velocityX = 8;
  car2.velocityX = 8;
  car3.velocityX = 8;
  car4.velocityX = 8;

  car1Deformation();
  car2Deformation();
  car3Deformation();
  car4Deformation();

  drawSprites();
}

function car1Deformation(){

 if(wall1.x - car1.x < car1.width/2 + wall1.width/2){
    
  var deformation1 = (0.5*weight1*speed1*speed1)/22500;
  car1.velocityX = 0;

  if(deformation1 > 180){
    car1.shapeColor = "red";
  }

  if(deformation1 < 180 && deformation1 > 100){
    car1.shapeColor = "yellow";
  }

  if(deformation1 < 100){
    car1.shapeColor = "green";
  }

 }

}

function car2Deformation(){

  if(wall2.x - car2.x < car2.width/2 + wall2.width/2){
     
   var deformation2 = (0.5*weight2*speed2*speed2)/22500;
   car2.velocityX = 0;
 
   if(deformation2 > 180){
     car2.shapeColor = "red";
   }
 
   if(deformation2 < 180 && deformation2 > 100){
     car2.shapeColor = "yellow";
   }
 
   if(deformation2 < 100){
     car2.shapeColor = "green";
   }
 
  }
 
 }

 function car3Deformation(){

  if(wall3.x - car3.x < car3.width/2 + wall3.width/2){
     
   var deformation3 = (0.5*weight3*speed3*speed3)/22500;
   car3.velocityX = 0;
 
   if(deformation3 > 180){
     car3.shapeColor = "red";
   }
 
   if(deformation3 < 180 && deformation3 > 100){
     car3.shapeColor = "yellow";
   }
 
   if(deformation3 < 100){
     car3.shapeColor = "green";
   }
 
  }
 
 }

 function car4Deformation(){

  if(wall4.x - car4.x < car4.width/2 + wall4.width/2){
     
   var deformation4 = (0.5*weight4*speed4*speed4)/22500;
   car4.velocityX = 0;
 
   if(deformation4 > 180){
     car4.shapeColor = "red";
   }
 
   if(deformation4 < 180 && deformation4 > 100){
     car4.shapeColor = "yellow";
   }
 
   if(deformation4 < 100){
     car4.shapeColor = "green";
   }
 
  }
 
 }
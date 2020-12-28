var car, wall, weight;
var wall1,wall2,wall3;
function setup() {
  createCanvas(400,400);
  speed = random(55,90);
  weight = random(400,1500);
   var line=createSprite(200,100,400,4);
  var line1=createSprite(200,300,400,4);
  var line2=createSprite(200,200,400,4);
  car = createSprite(10, 32, 12, 12);
  car.velocityX=speed;
  car.shapeColor = "pink";
  car1 = createSprite(340,140,12,12);
  car1.shapeColor = "yellow";
  car2=createSprite(340,250,12,12);
  car2.shapeColor="red";
  car3=createSprite(340,335,12,12);
  car3.shapeColor="green";
  wall=createSprite(369,46,10,50);
  wall.shapeColor="white";
  wall1=createSprite(369,142,10,50);
  wall1.shapeColor="white";
  wall2=createSprite(369,242,10,50);
  wall2.shapeColor="white";
  wall3=createSprite(369,342,10,50);
  wall3.shapeColor="white"
         }
         if(wall.x - car.x < (car.width + wall.width)/2){
            car.velocityX = 0;
      
          var deformation = (0.5 * wieght * speed * speed)/22500;
          if(deformation < 80){
            car.shapeColor = "green";
          }
          if(deformation > 80 && deformation < 180){
            car.shapeColor = color(230,230,0);
          }
          if(deformation > 180){
         car.shapeColor ="red";
           }
         }
    function draw() {
    background("black"); 
    drawSprites();
     }
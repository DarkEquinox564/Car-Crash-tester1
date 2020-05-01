var car,wall,invisiblewall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1200,200,60,height/2);
  invisiblewall = createSprite(1500,200,60,height/2);
  invisiblewall.visible = false;

  speed = random(55, 90);
  weight = random(400,1500);

  car.velocityX = speed;
  
}

function draw() {
  background(255,255,255);  
  car.collide(invisiblewall);
  
  if(car.x - wall.x < car.width/2 + wall.width/2 && wall.x - car.x < car.width/2 + wall.width/2){
    deformation = (0.5 * weight * speed * speed) / 22500
  }
  if (deformation < 100){
    car.shapeColor = 'green';

  }  
  if (deformation >= 100 && deformation  < 180){
    car.shapeColor = 'yellow';
  }
  if (deformation > 180){
    car.shapeColor = 'red';
  }


  drawSprites();
}
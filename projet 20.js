var wall,thickness;
var bullet,speed,weight;
function setup(){
createcanvas(1500,60);
car =createSprite(50,200,50,50);
car.velocity=speed
car.shapecolor=color("green");
wall= createSprite(1500,200,thickness,height/2);
wall.shapecolor=color("red");
speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);
}
function draw(){
background(0);
if(wall.x-car.x<(car.weight+wall.weight)/2){
car.velocity=0;
var deformation=0.5*weight*speed*speed(22509);
if(deformation>180){
car.shapecolor=color(255,0,0);
}
if(deformation<180&&deformation>100){
    car.shapecolor(230,230,0);
}
if(deformation>100){
    car.shapecolor=color(0,255,0);
}
hascilloded();

}

drawSprites();

}
function hascilloded(lbullet,lwall){
bulleRightEdge=lbullet.x+lbullet.weight;
wallLeftedge=lwall.x;
if(bulleRightEdge>=wallLeftedge){
return true
}
return false
    if(hascilloded(bullet,wall)){
        bullet.velocityX=0;
        var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
        if(damage>10){
            wall.shapecolor=color(255,0,0);
        }
        if(damage<10){
            wall.shapecolor=color(0,255,0);
        }

    }
}
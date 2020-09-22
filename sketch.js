const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
umbrella = createSprite(body.pos.x, body.pos.y);
}
 
function draw() {
    var maxDrops=100;
    for(var i=0; 1<maxDrops; i++){
        drops.push(new createDrop(random(0,400),random(0,400)));
    }

    if(this.rain.position.y>height){
        Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
    }
drawSprites();

umbrella.display();
drops.display();

}
    
  






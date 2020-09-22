class Umbrella{
   constructor(x,y,radius) {
       var options = {
           'friction':0.1,
       }
       this.body = Bodies.ellipse(x,y,radius,options);
       this.radius = radius;

       World.add(world,this.body);
   }
   setup() {
      boyUmbrella = loadImage("umbrellaBoy.png");
   }
   display(){
       var pos = this.body.position;
       var angle = this.body.angle;

       image.add(umbrellaBoy,boyUmbrella);

       push();
       ellipseMode(CENTER);
       ellipse(0,0,this.radius);
       pop();

   }
}
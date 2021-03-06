class Paper{
    constructor(x,y,RADIUS) {
        var options ={
          isStatic : false,    
          restitution : 0.3,
          friction : 0.5,
          density : 1.2
        }
        this.body = Bodies.circle(x,y,RADIUS,options);
        this.radius = RADIUS;

        World.add(world,this.body);

        this.image = loadImage("paper.png");
      }
        display()         
        {
          var pos = this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x,pos.y);
          rotate(angle);
          rectMode(CENTER);
          image(this.image,0,0,this.width,this.height);
          fill("red");
          pop();
        }
    }

class Ball {
    constructor(x,y,r) {
        var options = {
            isStatic: false,
            frictionAir: 0.01,
            density: 2.0
        }
        this.body = Bodies.circle(x,y,r/2,options);
        this.r = r;
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        stroke("green");
        ellipseMode(CENTER);
        ellipse(0,0,this.r);
        pop();
    }
}
class Box {
    constructor(x,y,w,h) {
        var options = { 
            restitution: 0.1,
            friction: 1.0,
            density: 0.001,
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.h = h;
        this.w = w;
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
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}
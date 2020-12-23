class Rope {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.09,
            length:300
        }
        this.rope = Constraint.create(options);
        this.bodyA = bodyA;
        this.pointB = pointB;
        World.add(world,this.rope);
    }
    display() {
        push();
        stroke("white");
        strokeWeight(7);
        line(this.pointB.x,this.pointB.y,this.rope.bodyA.position.x,this.rope.bodyA.position.y);
        pop();
    }
}
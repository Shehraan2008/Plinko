class Plinko {
  constructor(x, y, r) {
    var options = {
      isStatic: true,
      restitution: 1,
      friction: 0,
    };
    this.body = Bodies.circle(x, y, r, options);
    this.body.label = "plinko";
    World.add(world, this.body);
    this.r = r;
  }
  show() {
    let pos = this.body.position;
    noStroke();
    fill(0, 204, 255);
    push();
    translate(pos.x, pos.y);
    ellipse(0, 0, this.r * 2);
    pop();
  }
}

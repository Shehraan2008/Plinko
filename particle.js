class Particle {
  constructor(x, y, r) {
    var options = {
      restitution: 0.5,
      friction: 0,
      density: 1,
    };
    x += Math.random(-1, 10);
    this.body = Bodies.circle(x, y, r, options);
    this.body.label = "particle";
    World.add(world, this.body);
    this.r = r;
  }

  isOffScreen() {
    var x = this.body.position.x;
    var y = this.body.position.y;
    return x < -50 || x > width + 50;
  }

  show() {
    let pos = this.body.position;
    noStroke();
    fill("yellow");
    push();
    translate(pos.x, pos.y);
    ellipse(0, 0, this.r * 2);
    pop();
  }
}

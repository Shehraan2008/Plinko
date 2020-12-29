// Making the alias for moduels
const { Engine, World, Bodies, Body, Events } = Matter;

// The Engine and World.
let engine, world;
// The particles, Plinkos and boundaries
let particles = [];
let plinkos = [];
let bounds = [];
//Rows and Colums
let cols = 11;
let rows = 10;
// The Bodies
let p, pl, b;

function setup() {
  createCanvas(600, 800);

  // Making a Enfine and World
  engine = Engine.create();
  world = engine.world;

  // Collision Event
  function collision(event) {
    let pairs = event.pairs;
    for (let i = 0; i < pairs.length; i++) {
      let labelA = pairs[i].bodyA;
      let lableB = pairs[i].bodyB;

      if (labelA === "particle" && labelB === "plinko") {
        // Do something
      }
      if (labelA === "plinko" && labelB === "particle") {
        // DO the thing above
      }
    }
  }
  Events.on(engine, "collisionStart", collision);

  // The Bodies
  newParticle(); // peg
  // Plinkos
  let spacing = width / cols;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = spacing / 2 + i * spacing;
      if (j % 2 === 1) {
        x += spacing / 2;
      }
      let y = spacing + j * spacing;
      let pl = new Plinko(x, y, 4);
      plinkos.push(pl);
    }
  }

  // Boundries
  let b = new Boundary(width / 2, height + 50, width, 100);
  bounds.push(b);
  for (let i = 0; i < cols + 1; i++) {
    var x = i * spacing;
    var h = 100;
    var w = 10;
    var y = height - h / 2;
    let b = new Boundary(x, y, w, h);
    bounds.push(b);
  }

  // Runnign the engine
  Engine.run(engine, 1000 / 60);
}

function draw() {
  background(255, 105, 180);

  // Some Annotations
  fill("white");
  textStyle(BOLD);
  textSize(104);
  text("PL!NKO!", 100, 400);

  // Spawning a plinko every 40 frames
  if (frameCount % 20 === 0) {
    newParticle();
  }

  // Pegs
  for (let i = 0; i < particles.length; i++) {
    particles[i].show();
    if (particles[i].isOffScreen()) {
      World.remove(world, particles[i].body);
      particles.splice(i, 1);
      i--;
    }
  }
  // Plinko
  for (let i = 0; i < plinkos.length; i++) {
    plinkos[i].show();
  }
  for (let i = 0; i < bounds.length; i++) {
    bounds[i].show();
  }
}

// Create a plinkos
function newParticle() {
  var p = new Particle(300, 0, 10);
  particles.push(p);
}

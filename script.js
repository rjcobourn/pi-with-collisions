const width = 800;
const height = 600;
let digits = 4;
let timeSteps = Math.pow(10, digits+1);
let m1 = 10;
let m2 = Math.pow(100, digits)*10;
let x1 = 100;
let x2 = 400;
let v1 = 0;
let v2 = -10/timeSteps;
let w1 = Math.log10(m1)*15;
let w2 = Math.log10(m2)*15;
let count = 0;
var clack;

function preload() {
  clack = loadSound("https://cdn.glitch.com/90674e42-dbc8-4f13-83af-5d0ee7baae82%2Fclack.ogg")
}
function setup() {
  createCanvas(width, height);
}

function draw() {
  background(50);
  fill(0, 200, 50);
  noStroke();
  textSize(50);
  text(count, 20, 80);
  rect(x1, height-w1, w1, w1);
  rect(x2, height-w2, w2, w2);

  for (let i = 1; i < timeSteps; i++) {
    //collision with wall
    if (x1 < 0) {
      x1 = 0
      //clack.play();
      count++;
      v1 = -v1;
    }

    //collision between blocks
    if (x1+w1 >= x2) {
      //clack.play();
      count++;
      //set previous velocity
      let u1 = v1;
      let u2 = v2;
      v1 = (u1*(m1-m2)/(m1+m2))+(u2*2*m2/(m1+m2));
      v2 = (u1*2*m1)/(m1+m2)+(u2*(m2-m1)/(m1+m2));
    }
    
    x1 += v1*(deltaTime/60);
    x2 += v2*(deltaTime/60);
  }
  
}
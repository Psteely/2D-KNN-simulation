let Spots = [];

function setup() {
  canvas = createCanvas(1000, 800);
  canvas.parent('canvas');


}

function draw() {
  background(0);
  for (const s of Spots) {
    s.show();
  }

  for (const s of Spots) {
    s.showLine();
  }
  // Calculate neighbors


}

function keyPressed() {
  console.log(key);
  if (key == 'r' || key == 'g' || key == 'b' || key == 'p') {
    Spots.push(new Spot(mouseX, mouseY, key));
  }

}
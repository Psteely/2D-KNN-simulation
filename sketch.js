let Spots = [];
let SpotsK = [];
let counts = [0, 0, 0, 0, ];
let K = 5;

function setup() {
  canvas = createCanvas(1000, 800);
  canvas.parent('canvas');
  


}

function draw() {
  background(0);

  let coverageI = document.getElementById("coverage");
  // console.log(coverageI.checked);
  
  for (const s of Spots) {
    s.show();
    s.calcDistance(mouseX,mouseY);
  }
  const cloneSpots = [...Spots];
  SpotsK = cloneSpots.sort(shortestKs);
  SpotsK.splice(K);

  let hc = highestColour();
  //console.log(hc);


  for (const s of SpotsK) {
    s.showLine(hc);
  }
  
}

function keyPressed() {
  if (key == 'r' || key == 'g' || key == 'b' || key == 'p') {
    Spots.push(new Spot(mouseX, mouseY, key));
  }
  if (key == 't') {
    console.table(SpotsK);
  }
  if (key == 'c') {
    console.table(counts);
  }

}

function highestColour() {
  counts = [0, 0, 0, 0];
  for (let i = 0; i < SpotsK.length; i++) {
    if (SpotsK[i].colour == 'r') {
      counts[0]++;
    }
    if (SpotsK[i].colour == 'g') {
      counts[1]++;
    }
    if (SpotsK[i].colour == 'b') {
      counts[2]++;
    }
    if (SpotsK[i].colour == 'p') {
      counts[3]++;
    }
  }
  let highest = -Infinity;
  let index = Infinity;
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] >highest) {
      highest = counts[i];
      index = i;
    }
  }
   //console.log(highest,index);
   if (highest <= K/2) {
    return 'w';
  } else return index;
  // if (highest === 0) { return 'r';}
  // if (highest === 1) { return 'g';}
  // if (highest === 2) { return 'b';}
  // if (highest === 3) { return 'p';}
  
  
}

function shortestKs(a, b) {
  const A = a.distance;
  const B = b.distance;
  let comparison = 0;
  if (A > B) {
    comparison = 1;
  } else if (A < B) {
    comparison = -1;
  }
  return comparison;
}
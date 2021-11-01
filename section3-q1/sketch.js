// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200,200);
  count = 0;
  cycle = 200;
}

function draw(){
  background(160, 192, 255);
  if(keyIsDown(LEFT_ARROW)){count = (count + 3) % cycle;}
    if(keyIsDown(RIGHT_ARROW)){count = (count + 2) % cycle;}
  else{count = (count + 1) % cycle;}
  // BLANK[1]
  if(count<100){size=count;}
  else{size=200-count;}
  ellipse(width / 2, height / 2, size);
}

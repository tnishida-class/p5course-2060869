// 小手調べ
function setup(){
  createCanvas(200,200);
  for(let i = 0; i < 10; i++){
  if(i<5){  // BLANK[1]
    noFill();
    stroke(0,0,255);
    ellipse(100,100,i*10+20);
  }
  else{
    noFill();
    stroke(255,0,0);
    ellipse(100,100,i*10+20);
  }
}
}

// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if((i+j)%2==0){
       fill(255);
       rect(i*size,j*size,size,size);
     }
      else{
        fill(77);
        rect(i*size,j*size,size,size);

      if(j<3){
        fill(255,0,0);
        ellipse(size/2+size*i,size*j+size/2,20);
    }
    else if(j>4){
        fill(0);
        ellipse(size/2+size*i,size*j+size/2,20);
    }
  }


  }
}
}

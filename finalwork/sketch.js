// 最終課題を制作しよう
let x=255;
let y=255;
let z=255;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  textSize(32);
  fill(0);
  noStroke();
  text('和声に挑戦しよう！',10 ,40 );
  textSize(25);
  fill(0);
  text('基礎知識',30,80);
  textSize(20);
  fill(0);
  text('・４声体とは：ソプラノ、アルト、テノール、バスの４種の声部から成り立つ合唱形態である。',40,110);
    fill(0);
      text('・その中でも、ソプラノとバスのことを外声、アルトとテノールのことを内声と呼びます。',40,140);
    textSize(25);
    text('禁則',30,170);
    textSize(20);
    fill(0);
    text('・旋律線を作るにあたって避けるべき音程：長・短７度、増音程、複音程',40,200);
    text('・響きを作るにあたって避けるべき音程：連続８度、連続１度、連続５度',40,230);
    text('注：後続和音が減５度の場合は使ってもOK',90,260);
    text('・響きに違和感を作ってしまう進行：並達８度、並達５度、並達１度',40,290);
    text('注：並達８，５度は外声間かつソプラノが跳躍進行の時のみ禁止',90,320);
    text('注：並達１度はテノールとバスの時のみ許される',90,350);
    textSize(25);
    fill(0);
    text('問題',30,390);
    textSize(20);
    fill(0);
    text('次の中で、許されるものを選びなさい。',40,420);
    text('A：長７度',40,445);
    text('B：長２度',40,470);
    text('C：完全５度',40,495);
    text('D：増４度',40,520);
    text('E：連続７度',40,545);
    text('F：連続５度',40,570);
    text('G：連続８度',40,595);
    text('H：連続３度',40,620);
    text('I：ソプラノとアルトで並達５度',40,645);
    text('J：ソプラノとテノールで並達１度',40,670);
    text('K：ソプラノとバスで並達８度（ソプラノが跳躍進行の場合）',40,695);
    text('L：アルトとバスで並達６度',40,720);
    text('答えだと思うキー（大文字）を押してください。',730,450);
    text('キーを押している間、正解なら〇、不正解なら×が表示されます。',680,480);
    noStroke();
    fill(255)
    rect(800,500,200,200);
    stroke(x);
    strokeWeight(6);
    ellipse(900,600,125,125);
    stroke(y,z,255);
    line(920,580,880,620);
    line(920,620,880,580);
}

function keyPressed(){
  if(key == "A"){x=255;y=0;z=0;}
  else if(key == "B"){x=0;y=255;z=255;}
  else if(key == "C"){x=0;y=255;z=255;}
  else if(key == "D"){x=255;y=0;z=0;}
  else if(key == "E"){x=0;y=255;z=255;}
  else if(key == "F"){x=255;y=0;z=0;}
  else if(key == "G"){x=255;y=0;z=0;}
  else if(key == "H"){x=0;y=255;z=255;}
  else if(key == "I"){x=0;y=255;z=255;}
  else if(key == "J"){x=255;y=0;z=0;}
  else if(key == "K"){x=255;y=0;z=0;}
  else if(key == "L"){x=0;y=255;z=255;}
}
function keyReleased() {
  if (x === 0) {
    x = 255;
  } else {
    y = z =  255;
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

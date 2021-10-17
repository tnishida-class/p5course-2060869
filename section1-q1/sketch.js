// 練習問題：神戸市のマーク
function setup(){
  createCanvas(600, 200);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(100-25, 100, 100, 100, QUARTER_PI+ PI,QUARTER_PI);
  // BLANK[1]

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);

noFill();
stroke(14,47,146);
strokeWeight(25);
ellipse(400,100,150,150);

noFill();
stroke(22,131,46);
strokeWeight(25);
ellipse(395,95,135,135);

noFill();
stroke(255,255,255);
strokeWeight(25);
ellipse(395,105,115,115);

}

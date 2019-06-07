let value = [
   [0,0,0],
   [0,0,0],
   [0,0,0]
];

let count;
let step=0;
var check1=0,check2=0,check3=0;

let button1,button3,button4;
let started1 = false;

let centreX = [50,150,250];
let centreY = [50,150,250];

function setup() {
  createCanvas(400, 400);
  menu();
}

function menu() {
  background(205);
  textSize(40);
  fill(0);
  text('COINS FLIP',90 ,130);
  button1 = createButton('Start');
  button3 = createButton('Help');
  button1.size(60, 30);
  button3.size(60, 30);
  button1.position(170, 190);
  button3.position(170, 230);
  button1.mousePressed(start1);
  button3.mousePressed(start3);
  step--;
  if (button4) button4.hide();
}

function start1() {
  button1.hide();
  button3.hide();
  started1 = true;
}

function start3() {
  button1.hide();
  button3.hide();
  textSize(15);
  text(' Mỗi thẻ có hai mặt đen, trắng. Với mỗi lượt đi, bạn sẽ lật\n một thẻ cùng các thẻ xung quanh nó. Bạn thắng khi tất\n cả các thẻ cùng chuyển màu đen trước khi hết 3 lượt.\n Sau khi thua, click để xem lại map. Double click để chơi \n lại\n:',30,200);
  button4 = createButton('Back');
  button4.position(50, 300);
  button4.mousePressed(menu);
  step--;
}

function change(i,j){
  if(value[i][j] == 255){
    value[i][j] = 0;
  }else{
    value[i][j] = 255;
  }
}

function doubleClicked() {
  ran();
  step=0;
  check1=0,check2=0,check3=0;
}

function ktra1(){
  count = 0;
  for(var i=0; i<3; i++){
    for(var j=0; j<3; j++){
      if(value[i][j] == 0){
        count++;
      }
    }
  }
  if(count == 9){
    background(255, 255, 255);
    textSize(40);
    fill(random(0,255),random(0,255),random(0,255));
    textAlign(CENTER);
    textSize(20);
    textAlign(CENTER);
    text('YOU WIN',150,150);
    text('DOUBLE CLICK to restart',150,200);
    if(keyIsPressed){
      ran();
      step=0;
      check1=0,check2=0,check3=0;
    }
  }
  if(count != 9 && step == 3){
    background(255, 255, 255);
    textSize(40);
    fill(0);
    textAlign(CENTER);
    text('YOU LOSE',150,150);
    textSize(20);
    textAlign(CENTER);
    text('DOUBLE CLICK to restart',150,200);
    if(keyIsPressed){
      ran();
      step=0;
      check1=0,check2=0,check3=0;
    }
  }
}

function mouseClicked() {
  step++;
  for(var i=0; i<3; i++){
    for(var j=0; j<3; j++){
      if(centreX[i]-35<=mouseX && mouseX<=centreX[i]+35 && centreY[j]-35<=mouseY && mouseY<=centreY[j]+35){
        change(i,j);
        if(i == 1){
          change(i+1,j);
          change(i-1,j);
        }
        if(i == 0){
          change(i+1,j);
        }
        if(i == 2){
          change(i-1,j);
        }
        if(j == 1){
          change(i,j-1);
          change(i,j+1);
        }
        if(j == 0){
          change(i,j+1);
        }
        if(j == 2){
          change(i,j-1);
        }
      }
    }
  }
}

function ran() {
  if(check1==0) {
    var x1 = Math.floor(Math.random() * Math.floor(3));
    var y1 = Math.floor(Math.random() * Math.floor(3));
    if(value[x1][y1] == 0) {
    
    value[x1][y1] = 255;
    
    if(0 <= x1 - 1) value[x1 - 1][y1] = 255 - value[x1 - 1][y1];
    if(0 <= y1 - 1) value[x1][y1 - 1] = 255 - value[x1][y1 - 1];
    if(x1 + 1 <= 2) value[x1 + 1][y1] = 255 - value[x1 + 1][y1];
    if(y1 + 1 <= 2) value[x1][y1 + 1] = 255 - value[x1][y1 + 1];
  }
  
  else {
    value[x1][y1] = 0;
    if(0 <= x1 - 1) value[x1 - 1][y1] = 255 - value[x1 - 1][y1];
    if(0 <= y1 - 1) value[x1][y1 - 1] = 255 - value[x1][y1 - 1];
    if(x1 + 1 <= 2) value[x1 + 1][y1] = 255 - value[x1 + 1][y1];
    if(y1 + 1 <= 2) value[x1][y1 + 1] = 255 - value[x1][y1 + 1];
  }
  }
  check1=1;

  if(check2==0) {
    
    var x2 = Math.floor(Math.random() * Math.floor(3));
    var y2 = Math.floor(Math.random() * Math.floor(3));
    if(value[x2][y2] == 0) {
    
    value[x2][y2] = 255;
    
    if(0 <= x2 - 1) value[x2 - 1][y2] = 255 - value[x2 - 1][y2];
    if(0 <= y2 - 1) value[x2][y2 - 1] = 255 - value[x2][y2 - 1];
    if(x2 + 1 <= 2) value[x2 + 1][y2] = 255 - value[x2 + 1][y2];
    if(y2 + 1 <= 2) value[x2][y2 + 1] = 255 - value[x2][y2 + 1];
    }
  
    else {
    value[x2][y2] = 0;
    if(0 <= x2 - 1) value[x2 - 1][y2] = 255 - value[x2 - 1][y2];
    if(0 <= y2 - 1) value[x2][y2 - 1] = 255 - value[x2][y2 - 1];
    if(x2 + 1 <= 2) value[x2 + 1][y2] = 255 - value[x2 + 1][y2];
    if(y2 + 1 <= 2) value[x2][y2 + 1] = 255 - value[x2][y2 + 1];
    }
  }
  check2=1;
  
  if(check3==0) {
    
    var x3 = Math.floor(Math.random() * Math.floor(3));
    var y3 = Math.floor(Math.random() * Math.floor(3));
    if(value[x3][y3] == 0) {
    
      value[x3][y3] = 255;
    
      if(0 <= x3 - 1) value[x3 - 1][y3] = 255 - value[x3 - 1][y3];
      if(0 <= y3 - 1) value[x3][y3 - 1] = 255 - value[x3][y3 - 1];
      if(x3 + 1 <= 2) value[x3 + 1][y3] = 255 - value[x3 + 1][y3];
      if(y3 + 1 <= 2) value[x3][y3 + 1] = 255 - value[x3][y3 + 1];
    }
    else {
      value[x3][y3] = 0;
    
      if(0 <= x3 - 1) value[x3 - 1][y3] = 255 - value[x3 - 1][y3];
      if(0 <= y3 - 1) value[x3][y3 - 1] = 255 - value[x3][y3 - 1];
      if(x3 + 1 <= 2) value[x3 + 1][y3] = 255 - value[x3 + 1][y3];
      if(y3 + 1 <= 2) value[x3][y3 + 1] = 255 - value[x3][y3 + 1];
    }
  }
  check3=1;
}

function draw(){
  if(started1){  
    background(220);
    strokeWeight(2.0);
    line(0,0,300,0);
    strokeWeight(2.0);
    line(0,100,300,100);
    line(0,200,300,200);
    strokeWeight(2.0);
    line(0,300,300,300);
    line(0,0,0,300);
    strokeWeight(2.0);
    line(100,0,100,300);
    line(200,0,200,300);
    strokeWeight(2.0);
    line(300,0,300,300);
    ran();
    strokeWeight(2.0);
    fill(value[0][0]);
    circle(50,50,75);
    noFill();
    fill(value[0][1]);
    circle(50,150,75);
    noFill();
    fill(value[0][2]);
    circle(50,250,75);
    noFill();
    fill(value[1][0]);
    circle(150,50,75);
    noFill();
    fill(value[1][1]);
    circle(150,150,75);
    noFill();
    fill(value[1][2]);
    circle(150,250,75);
    noFill();
    fill(value[2][0]);
    circle(250,50,75);
    noFill();
    fill(value[2][1]);
    circle(250,150,75);
    noFill();
    fill(value[2][2]);
    circle(250,250,75);
    noFill();
    ktra1();
    if(step == 4){
      background(255, 255, 255);
      textSize(40);
      fill(0);
      textAlign(CENTER);
      text('YOU LOSE',150,150);
      textSize(20);
      textAlign(CENTER);
      text('DOUBLE CLICK to restart',150,200);
      if(keyIsPressed){
        ran();
        step=0;
        check1=0,check2=0,check3=0;
      }
    } 
  }
}


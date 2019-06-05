let value = [
   [0,0,0],
   [0,0,0],
   [0,0,0]
];

let step = 0;
var check1=0,check2=0,check3=0;


let centreX = [50,150,250];
let centreY = [50,150,250];

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(220);
  
  strokeWeight(20.0);
  line(0,0,300,0);
  strokeWeight(10.0);
  line(0,100,300,100);
  line(0,200,300,200);
  strokeWeight(20.0);
  line(0,300,300,300);
  line(0,0,0,300);
  strokeWeight(10.0);
  line(100,0,100,300);
  line(200,0,200,300);
  strokeWeight(20.0);
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
  check();
  if(step == 4){
    background(255, 255, 255);
    textSize(40);
    fill(0);
    textAlign(CENTER);
    text('YOU LOSE',150,150);
  }
    
}

function change(i,j){
  if(value[i][j] == 255){
    value[i][j] = 0;
  }else{
    value[i][j] = 255;
  }
}

function check(){
  let count = 0;
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
    fill(0);
    textAlign(CENTER);
    text('YOU WIN',150,150);
  }
  if(count != 9 && step == 3){
    background(255, 255, 255);
    textSize(40);
    fill(0);
    textAlign(CENTER);
    text('YOU LOSE',150,150);
  }
}

function mousePressed() {
  step++;
  for(var i=0; i<3; i++){
    for(var j=0; j<3; j++){
      if(centreX[i]-38<=mouseX && mouseX<=centreX[i]+38 && centreY[j]-38<=mouseY && mouseY<=centreY[j]+38){
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
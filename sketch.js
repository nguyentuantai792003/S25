let value = [
   [0,0,0],
   [0,0,0],
   [0,0,0]
];

let count;
let step=0;
var check1=0,check2=0,check3=0;

let button1,button3,button4,button2;
let started1 = false;

let centreX = [75,225,375];
let centreY = [75,225,375];

function setup() {
    menu();
}

function menu() {
    createCanvas(450, 450);
    background(215);
    textSize(40);
    started1 = false;
    fill('brown');
    textAlign(CENTER);
    text('COINS FLIP',230 ,130);
    button1 = createButton('Start');
    button3 = createButton('Help');
    button1.size(60, 30);
    button3.size(60, 30);
    button1.position(190, 140);
    button3.position(190, 170);
    button1.style('color', 'red');
    button3.style('color', 'blue');
    button1.mousePressed(start1);
    button3.mousePressed(start3);
    step=0;
    if (button4) button4.hide();
}

function start1() {
    button1.hide();
    button3.hide();
    started1 = true;
    step = 0;
}

function start3() {
    button1.hide();
    button3.hide();
    textSize(15);
    text(' Mỗi thẻ có hai mặt đen, trắng. Với mỗi lượt đi, bạn sẽ lật\n một thẻ cùng các thẻ xung quanh nó. Bạn thắng khi tất\n cả các thẻ cùng chuyển màu đen trước khi hết 3 lượt.\n Sau khi thua, click để xem lại map. Double click để chơi \n lại\n',200,200);
    button4 = createButton('Back');
    button4.position(50, 300);
    button4.mousePressed(menu);
    step = 0;
}

function change(i,j) {
    value[i][j] = 255 - value[i][j];
}

function ktra1(){
    count = 0;
    for(var i=0; i<3; i++) {
        for(var j=0; j<3; j++) {
            if(value[i][j] == 0) {
                count++;
            }
        }
    }
    if(count == 9) {
        background(255, 255, 255);
        textSize(20);
        fill(0);
        textAlign(CENTER);
        if(button2) button2.hide();
        text('                   YOU WIN',150,150);
        text('                   Click R to restart',150,200);
        started1 = false;
    }
}
function mouseClicked() {
    for(var i=0 ; i < 3 ; i++){
        for(var j = 0 ; j < 3 ; j++){
            if(centreX[i] - 45 <= mouseX && mouseX <= centreX[i] + 45) {
                if(centreY[j] - 45 <= mouseY && mouseY <= centreY[j] + 45) {
                    change(i , j);
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
                    step++;
                }
            }
        }
    }
}

function ran() {
    if(check1==0) {
        
        var x1 = Math.floor(Math.random() * Math.floor(3));
        var y1 = Math.floor(Math.random() * Math.floor(3));
        
        value[x1][y1] = 255 - value[x1][y1];
        if(0 <= x1 - 1) value[x1 - 1][y1] = 255 - value[x1 - 1][y1];
        if(0 <= y1 - 1) value[x1][y1 - 1] = 255 - value[x1][y1 - 1];
        if(x1 + 1 <= 2) value[x1 + 1][y1] = 255 - value[x1 + 1][y1];
        if(y1 + 1 <= 2) value[x1][y1 + 1] = 255 - value[x1][y1 + 1];
        check1 = 1;
    }

    if(check2==0) {
        
        var x2 = Math.floor(Math.random() * Math.floor(3));
        var y2 = Math.floor(Math.random() * Math.floor(3));
        
        value[x2][y2] = 255 - value[x2][y2];
        if(0 <= x2 - 1) value[x2 - 1][y2] = 255 - value[x2 - 1][y2];
        if(0 <= y2 - 1) value[x2][y2 - 1] = 255 - value[x2][y2 - 1];
        if(x2 + 1 <= 2) value[x2 + 1][y2] = 255 - value[x2 + 1][y2];
        if(y2 + 1 <= 2) value[x2][y2 + 1] = 255 - value[x2][y2 + 1];
        check2 = 1;
    }
    
    if(check3 == 0) {
        
        var x3 = Math.floor(Math.random() * Math.floor(3));
        var y3 = Math.floor(Math.random() * Math.floor(3));
        
        value[x3][y3] = 255 - value[x3][y3];
        if(0 <= x3 - 1) value[x3 - 1][y3] = 255 - value[x3 - 1][y3];
        if(0 <= y3 - 1) value[x3][y3 - 1] = 255 - value[x3][y3 - 1];
        if(x3 + 1 <= 2) value[x3 + 1][y3] = 255 - value[x3 + 1][y3];
        if(y3 + 1 <= 2) value[x3][y3 + 1] = 255 - value[x3][y3 + 1];
        
        check3 = 1;
    }
}

function restart() {
    ran();
    step = 0; 
    check1 = 0, check2 = 0, check3 = 0;
}

function draw(){
    if(started1 == true){  
        background(205);
        strokeWeight(2.0);
        line(0,0,450,0);
        line(0,150,450,150);
        line(0,300,450,300);
        line(0,450,450,450);
        line(0,0,0,450);
        line(150,0,150,450);
        line(300,0,300,450);
        line(450,0,450,450);
        
        ran();
        for(var i = 0 ; i < 3 ; i++) {
            for(var j = 0 ; j < 3 ; j++) {
                fill(value[i][j]);
                circle(centreX[i] , centreY[j] , 90);
                noFill();
            }
        }

        ktra1();
        
        if(step == 3) {
            ktra1();
            if(count != 9) {
                background(255, 255, 255);
                textSize(20);
                fill(0);
                textAlign(CENTER);
                text('             YOU LOSE',150,150);
                textSize(20);
                textAlign(CENTER);
                text('             Click R to restart',150,200);
                started1 = false;
            }
        }
    }
}

function keyTyped() {
  if(key === 'r') {
    restart();
    started1 = true;
  }
}
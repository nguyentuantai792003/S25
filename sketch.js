let value = [                                                  //bang mau cua cac hinh tron
   [0,0,0,0],
   [0,0,0,0],
   [0,0,0,0],
   [0,0,0,0]
];

let count;
let step=0;
var check1=0,check2=0,check3=0,check4=0;

let button1,button3,button4,button2;
let started1 = false;                                              //bien bool de bat dau

let centreX = [75,225,375,525];                                 //vi tri cac tam theo toa do x                     
let centreY = [75,225,375,525];                                 //vi tri cac tam theo toa do y

let coin, win, lose;

function preload() {
  coin = loadImage('Picture/coin.jpg');
  win = loadImage('Picture/win.jpg');
  lose = loadImage('Picture/lose.jpg');
}

function setup() {
    menu();
}

function menu() {
    createCanvas(600, 600);
    background(coin);
    textSize(60);
    started1 = false;
    fill('blue');
    textAlign(CENTER);
    text('COINS FLIP',300 ,100);
    button1 = createButton('START');
    button3 = createButton('HELP');
    button1.size(160, 50);
    button3.size(160, 50);
    button1.position(220, 130);
    button3.position(220, 250);
    button1.style('color', 'red');
    button3.style('color', 'green');
    button1.mousePressed(start1);
    button3.mousePressed(start3);
    step=0;
    if (button4) button4.hide();
    if (button2) button2.hide();
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
    textSize(23);
    textAlign(CENTER,CENTER);
    text('Mỗi thẻ có hai mặt đen, trắng. Với mỗi lượt đi, bạn sẽ lật\n     một thẻ cùng các thẻ xung quanh nó. Bạn thắng khi tất\n     cả các thẻ cùng chuyển màu đen trước khi hết 4 lượt.\n Sau khi thua, ấn R để chơi \n lại\n',300,260);
    button4 = createButton('BACK');
    button4.size(90,45);
    button4.position(50, 340);
    button4.mousePressed(menu);
    step = 0;
}

function change(i,j) {
    value[i][j] = 255 - value[i][j];                                                    //thay đổi màu của hình tròn (i,j);
}

function ktra1(){                                                                       //đếm số hình tròn đen trong bảng hiện tại
    count = 0;                      
    for(var i=0; i<4; i++) {
        for(var j=0; j<4; j++) {
            if(value[i][j] == 0) {
                count++;
            }
        }
    }
    if(count == 16) {                                                                   //nếu cả bảng màu đen khi <= 4 bước thì bạn thằng
        background(win);
        textSize(40);
        fill(0);
        textAlign(CENTER);
        if(button2) button2.hide(); 
        started1 = false;
        button2 = createButton('BACK');
        button2.style('color', 'red');
        button2.size(90,45);
        button2.position(470, 440);
        button2.mousePressed(menu);
        restart();
    } 
}
function mouseClicked() {                                                              //đổi màu ô được click và các ô bên cạnh
    for(var i=0 ; i < 4 ; i++){
        for(var j = 0 ; j < 4 ; j++){
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
                        change(i+1,j);
                        change(i-1,j);
                    }
                    if(i == 3){
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
                        change(i,j+1);
                    }
                    if(j == 3){
                        change(i,j-1);
                    }
                    step++;
                }
            }
        }
    }
}

function ran() {                                                              //random để tạo ra test đề
    if(check1==0)  {                                                          //đầu tiên sẽ tạo ra 1 bảng đen 4*4. Sau đó thực hiện 4 bước. 
                                                                              //với mỗi bước chọn 1 hình tròn và đổi màu ô đó và các ô lân cận 
        var x1 = Math.floor(Math.random() * Math.floor(4));                   //như vậy chắc chắn sẽ tạo ra được test đề có thể chiến thắng
        var y1 = Math.floor(Math.random() * Math.floor(4));
        
        value[x1][y1] = 255 - value[x1][y1];
        if(0 <= x1 - 1) value[x1 - 1][y1] = 255 - value[x1 - 1][y1];
        if(0 <= y1 - 1) value[x1][y1 - 1] = 255 - value[x1][y1 - 1];
        if(x1 + 1 <= 2) value[x1 + 1][y1] = 255 - value[x1 + 1][y1];
        if(y1 + 1 <= 2) value[x1][y1 + 1] = 255 - value[x1][y1 + 1];
        check1 = 1;
    }

    if(check2==0) {
        
        var x2 = Math.floor(Math.random() * Math.floor(4));
        var y2 = Math.floor(Math.random() * Math.floor(4));
        
        value[x2][y2] = 255 - value[x2][y2];
        if(0 <= x2 - 1) value[x2 - 1][y2] = 255 - value[x2 - 1][y2];
        if(0 <= y2 - 1) value[x2][y2 - 1] = 255 - value[x2][y2 - 1];
        if(x2 + 1 <= 2) value[x2 + 1][y2] = 255 - value[x2 + 1][y2];
        if(y2 + 1 <= 2) value[x2][y2 + 1] = 255 - value[x2][y2 + 1];
        check2 = 1;
    }
    
    if(check3 == 0) {
        
        var x3 = Math.floor(Math.random() * Math.floor(4));
        var y3 = Math.floor(Math.random() * Math.floor(4));
        
        value[x3][y3] = 255 - value[x3][y3];
        if(0 <= x3 - 1) value[x3 - 1][y3] = 255 - value[x3 - 1][y3];
        if(0 <= y3 - 1) value[x3][y3 - 1] = 255 - value[x3][y3 - 1];
        if(x3 + 1 <= 2) value[x3 + 1][y3] = 255 - value[x3 + 1][y3];
        if(y3 + 1 <= 2) value[x3][y3 + 1] = 255 - value[x3][y3 + 1];
        
        check3 = 1;
    }
    
  if(check4 == 0) {
        
        var x4 = Math.floor(Math.random() * Math.floor(4));
        var y4 = Math.floor(Math.random() * Math.floor(4));
        
        value[x4][y4] = 255 - value[x4][y4];
        if(0 <= x4 - 1) value[x4 - 1][y4] = 255 - value[x4 - 1][y4];
        if(0 <= y4 - 1) value[x4][y4 - 1] = 255 - value[x4][y4 - 1];
        if(x4 + 1 <= 2) value[x4 + 1][y4] = 255 - value[x4 + 1][y4];
        if(y4 + 1 <= 2) value[x4][y4 + 1] = 255 - value[x4][y4 + 1];
        
        check4 = 1;
    }
}

function restart() {
    ran();
    step = 0; 
    check1 = 0, check2 = 0, check3 = 0,check4 = 0;
}

function draw(){
    if(started1 == true){  
        if(button2) button2.hide();
        background(205);
        strokeWeight(2.0);
        line(0,0,600,0);
        line(0,150,600,150);
        line(0,300,600,300);
        line(0,450,600,450);
        line(0,600,600,600);
        line(0,0,0,600);
        line(150,0,150,600);
        line(300,0,300,600);
        line(450,0,450,600);
        line(600,0,600,600);
        
        ran();
        for(var i = 0 ; i < 4 ; i++) {
            for(var j = 0 ; j < 4 ; j++) {
                fill(value[i][j]);
                circle(centreX[i] , centreY[j] , 90);
                noFill();
            }
        }

        ktra1();
        
        if(step == 4) {
            ktra1();
            if(count != 16) {
                background(lose);
                started1 = false;
                button2 = createButton('BACK');
                button2.style('color', 'blue');
                button2.size(90,45);
                button2.position(470, 440);
                button2.mousePressed(menu);
                restart();
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
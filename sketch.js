var canvas,backgroundImage;

var gameState=0,allplayers;

var playerCount,database,form,player,game;

var car1,car2,car3,car4 ;

var carA

function setup(){

    canvas=createCanvas(displayWidth-20,displayHeight-30);
    
    database=firebase.database();

    game=new Game();

    game.getState();

    game.start();
    
}

function draw(){

if (playerCount===4){

    game.update(1);

}

if (gameState===1){

    clear();

    game.play();

}

}

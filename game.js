class Game{

    constructor(){

    }

    getState(){

        var gameStateref=database.ref('gameState');

        gameStateref.on("value",function(data){

            gameState=data.val();

        })
    }

    update(state){

        database.ref('/').update({

            gameState:state

        })

    }

    start(){

        if(gameState===0){

            player=new Player();

            player.getCount();

            form=new Form();

            form.display();

        }

        car1=createSprite(100,200,100,100);

        car2=createSprite(300,200,100,100);

        car3=createSprite(500,200,100,100);

        car4=createSprite(700,200,100,100);

        carA=[car1,car2,car3,car4];
    }

   play(){

        form.hide();

        textSize(30);

        text("Game Starts",120,100);

        Player.getplayerinformation();

        if (allplayers!==undefined){

           // var displayposition=130;

           var index=0;

           var x=0;

           var y;

            for (var plr in allplayers){

                index=index+1;

                x=x+200;

                y=displayHeight-allplayers[plr].distance;

                carA[index-1].x=x;

                carA[index-1].y=y;

                if (index===player.index){

               carA[index-1].shapeColor="red";

               camera.position.x=displayWidth/2;

               camera.position.y=carA[index-1].y;

                }

                //displayposition+=20;

                //textSize(15);

                //text(allplayers[plr].name+":"+allplayers[plr].distance,120,displayposition);

            }

        }

        if (keyDown(UP_ARROW)&&player.index!==null){

            player.distance+=50;

            player.update();

        }

        drawSprites();
    }
}

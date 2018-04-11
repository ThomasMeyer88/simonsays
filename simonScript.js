"use strict";

//push

var gameOn = false;
var round = 0;
var userArray = [];
var simonArray = [];
var newColor;
var roundOn = false;

function checkOrder(){
    for(var i = 0; i < simonArray.length; i++) {
        if (userArray[i] != simonArray[i]) {
            alert("Game Over!");
            round = 0;
            userArray = [];
            simonArray = [];
            roundOn = false;
            gameOn = false;
            $('#gameStart').html("");
            break;
        }
    }
    if(gameOn == true) {
        simonGo();
    }
}

function simonGo(){
    round++;
    roundOn = true;
    $('#gameStart').html(round);
    userArray = [];
    var color = Math.floor((Math.random() * 4) + 1);
    simonArray.push(color);
    console.log(color);
    var i = 0;
    var colorFlash = setInterval(function () {
                switch (simonArray[i]) {
                    case 1:
                        $('#red').fadeOut();
                        $('#red').fadeIn();
                        break;
                    case 2:
                        $('#green').fadeOut();
                        $("#green").fadeIn();
                        break;
                    case 3:
                        $('#blue').fadeOut();
                        $("#blue").fadeIn();
                        break;
                    case 4:
                        $('#yellow').fadeOut();
                        $("#yellow").fadeIn();
                }
                i++;
                if(i == simonArray.length){
                    roundOn = false;

                    clearInterval(colorFlash);
                }
        }, 1000);

}

$("#gameStart").click(function() {

    gameOn = true;

    simonGo();

});

$('#red, #green, #blue, #yellow').click(function(){
    if(roundOn == true){

    } else {
        switch (this.id) {
            case 'red':
                $('#red').fadeOut();
                $('#red').fadeIn();
                newColor = 1;
                userArray.push(newColor);
                break;
            case 'green':
                $('#green').fadeOut();
                $('#green').fadeIn();
                newColor = 2;
                userArray.push(newColor);
                break;
            case 'blue':
                $('#blue').fadeOut();
                $('#blue').fadeIn();
                newColor = 3;
                userArray.push(newColor);
                break;
            case 'yellow':
                $('#yellow').fadeOut();
                $('#yellow').fadeIn();
                newColor = 4;
                userArray.push(newColor);

        }
        console.log(userArray);
        if (userArray.length == simonArray.length) {
            checkOrder();
        }
    }

});


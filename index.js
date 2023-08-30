var game_started = false;
var round = 1;
var simon = [];


const wrong_sound = new Audio('sounds/wrong.mp3');


function getRandomInt(max){
    return Math.floor(Math.random * max);
}

function addToSimon(){
    $('#instruction-text').text("Round " + round);

    var selector = Math.floor(Math.random() * 4);
    simon.push(selector);
}

function play_simon(){
    for(selection of simon){
        console.info('simon selected '+ selection);
        switch(selection){
            case 0:
                play_blue();
                break;
            case 1:
                play_green();
                break;
            case 2:
                play_red();
                break;
            case 3:
                play_yellow();
                break;

        }
    }
}

function play_blue(){
    $('#blue-square').toggleClass('flash')
    var sound = new Audio('sounds/blue.mp3');
    sound.play();

  
}

function play_green(){
    $('#green-square').toggleClass('flash')
    var sound = new Audio('sounds/green.mp3');
    sound.play();

    
}

function play_red(){
    $('#red-square').toggleClass('flash')
    var sound = new Audio('sounds/red.mp3');
    sound.play();

}

function play_yellow(){
    $('#yellow-square').toggleClass('flash')
    var sound = new Audio('sounds/yellow.mp3');
    sound.play();
}



$(document).keypress(function() {
    if(!game_started){
        game_started = true;
        addToSimon();
        play_simon();
    }
});

$("#green-square").click(function() {
    alert("Green Button clicked");
});

$("#red-square").click(function() {
    alert("Red Button clicked");
});

$("#yellow-square").click(function() {
    alert("Yellow Button clicked");
});

$("#blue-square").click(function() {

    alert("Blue Button clicked");
});


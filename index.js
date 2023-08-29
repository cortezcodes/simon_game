var game_started = false;

$(document).keypress(function() {
    if(!game_started){
        $("#instruction-text").text("Let's Begin!");
    }
})

$("#green-square").click(function() {
    alert("Green Button clicked");
})

$("#red-square").click(function() {
    alert("Red Button clicked");
})

$("#yellow-square").click(function() {
    alert("Yellow Button clicked");
})

$("#blue-square").click(function() {
    alert("Blue Button clicked");
})
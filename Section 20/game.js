var userClickedPattern = [];
var gamePattern = [];
var level = 0;
var isFirstKeyPress = true;

$(document).keydown(function(event) {
    if (isFirstKeyPress) {
        nextSequence();
        $("h1").text(`Level ${level}`);
        isFirstKeyPress = false;
    }
});


$(".btn").click(function() {
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});


function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {nextSequence();}, 1000);
            userClickedPattern = [];
            console.log("success");
        }
    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {$("body").removeClass("game-over");}, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}


function playSound(name) {
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}


function nextSequence() {
    var buttonColors = ["red", "blue", "green", "yellow"];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    level++;
    $("h1").text(`Level ${level}`);
}

function animatePress(currentColor){
    $(`#${currentColor}`).addClass("pressed");
    setTimeout(function(){
        $(`#${currentColor}`).removeClass("pressed");
    }, 100);
}


function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    isFirstKeyPress = true;
}
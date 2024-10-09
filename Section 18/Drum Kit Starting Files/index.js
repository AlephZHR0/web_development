var listOfDrums = document.getElementsByClassName("drum")
for (var i = 0; i < listOfDrums.length; i++) {
    listOfDrums[i].addEventListener("click", function (){
        key = this.innerHTML;
        makeSoundAndAnimate(key);
    });
}

document.addEventListener("keydown", function(event) {
    key = event.key;
    makeSoundAndAnimate(key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:
            console.log(this.innerHTML);
            
    }

}

function animation(key) {
    var activeButton = document.querySelector(`.${key}`);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

function makeSoundAndAnimate(key) {
    makeSound(key);
    animation(key);
}
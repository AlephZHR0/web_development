var listOfDrums = document.getElementsByClassName("drum")
for (var i = 0; i < listOfDrums.length; i++) {
    listOfDrums[i].addEventListener("click", function () {
        alert("I got clicked");
        var audio = new Audio("sounds/tom-1.mp3");
    });
}
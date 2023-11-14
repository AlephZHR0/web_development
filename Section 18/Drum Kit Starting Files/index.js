var drums = document.getElementsByClassName("drum")
for (var i=0; i<drums.length; i++) {
    drums[i].addEventListener("click", got_clicked)
}

function got_clicked() {
    var audio = new Audio("sounds/tom-1.mp3")
    audio.play()
}



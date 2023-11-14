var dice_1 = (Math.floor(Math.random()*6)) + 1
var dice_2 = (Math.floor(Math.random()*6)) + 1

function change_dice(dice_1, dice_2) {
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice" + dice_1 + ".png");
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice" + dice_2 + ".png");
}

function change_title(winner) {
    document.getElementsByTagName("h1")[0].innerText = "Player "+ winner +" won!";
}

if (dice_1 > dice_2) {
    change_title(1)
    change_dice(dice_1, dice_2)
}
else if (dice_1 < dice_2) {
    change_title(2)
    change_dice(dice_1, dice_2)
}
else if (dice_1 == dice_2) {
    document.getElementsByTagName("h1")[0].innerText = "Draw!"
    change_dice(dice_1, dice_2)
}

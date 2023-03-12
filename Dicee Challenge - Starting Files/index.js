var dice1 = document.querySelector(".img1");

var dice2 = document.querySelector(".img2");

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceNumber1 = "images\dice" + randomNumber1 + ".png";

var randomDiceNumber2 = "images\dice" + randomNumber2 + ".png";

dice1.setAttribute("src", randomDiceNumber1);
dice2.setAttribute("src", randomDiceNumber2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 WIN!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 WIN!";
} else {
  document.querySelector("h1").innerHTML = "DRAW!";
}

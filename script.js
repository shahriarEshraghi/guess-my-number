'use strict';
// CREATED RANDOM NUMBER    
const createRandomNumber = function () {
    return Math.floor(Math.random() * 20 + 1);
}
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

let randomNum = createRandomNumber();
let score = 20;
let highScore = 0;

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
checkBtn.addEventListener('click', function () {
    const enteredNum = Number(document.querySelector('.guess').value);
    if (!enteredNum) {
        document.querySelector('.message').textContent = "No Number guessed :/";
    } else if (enteredNum == randomNum) {
        displayMessage("That's it :D");
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').textContent = randomNum;
        if (score > highScore) {
            document.querySelector('.highscore').textContent = score;
            highScore = score;
        }
    } else if (enteredNum != randomNum) {
        if (score > 1) {
            displayMessage(enteredNum > randomNum ? "Too High :(" : "Too Low :(");
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You Lose the Game X_X";
        }
    }
});
againBtn.addEventListener('click', function () {
    randomNum = createRandomNumber();
    console.log(randomNum)
    score = 20;
    document.querySelector('body').style.backgroundColor = "#222";
    displayMessage("Start guessing..");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";
});
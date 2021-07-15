'use strict';
// CREATED RANDOM NUMBER    
const createRandomNumber = function () {
    return Math.floor(Math.random() * 20)
}

let randomNum = createRandomNumber();
let score = Number(document.querySelector('.score').textContent);
let highScore = Number(document.querySelector('.highscore').textContent);

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

checkBtn.addEventListener('click', function () {
    console.log(randomNum)
    let enteredNum = Number(document.querySelector('.guess').value);
    if (enteredNum < randomNum) {
        document.querySelector('.message').textContent = "Too Low :(";
        document.querySelector('.score').textContent = --score;
    } else if (enteredNum > randomNum) {
        document.querySelector('.message').textContent = "Too High :(";
        document.querySelector('.score').textContent = --score;
    } else if (enteredNum == randomNum) {
        document.querySelector('.message').textContent = "That's it :D";
        document.querySelector('body').style.backgroundColor = "#60b347";
        if (score > highScore) {
            console.log("bishtare")
            document.querySelector('.highscore').textContent = score;
            highScore = score;
        }
    }
});

againBtn.addEventListener('click', function () {
    randomNum = createRandomNumber();
    console.log(randomNum)
    score = 20;
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.message').textContent = "Start guessing..";
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = "";
});
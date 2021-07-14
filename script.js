'use strict';
// CREATED RANDOM NUMBER    
const createRandomNumber = function () {
    return Math.floor(Math.random() * 20)
}
const randomNum = createRandomNumber();
const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', function () {
    let enteredNum = document.querySelector('.guess').value;
    if (enteredNum < randomNum) {
        document.querySelector('.message').textContent = "Too Low :(";
    } else if (enteredNum > randomNum) {
        document.querySelector('.message').textContent = "Too High :(";
    } else {
        document.querySelector('.message').textContent = "That's it :D";
    }
});
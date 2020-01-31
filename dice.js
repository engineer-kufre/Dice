let dice1 = 0;
let dice2 = 0;

const dice1_span = document.getElementById('dice1');
const dice2_span = document.getElementById('dice2');
const button = document.getElementById('button');

function roll() {
    return Math.floor(Math.random() * 7);
}

button.addEventListener('click', function() {
    dice1 = roll();
    dice2 = roll();
    dice1_span.innerHTML = dice1;
    dice2_span.innerHTML = dice2;
})
'use strict';

//selecting element in two ways shown and notthat if the first line of code doesn't work there is a high chance that it won't work;
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//strarting
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// Rolling the dice funtionality
btnRoll.addEventListener('click', function () {
  //gnerating random dice rool
  const dice = Math.trunc(Math.random() * 6) + 1;
  //display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //checked for rolled 1;
  if (dice !== 1) {
    //add the dice to the current score
    currentScore += dice;
    current1El.textContent = currentScore;
    //
    //switch to the next player
  } else {
  }
});

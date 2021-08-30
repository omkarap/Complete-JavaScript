'use strict';

// Variables declarations
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const scoreElement0 = document.getElementById('score--0');
const scoreElement1 = document.getElementById('score--1');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Game Initial function
function init() {
  scores = [0, 0]; // storing players score
  currentScore = 0; // to store current player score
  activePlayer = 0; // to find and track active player
  playing = true;

  scoreElement0.textContent = 0;
  scoreElement1.textContent = 0;
  currentEl0.textContent = 0;
  currentEl1.textContent = 0;

  diceElement.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
}
init();

//calling above the function for execution of below code
// repeated code add into function and call when it needed
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active'); //"toggle" use for if it is there then remove and if it is not there then add it.
  player1.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generate random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // Display dice roll
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    //Check if score = 1 then switch to next player
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice; // insted of => currentScore = dice + currentScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // selecting current player dynamically
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1: add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2: check if player score >= 100
    if (scores[activePlayer] >= 100) {
      //Finish the game
      playing = false;
      diceElement.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

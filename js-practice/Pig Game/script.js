import { getRandomDiceValue } from "./utils/functions.js";

// Start page elements
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const startBtn = document.querySelector(".start--btn");
const player1Input = document.querySelector(".player1--input");
const player2Input = document.querySelector(".player2--input");
const player1Name = document.querySelector(".player1-name");
const player2Name = document.querySelector(".player2-name");

// Game page elements
const btns = document.querySelectorAll(".btn");
const dice = document.querySelector(".dice");
const currentScore1 = document.getElementById("current--0");
const currentScore2 = document.getElementById("current--1");
const playerTotalScore1 = document.getElementById("score--0");
const playerTotalScore2 = document.getElementById("score--1");
const player1Class = document.querySelector(".player--0");
const player2Class = document.querySelector(".player--1");

// Modal and overlay logic
overlay.classList.add("hidden");
modal.classList.add("hidden");

player1Input.addEventListener("change", () => {
  const player1EnteredName = player1Input.value;
  player1Name.textContent = player1EnteredName;
});
player2Input.addEventListener("change", () => {
  const player2EnteredName = player2Input.value;
  player2Name.textContent = player2EnteredName;
});

startBtn.addEventListener("click", () => {
  if (player1Input.value.length && player2Input.value.length > 0) {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
  }
});

// Game logic
let scores, score, playing, activePlayer;

const init = () => {
  scores = [0, 0];
  score = 0;
  playing = true; // state variable
  activePlayer = 0;

  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  playerTotalScore1.textContent = 0;
  playerTotalScore2.textContent = 0;

  dice.classList.add("hidden");
  player1Class.classList.remove("player--winner");
  player2Class.classList.remove("player--winner");
  player1Class.classList.add("player--active");
  player2Class.classList.remove("player--active");
};
init();

const switchPlayers = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  score = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1Class.classList.toggle("player--active");
  player2Class.classList.toggle("player--active");
};

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // roll the dice
    if (btn.classList.contains("btn--roll") && playing) {
      const randomDiceValue = getRandomDiceValue();

      dice.classList.remove("hidden");
      dice.src = `./assets/dice-images/dice-${randomDiceValue}.png`;

      if (randomDiceValue !== 1) {
        score += randomDiceValue;
        document.getElementById(`current--${activePlayer}`).textContent = score;
      } else {
        switchPlayers();
      }
    }
    // hold the score
    if (btn.classList.contains("btn--hold") && playing) {
      scores[activePlayer] += score;
      // prettier-ignore
      document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

      if (scores[activePlayer] >= 20) {
        playing = false;
        // prettier-ignore
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        // prettier-ignore
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        dice.classList.add("hidden");
      } else {
        switchPlayers();
      }
    }
    // new game - reset game
    if (btn.classList.contains("btn--new")) {
      init();
    }
  });
});

import { getMessage } from "./utils/functions.js";

const message = document.querySelector(".message");
const againBtn = document.querySelector(".again");
const number = document.querySelector(".number");
const checkBtn = document.querySelector(".check");
const yourScore = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const pageBody = document.querySelector("body");
const yourGuess = document.querySelector(".guess");

let score = 20;
let highScore = 0;
let displayMessage = "Start guessing...";
let secretNumber = Math.trunc(Math.random() * 20) + 1;

message.textContent = displayMessage;
yourScore.textContent = score;
highscore.textContent = highScore;

checkBtn.addEventListener("click", () => {
  const guess = +yourGuess.value;

  // When there is no input
  if (!guess) {
    getMessage(message, "⛔ No number!");

    // When player wins
  } else if (guess === secretNumber) {
    number.textContent = secretNumber;
    getMessage(message, "🎉 Correct number!");
    pageBody.style.backgroundColor = "#60b347";
    number.style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      highscore.textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // prettier-ignore
      message.textContent = getMessage(message, guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      yourScore.textContent = score;
    } else {
      getMessage(message, "💥 You lost the game!");
      yourScore.textContent = 0;
    }
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const guess = +yourGuess.value;

    // When there is no input
    if (!guess) {
      getMessage(message, "⛔ No number!");

      // When player wins
    } else if (guess === secretNumber) {
      number.textContent = secretNumber;
      getMessage(message, "🎉 Correct number!");
      pageBody.style.backgroundColor = "#60b347";
      number.style.width = "30rem";

      if (score > highScore) {
        highScore = score;
        highscore.textContent = highScore;
      }

      // When guess is wrong
    } else if (guess !== secretNumber) {
      if (score > 1) {
        // prettier-ignore
        message.textContent = getMessage(message, guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
        score--;
        yourScore.textContent = score;
      } else {
        getMessage(message, "💥 You lost the game!");
        yourScore.textContent = 0;
      }
    }
  }
});
// ===============================
// Coding Challenge #1 - DOM Manipulation
/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)
*/

againBtn.addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  getMessage(message, "Start guessing...");
  yourScore.textContent = score;
  number.textContent = "?";
  yourGuess.value = "";
  pageBody.style.backgroundColor = "#222";
  number.style.width = "15rem";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    getMessage(message, "Start guessing...");
    yourScore.textContent = score;
    number.textContent = "?";
    yourGuess.value = "";
    pageBody.style.backgroundColor = "#222";
    number.style.width = "15rem";
  }
});

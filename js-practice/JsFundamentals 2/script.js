// prettier-ignore
import {DOLPHIN_SCORE1, DOLPHIN_SCORE2, KOALAS_SCORE1, KOALAS_SCORE2, dolphins, koalas} from "./constants.js";
import { calcAvarage } from "./functions.js";
// ===========================
// Function
// function logger() {
//   console.log("My name is Laurentiu!");
// }

// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);

// const appleOrangeJuice = fruitProcessor(2, 4);

// const date = new Date();
// const currentYear = date.getFullYear();

// ======================================
// Function declaration
// function calcAge1(birthYear) {
//   return currentYear - birthYear;
// }
// const age1 = calcAge1(1992);

// // Function expresion
// const calcAge2 = function (birthYear) {
//   return currentYear - birthYear;
// };
// const age2 = calcAge2(1992);

// ===============================
// // Arrow function

// const calcAge3 = (birthYear) => currentYear - birthYear;
// const age3 = calcAge3(1992);

// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = currentYear - birthYear;
//   const retierement = 65 - age;
//   return `${firstName} retires in ${retierement} years`;
// };
// console.log(yearsUntilRetirement(1992, "Laurentiu"));
// console.log(yearsUntilRetirement(1965, "Daniel"));

// ===============================
// Functions calling other functions
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange`;
//   return juice;
// }

// const appleJuice = fruitProcessor(3, 0);
// console.log("Apple juice -", appleJuice);

// const orangeJuice = fruitProcessor(0, 5);
// console.log("Orange juice -", orangeJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log("Multy fruct juice -", appleOrangeJuice);

// ===============================
// Function sumarry

// const calcAge = function (birthYear) {
//   return currentYear - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retierement = 65 - age;

//   if (retierement > 0) {
//     return retierement;
//   }
//   return -1;
// };

// console.log(yearsUntilRetirement(1992, "Laurentiu"));
// console.log(yearsUntilRetirement(1955, "Mick"));

// ===============================
// Coding challenge #1 - Fundamentals part 2

// First case data
const dolphinsAvarageScore1 = calcAvarage(DOLPHIN_SCORE1).toFixed(1);
const koalasAvarageScore1 = calcAvarage(KOALAS_SCORE1).toFixed(1);

const checkWinner = (avgDolphin, avgKoalas) => {
  // prettier-ignore
  const result = avgDolphin > avgKoalas
      ? `${dolphins} win (${avgDolphin} vs ${avgKoalas})`
      : `${koalas} win (${avgKoalas} vs ${avgDolphin})`;

  return result;
};

console.log(checkWinner(dolphinsAvarageScore1, koalasAvarageScore1));

// Second case data
const dolphinsAvarageScore2 = calcAvarage(DOLPHIN_SCORE2);
const koalasAvarageScore2 = calcAvarage(KOALAS_SCORE2);

const checkWinner2 = (avgDolphin2, avgKoalas2) => {
  // prettier-ignore
  const result = avgDolphin2 > avgKoalas2
    ? `${dolphins} win (${avgDolphin2} vs ${avgKoalas2})`
    : `${koalas} win (${avgKoalas2} vs ${avgDolphin2})`;

  return result;
};

console.log(checkWinner2(dolphinsAvarageScore2, koalasAvarageScore2));

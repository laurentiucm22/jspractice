// // prettier-ignore
// import { calculateBMI, displayBMIComparation, calculateAvarageScore } from "./functions.js";
// // prettier-ignore
// import {markMass, markHeight, jhonMass, jhonHeight, massMark, heightMark, massJhon, heightJhon, names} from "./constants.js";

// // Operations
// // Calculate BMI first course challenge
// // Case 1
// const markBMI = calculateBMI(markMass, markHeight);
// const jhonBMI = calculateBMI(jhonMass, jhonHeight);
// // Case 2
// const bmiMark = calculateBMI(massMark, heightMark);
// const bmiJhon = calculateBMI(massJhon, heightJhon);
// // Second chanllenge
// const result = displayBMIComparation(markBMI, jhonBMI, names);
// const secondResult = displayBMIComparation(bmiMark, bmiJhon, names);

// =================================================================
// Coding Challenge #3
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

// Team 1 scores
// let dolfRounds = [96, 108, 89];
// // Team 2 scores
// let koalRounds = [88, 91, 110];

// let resultTeamA = calculateAvarageScore(dolfRounds);
// let resultTeamB = calculateAvarageScore(koalRounds);
// console.log(resultTeamA.toFixed(1), resultTeamB.toFixed(1));

// if (resultTeamA > resultTeamB && resultTeamA >= 100) {
//   console.log("Team Dolphins is the winner! 🏆");
// } else if (resultTeamA < resultTeamB && resultTeamB >= 100) {
//   console.log("Team Koalas is the winner! 🏆");
// } else if (resultTeamA === resultTeamB && resultTeamA && resultTeamB >= 100) {
//   console.log("Both team win! 🎆");
// } else {
//   console.log("No one wins! 😭");
// }

// // Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// dolfRounds = [97, 112, 123];
// koalRounds = [109, 95, 101];

// resultTeamA = calculateAvarageScore(dolfRounds);
// resultTeamB = calculateAvarageScore(koalRounds);
// console.log(resultTeamA.toFixed(1), resultTeamB.toFixed(1));

// if (resultTeamA > resultTeamB && resultTeamA >= 100) {
//   console.log("Team Dolphins is the winner! 🏆");
// } else if (resultTeamA < resultTeamB && resultTeamB >= 100) {
//   console.log("Team Koalas is the winner! 🏆");
// } else if (resultTeamA === resultTeamB && resultTeamA && resultTeamB >= 100) {
//   console.log("Both team win! 🎆");
// } else {
//   console.log("No one wins! 😭");
// }

// // Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// dolfRounds = [97, 112, 101];
// koalRounds = [109, 95, 106];

// resultTeamA = calculateAvarageScore(dolfRounds);
// resultTeamB = calculateAvarageScore(koalRounds);
// console.log(resultTeamA.toFixed(1), resultTeamB.toFixed(1));

// if (resultTeamA > resultTeamB && resultTeamA >= 100) {
//   console.log("Team Dolphins is the winner! 🏆");
// } else if (resultTeamA < resultTeamB && resultTeamB >= 100) {
//   console.log("Team Koalas is the winner! 🏆");
// } else if (resultTeamA === resultTeamB && resultTeamA && resultTeamB >= 100) {
//   console.log("Both team win! 🎆");
// } else {
//   console.log("No one wins! 😭");
// }

// ==============================================
// The Conditional (Ternary) Operator
// Coding Challenge #4

let bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `“The bill was ${bill}, the tip was ${tip}, and the total value ${
    bill + tip
  }”`
);

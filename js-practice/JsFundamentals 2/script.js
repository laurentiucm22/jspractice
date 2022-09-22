import { calculateTip } from "./functions.js";
import { bills, BILLS } from "./constants.js";

// prettier-ignore
// import {DOLPHIN_SCORE1, DOLPHIN_SCORE2, KOALAS_SCORE1, KOALAS_SCORE2, dolphins, koalas} from "./constants.js";
// import { calcAvarage } from "./functions.js";
// // ===========================
// // Function
// // function logger() {
// //   console.log("My name is Laurentiu!");
// // }

// // logger();

// // function fruitProcessor(apples, oranges) {
// //   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// //   return juice;
// // }
// // const appleJuice = fruitProcessor(5, 0);

// // const appleOrangeJuice = fruitProcessor(2, 4);

// // const date = new Date();
// // const currentYear = date.getFullYear();

// // ======================================
// // Function declaration
// // function calcAge1(birthYear) {
// //   return currentYear - birthYear;
// // }
// // const age1 = calcAge1(1992);

// // // Function expresion
// // const calcAge2 = function (birthYear) {
// //   return currentYear - birthYear;
// // };
// // const age2 = calcAge2(1992);

// // ===============================
// // // Arrow function

// // const calcAge3 = (birthYear) => currentYear - birthYear;
// // const age3 = calcAge3(1992);

// // console.log(age3);

// // const yearsUntilRetirement = (birthYear, firstName) => {
// //   const age = currentYear - birthYear;
// //   const retierement = 65 - age;
// //   return `${firstName} retires in ${retierement} years`;
// // };
// // console.log(yearsUntilRetirement(1992, "Laurentiu"));
// // console.log(yearsUntilRetirement(1965, "Daniel"));

// // ===============================
// // Functions calling other functions
// // function cutFruitPieces(fruit) {
// //   return fruit * 4;
// // }

// // function fruitProcessor(apples, oranges) {
// //   const applePieces = cutFruitPieces(apples);
// //   const orangesPieces = cutFruitPieces(oranges);
// //   const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange`;
// //   return juice;
// // }

// // const appleJuice = fruitProcessor(3, 0);
// // console.log("Apple juice -", appleJuice);

// // const orangeJuice = fruitProcessor(0, 5);
// // console.log("Orange juice -", orangeJuice);

// // const appleOrangeJuice = fruitProcessor(2, 4);
// // console.log("Multy fruct juice -", appleOrangeJuice);

// // ===============================
// // Function sumarry

// // const calcAge = function (birthYear) {
// //   return currentYear - birthYear;
// // };

// // const yearsUntilRetirement = function (birthYear, firstName) {
// //   const age = calcAge(birthYear);
// //   const retierement = 65 - age;

// //   if (retierement > 0) {
// //     return retierement;
// //   }
// //   return -1;
// // };

// // console.log(yearsUntilRetirement(1992, "Laurentiu"));
// // console.log(yearsUntilRetirement(1955, "Mick"));

// // ===============================
// // Coding challenge #1 - Fundamentals part 2

// // First case data
// const dolphinsAvarageScore1 = calcAvarage(DOLPHIN_SCORE1).toFixed(0);
// const koalasAvarageScore1 = calcAvarage(KOALAS_SCORE1).toFixed(0);

// const checkWinner = (avgDolphin, avgKoalas) => {
//   if (avgDolphin >= 2 * avgKoalas) {
//     console.log(`${dolphins} win (${avgDolphin} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphin) {
//     console.log(`${koalas} win (${avgKoalas} vs ${avgDolphin})`);
//   } else {
//     console.log("No team wins...");
//   }
// };

// checkWinner(dolphinsAvarageScore1, koalasAvarageScore1);

// // Second case data
// const dolphinsAvarageScore2 = calcAvarage(DOLPHIN_SCORE2).toFixed(0);
// const koalasAvarageScore2 = calcAvarage(KOALAS_SCORE2).toFixed(0);

// const checkWinner2 = (avgDolphin, avgKoalas) => {
//   if (avgDolphin >= 2 * avgKoalas) {
//     console.log(`${dolphins} win (${avgDolphin} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphin) {
//     console.log(`${koalas} win (${avgKoalas} vs ${avgDolphin})`);
//   } else {
//     console.log("No team wins...");
//   }
// };

// checkWinner2(dolphinsAvarageScore2, koalasAvarageScore2);

// // Practice some OOP
// function Circle(radius) {
//   this.radius = radius;
//   this.defaultLocation = { x: 0, y: 0 };
//   this.computeOptimumLocation = function (factor) {
//     console.log("Magic Here");
//   };
//   this.draw = function () {
//     this.computeOptimumLocation();
//     console.log("draw");
//   };
// }
// const circle = new Circle(10);
// console.log(circle);

// ==============================================
// Coding challenge #2 - Arrays - Fundamentals part 2
// My take

// console.log(calculateTip(100));
// let tips = [];

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calculateTip(bills[i]));
// }
// console.log("Bills", bills);
// console.log("Tips", tips);

// // New total arr = bills + tips;
// const total = bills.map((bill, index) => {
//   return bill + tips[index];
// });

// console.log("Total", total);

// ===============================================
// Coding Challenge #3 - Object - Arrays - Fundamentals part 2
// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     console.log(this.bmi);
//     return this.bmi;
//   }
// }

// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     console.log(this.bmi);
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//   // prettier-ignore
//   console.log(
//     `${mark.firstName}'s BMI (${mark.bmi.toFixed(1)}) is bigger than ${john.firstName}'s BMI (${john.bmi.toFixed(1)})`
//   );
// } else {
//   console.log(
//     `${john.firstName}'s BMI (${john.bmi.toFixed(1)}) is bigger than ${
//       mark.firstName
//     }'s BMI (${mark.bmi.toFixed(1)})`
//   );
// }

// ===============================
// Coding Challenge #4 - For and While loops - Fundamentals part 2

// const tips = [];
// const totals = [];
// // Or I can do it like this
// // const totals = BILLS.map((bill, index) => {
// //   return bill + tips[index];
// // });

// for (let i = 0; i < BILLS.length; i++) {
//   const tip = calculateTip(BILLS[i]);
//   tips.push(tip);
//   totals.push(tip + BILLS[i]);
// }

// console.log("Bills", BILLS);
// console.log("Tips", tips);
// console.log("Totals", totals);

// function calcAvarage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   const result = sum / arr.length;
//   return result;
// }
// const result = calcAvarage(totals);
// console.log("Avrege bill + tip", result);

import { worldPopulation } from "./constants.js";
// ===========================
// Functions
// Function dec(laration and function expresion
// Arrow functions
// Function calling other functions

// ===============================
// Functions
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} milion people and its capital city is ${capitalCity}`;
// }
// const romaniaCountry = describeCountry("Romania", 20, "Bucarest");
// const italyCountry = describeCountry("Italy", 60, "Rome");
// const netherlandsCountry = describeCountry("Netherlands", 17, "Amsterdam");
// console.log(romaniaCountry);
// console.log(italyCountry);
// console.log(netherlandsCountry);

// Practice functions
// Your company assigns each customer a membership ID, and you are implementing a check digit for those IDs.
// The check digit should be calculated by adding up all digits in each membership ID. If the result of the sum is a number with more than a single digit, another iteration is required, and the digits of the result also should be added together. This process should repeat until a single-digit number is calculated.
// For example, for the membership ID "55555" the sum of all digits is 25. Because this is not a single-digit number, 2 and 5 would be added, and the result, 7, would be the check digit.

// function createCheckDigit(membershipId) {
//   // Write the code that goes here.
//   let sum = 0;

//   for (let i = 0; i < membershipId.length; i++) {
//     sum += +membershipId[i];
//     console.log(sum);
//   } // sum = 25

//   if (sum <= 9) {
//     return sum;
//   }
//   //Recursiviate
//   return createCheckDigit(`${sum}`); // sum = 7
// }

// console.log(createCheckDigit("55555")); // 7

// ===============================
// Function declaration and function expresion

// Function declaration
// function percentageOfWorld1(population) {
//   const calculatePercentage = (population / worldPopulation) * 100;
//   return calculatePercentage;
// }

// const chinaPopulationPercent = percentageOfWorld1(1441).toFixed(1);
// const romaniaPopulationPercent = percentageOfWorld1(20).toFixed(1);
// const italyPopulationPercent = percentageOfWorld1(60).toFixed(1);

// console.log(chinaPopulationPercent + "% of the population");
// console.log(romaniaPopulationPercent + "% of the population");
// console.log(italyPopulationPercent + "% of the population");

// Function expresion
// const percentageOfWorld2 = function (population) {
//   const calculatePercentage = (population / worldPopulation) * 100;
//   return calculatePercentage;
// };

// const chinaPercentOfThePopulation = percentageOfWorld2(1441).toFixed(1);
// const romaniaPercentOfThePopulation = percentageOfWorld2(20).toFixed(1);
// const italyPercentOfThePopulation = percentageOfWorld2(60).toFixed(1);
// console.log(chinaPercentOfThePopulation);
// console.log(romaniaPercentOfThePopulation);
// console.log(italyPercentOfThePopulation);

// ===============================
// Arrow functions
// const percentageOfWorld3 = (population) => {
//   const calculatePercentage = (population / worldPopulation) * 100;
//   return calculatePercentage;
// };

// const chinaPercentOfThePopulation2 = percentageOfWorld3(1441).toFixed(1);
// const romaniaPercentOfThePopulation2 = percentageOfWorld3(20).toFixed(1);
// console.log(romaniaPercentOfThePopulation2, "Arrow here");
// console.log(chinaPercentOfThePopulation2, "Arrow here");

// ===============================
// Function calling other functions

// const describePopulation = (country, population) => {
//   // prettier-ignore
//   return `${country} has ${population} million people, which is about ${percentageOfWorld3(population).toFixed(1)}% of the world.`;
// };

// const romania = describePopulation("Romania", 20);
// const china = describePopulation("China", 1441);
// const italy = describePopulation("Italy", 60);

// console.log(romania);
// console.log(china);
// console.log(italy);

// ===============================
// Introduction to Arrays;
// const population = [20, 60, 300, 70];
// const verifyArrLeng = population.length >= 4;

// function percentageOfWorld1(population) {
//   return (population / worldPopulation) * 100;
// }
// const percentages = population.map((el) => {
//   return percentageOfWorld1(el);
// });
// console.log(percentages);

// ===============================
// Array Operations (Methods)

// const neighbours = ["Bulgaria", "Ungaria", "Ucraina", "Moldova"];
// console.log(neighbours);

// neighbours.push("Utopia");
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes("Germany")) {
//   console.log(`Not a country in the center of Europe`);
// }

// neighbours[neighbours.indexOf("Moldova")] = "Republic of Moldova";
// console.log(neighbours);

// ==================================
// Introduction to Objects
// const myCountry = {
//   country: "Romania",
//   capital: "Bucarest",
//   language: "romanian",
//   population: 20,
//   neighbours: ["Ukrain", "Hungary", "Moldova", "Bulgaria, "Serbia"],
// };
// myCountry.continent = "Europe";
// myCountry["my-state"] = "Cluj";
// myCountry.city = "Cluj-Napoca";

// console.log(myCountry);

// console.log(
//   `${myCountry.country} has ${myCountry.population} million people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}. I am from ${myCountry["city"]} in judetul ${myCountry["my-state"]}.`
// );

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry["population"] -= 2;
// console.log(myCountry["population"]);

// ===============================
// Introduction to for loops
// for (let voter = 1; voter <= 50; voter++) {
//   console.log(`Voter number ${voter} is currently voting!`);
// }

// ===============================
// Looping Arr
// const population2 = [20, 60, 300, 70];

// let percentages2 = [];
// for (let i = 0; i < population2.length; i++) {
//   percentages2.push(percentageOfWorld1(population[i]));

//   if (percentages[i] === percentages2[i]) {
//     // here the result is true because they are pass by value
//     // console.log("they are the same");
//   }
// }
// console.log(percentages2);
// const aretheyequal = percentages === percentages2;
// here the result is false because they are pass by reference
// console.log(aretheyequal);

// ===============================
// Looping Backwards and Loops in Loops
// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweeden"],
//   ["Russia"],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let j = 0; j < listOfNeighbours[i].length; j++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//   }
// }

// ===============================
// The while Loop
// function percentageOfWorld1(population) {
//   return (population / worldPopulation) * 100;
// }
// const population3 = [20, 60, 300, 70];
// let percentages3 = [];

// let i = 0;
// while (i < population3.length) {
//   const perc = percentageOfWorld1(population3[i]);
//   percentages3.push(perc);

// if (percentages[i] === percentages3[i]) {
//   // here the result is true because they are pass by value
//   console.log("they are the same");
// }
//   i++;
// }

// console.log(percentages3);

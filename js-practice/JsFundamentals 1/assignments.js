// import { takeDecisions, perfectCountry } from "./functions.js";
// ==============================================
// Variables and Values
// const country = "England";
// const secondCountry = "Portugal";
// const continent = "Europe";
// let population = 68;
// let secondPopulation = 11;
// let avaragePopulation = 33;
// let populationInFinland = 6;

// ==============================================
// Data Types
// const isIsland = true;
// let language = "english";
// let secondLanguage = "portuguese";

// ==============================================
// Basic Operators
// const splitPopulationInHalf = population / 2;
// let incresePopulationByOne = population++;

// let comparePopulation = populationInFinland > population;
// comparePopulation = population > avaragePopulation;

// ==============================================
// Strings and Template Literals
// prettier-ignore
// let description = "Portugal is in Europe, and its 11 million people speak portuguese";

// description = `${secondCountry} is in ${continent}, and it's ${secondPopulation} million people speak ${secondLanguage}`;

// ==============================================
// if / else Statements
// takeDecisions(population, avaragePopulation, country);

// ==============================================
// Type Conversion and Coercion
// Predict Results
// let a = "9" - "5"; // 4 - number
// let b = "19" - "13" + "17"; // 6 + "17" = "617"; - string
// let c = "19" - "13" + 17; // 6 + 17 = 23; - number
// let d = "123" < 57; // false - boolen
// let e = 5 + 6 + "4" + 9 - 4 - 2; // 1143 - number
// let's see if I am right
// console.log(a, b, c, d, e);

// let inputNumber = "1991";
// console.log(inputNumber, Number(inputNumber), +inputNumber);

// ==============================================
// Equality Operators: == vs. ===
// let numNeighbors = prompt(
//   "How many neighbors countries does your country have?"
// );
// if (+numNeighbors === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbors > 1) {
//   console.log("More then 1 border");
// } else {
//   console.log("No borders");
// }

// ==============================================
// Logical Operations
// prettier-ignore
// perfectCountry(country, language, population, isIsland);

// let language = "romanian";

// switch (language) {
//   case "mandarin":
//   case "chinese":
//     console.log("MOST number of native speakers");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too 😁");
// }

// if (language === "chinese" || language === "mandarin") {
//   console.log("MOST number of native speakers2");
// } else if (language === "english") {
//   console.log("3rd place");
// } else if (language === "spanish") {
//   console.log("2nd place in number of native speakers");
// } else {
//   console.log("Great language too 😁");
// }

// ==============================================
// Switch Stament

// const day = "money";

// switch (day) {
//   case "monday":
//     console.log("Js practice");
//     console.log("Eat");
//     console.log("Chill and learn some piano");
//     break;
//   case "tuesday":
//     console.log("Js practice");
//     console.log("Wash the car");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Js practice");
//     break;
//   case "friday":
//     console.log("Js practice");
//     console.log("Grab a drink 🍸");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the free time! 🧭");
//     break;
//   default:
//     console.log("Not a valid day");
// }

// if (day === "monday") {
//   console.log("Js practice");
// } else if (day === "tuesday") {
//   console.log("Js practice and wash car");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Js practice and run 4 laps!");
// } else if (day === "friday") {
//   console.log("Js practice and piano lessons");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend and piano practice");
// } else {
//   console.log("Not a valid day!");
// }

// ==============================================
// The Conditional (Ternary) Operator

// let myCountryPopulation = 20;
// let countryName = "Romania";

// console.log(
//   myCountryPopulation >= 33
//     ? `${countryName}'s population is above avarage!🚩`
//     : `${countryName}'s population is below avarage 🏴‍☠️`
// );

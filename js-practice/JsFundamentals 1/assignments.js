import { takeDecisions, perfectCountry } from "./functions.js";
// ==============================================
// Variables and Values
const country = "England";
const secondCountry = "Portugal";
const continent = "Europe";
let population = 68;
let secondPopulation = 11;
let avaragePopulation = 33;
let populationInFinland = 6;

// ==============================================
// Data Types
const isIsland = true;
let language = "english";
let secondLanguage = "portuguese";

// ==============================================
// Basic Operators
const splitPopulationInHalf = population / 2;
// let incresePopulationByOne = population++;

let comparePopulation = populationInFinland > population;
comparePopulation = population > avaragePopulation;

// ==============================================
// Strings and Template Literals
// prettier-ignore
let description = "Portugal is in Europe, and its 11 million people speak portuguese";

description = `${secondCountry} is in ${continent}, and it's ${secondPopulation} million people speak ${secondLanguage}`;

// ==============================================
// if / else Statements
// takeDecisions(population, avaragePopulation, country);

// ==============================================
// Type Conversion and Coercion
// Predict Results
let a = "9" - "5"; // 4 - number
let b = "19" - "13" + "17"; // 6 + "17" = "617"; - string
let c = "19" - "13" + 17; // 6 + 17 = 23; - number
let d = "123" < 57; // false - boolen
let e = 5 + 6 + "4" + 9 - 4 - 2; // 1143 - number
// let's see if I am right
// console.log(a, b, c, d, e);

let inputNumber = "1991";
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

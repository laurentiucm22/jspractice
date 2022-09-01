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
const isIsland = false;
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
const takeDecisions = (population, avaragePopulation) => {
  let belowAvarage = population - avaragePopulation;
  console.log(belowAvarage);
  if (population > avaragePopulation) {
    console.log(`${country} is above average`);
  } else {
    console.log(
      `${country} population is ${belowAvarage} million below average`
    );
  }
};
takeDecisions(population, avaragePopulation);

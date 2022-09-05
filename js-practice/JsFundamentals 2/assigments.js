// ===========================
// Functions
// Function declaration and function expresion
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

// ===============================
// Function declaration and function expresion
// const worldPopulation = 7900;

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

// Operations
// BMI formula = mass / height ** 2 = mass / (height * height);
export const calculateBMI = (mass, height) => {
  const BMI = mass / height ** 2 || mass / (height * height);
  return BMI;
};
// prettier-ignore
export const displayBMIComparation = (firstBMI, secondBMI, { firstName, secondName }) => {
  if (firstBMI > secondBMI) {
    // prettier-ignore
    return `${firstName}'s BMI(${firstBMI.toFixed(1)}) is bigger than ${secondName}'s(${secondBMI.toFixed(1)})`;
  }
  // prettier-ignore
  return `${secondName}'s BMI(${secondBMI.toFixed(1)}) is bigger than ${firstName}'s(${firstBMI.toFixed(1)})`;
};

// if-else statements
// Country comparisons
export const takeDecisions = (population, avaragePopulation, country) => {
  let belowAvarage = population - avaragePopulation;
  if (population > avaragePopulation) {
    console.log(`${country} is above average`);
  } else {
    console.log(
      `${country} population is ${belowAvarage} millions below average`
    );
  }
};

// logical Operations
// prettier-ignore
export const perfectCountry = (countryName, countryLanguage, countryPopulation, countryNotIsland) => {
  // prettier-ignore
  if (countryLanguage === "english" && countryPopulation < 50 &&!countryNotIsland) {
    console.log(`${countryName} is the perfect country for you!`)
  }
  else {
    console.log(`${countryName} does not meet the criteria`)
  }
}

// calculate score avarage
export const calculateAvarageScore = (arr) => {
  let calculateScore = arr.reduce((prevVal, currentVal) => {
    return prevVal + currentVal;
  });
  let calculateAvarage = calculateScore / arr.length;
  return calculateAvarage;
};

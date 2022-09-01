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

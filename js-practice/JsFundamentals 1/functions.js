// BMI formula = mass / height ** 2 = mass / (height * height);
export const calculateBMI = (mass, height) => {
  const BMI = mass / height ** 2 || mass / (height * height);
  return BMI;
};

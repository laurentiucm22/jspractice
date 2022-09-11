export const calcAvarage = (arr) => {
  const calculateScore = arr.reduce((initialVal, currentVal) => {
    return initialVal + currentVal;
  });
  const calculateAvarageScore = calculateScore / arr.length;
  return calculateAvarageScore;
};

export const calculateTip = (bill) => {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};

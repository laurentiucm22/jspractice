export const calcAvarage = (arr) => {
  const calculateScore = arr.reduce((initialVal, currentVal) => {
    return initialVal + currentVal;
  });
  const calculateAvarageScore = calculateScore / arr.length;
  return calculateAvarageScore;
};

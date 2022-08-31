import { calculateBMI } from "./functions.js";

const markMass = 78;
const markHeight = 1.69;
const jhonMass = 92;
const jhonHeight = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJhon = 85;
const heightJhon = 1.76;

const markBMI = calculateBMI(markMass, markHeight);
const jhonBMI = calculateBMI(jhonMass, jhonHeight);
const markHeightBMI = markBMI > jhonBMI;

console.log(markBMI, jhonBMI, markHeightBMI);

const bmiMark = calculateBMI(massMark, heightMark);
const bmiJhon = calculateBMI(massJhon, heightJhon);
const markHeightBMI2 = bmiMark > bmiJhon;

console.log(bmiMark, bmiJhon, markHeightBMI2);

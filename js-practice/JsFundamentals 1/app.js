// prettier-ignore
import { calculateBMI, displayBMIComparation } from "./functions.js";
// prettier-ignore
import {markMass, markHeight, jhonMass, jhonHeight, massMark, heightMark, massJhon, heightJhon, names} from "./constants.js";

// Operations
// Calculate BMI first course challenge
// Case 1
const markBMI = calculateBMI(markMass, markHeight);
const jhonBMI = calculateBMI(jhonMass, jhonHeight);
// Case 2
const bmiMark = calculateBMI(massMark, heightMark);
const bmiJhon = calculateBMI(massJhon, heightJhon);
// Second chanllenge
const result = displayBMIComparation(markBMI, jhonBMI, names);
const secondResult = displayBMIComparation(bmiMark, bmiJhon, names);

// Type Conversion and Coercion

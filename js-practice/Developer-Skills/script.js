// prettier-ignore
import { tempData1, tempData2, data1, data2, temperatures, temperatures2 } from "./constants.js";

const displayTemp = document.querySelector("#show_temp");
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this:
// "Given an array of temperatures of one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error."

// If it is a only numbers arr
function calcAmplitude(arr) {
  return Math.max(...arr) - Math.min(...arr);
}
const amplitude = calcAmplitude(temperatures);
console.log(amplitude);

// If it is a mixed types arr
function calculateAmplitude(temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  return max - min;
}
const amplitude2 = calculateAmplitude(temperatures2);
console.log(amplitude2);

// ===============================
// Coding challenge #1 - Developer Skills & Editor Setup
// This is my take on this solution

function printForecast(arr) {
  const thermometerDisplayMsg = [];

  for (let i = 0; i < arr.length; i++) {
    const daysTemperaturesMsg = ` ${arr[i]}C in ${i + 1} days...`;
    thermometerDisplayMsg.push(daysTemperaturesMsg);
  }

  console.log("..." + thermometerDisplayMsg.join(""));
}
printForecast(tempData1);
printForecast(tempData2);

let thermometerDisplayMsg2 = [];

tempData1.forEach((item, index) => {
  const daysTemperaturesMsg2 = ` ${item}C in ${index + 1} days...`;

  thermometerDisplayMsg2.push(daysTemperaturesMsg2);
});
console.log("..." + thermometerDisplayMsg2.join(""));

let thermometerDisplayMsg3 = [];

tempData2.forEach((item, index) => {
  const daysTemperaturesMsg3 = ` ${item}C in ${index + 1} days...`;

  thermometerDisplayMsg3.push(daysTemperaturesMsg3);
});
console.log("..." + thermometerDisplayMsg3.join(""));

function printForecast2(arr) {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]}C in ${i + 1} days...`;
  }
  console.log("..." + str);
  displayTemp.textContent = "..." + str;
}
// printForecast2(data1);
printForecast2(data2);

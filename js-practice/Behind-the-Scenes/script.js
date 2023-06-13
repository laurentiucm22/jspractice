"use strict";

// const date = new Date();

// function calcAge(birthYear) {
//   const age = date.getFullYear() - birthYear;

//   function printAge() {
//     let outPut = `${firstName} you are ${age} years old, born in ${birthYear}`;
//     console.log(outPut);

//     if (birthYear >= 1991 && birthYear <= 1996) {
//       var millennial = true;
//       // Creating NEW variable with same name as outer scope's variables
//       const firstName = "Marcel";

//       // Reassigning outer scope's variables
//       outPut = "NEW OUTPUT";

//       const str = `Oh, and you're a Millennial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millennial);
//     // console.log(add(2, 3));
//     console.log(outPut);
//   }
//   printAge();
// }

// const firstName = "Jonas";
// calcAge(1991);

// =============================
// Hoisting with Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = "Jonas";
// let job = "teacher";
// const year = 1991;

// =============================
// Hoisting with Functions

// console.log(addDecl(2, 3));
// // console.log(addExpre(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpre = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// Example

// console.log(undefined);
// not use var
// var numProduct = 10;
// let numProduct = 10;

// if (!numProduct) deleteShoppingCart();

// function deleteShoppingCart() {
//   console.log("All products deleted");
// }

// Creates a property on the global window object
// var x = 1;

// ===============================
// let y = 2;
// const z = 3;

// ===============================
// The this key word

// In the gobal scope this points to the window object
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   // Got his own this key word
//   console.log(this);
// };
// calcAge(1991);

// const calcAge2 = (birthYear) => {
//   console.log(2037 - birthYear);
//   // Points to the parents this scope
//   console.log(this);
// };
// calcAge2(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();
// console.log(matilda);

// const f = jonas.calcAge;
// f();

// var firstName = "Matilda";

// const jonas = {
//   year: 1991,
//   firstName: "Jonas",
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     // 2 Case
//     // 2.1
//     // const self = this; //self or that
//     // const isMillennial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1991 && self.year <= 1996);
//     //   // console.log(this.year >= 1991 && this.year <= 1996);
//     // };

//     // 2.2
//     const isMillennial = () => {
//       console.log(this);
//       console.log(this.year >= 1991 && this.year <= 1996);
//       // console.log(this.year >= 1991 && this.year <= 1996);
//     };
//     isMillennial();
//   },
//   // 1 Case
//   // In this case the this key word will refere to the window object
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
// jonas.calcAge();

// const addExpre = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpre(2, 5);
// addExpre(2, 5, 8, 12);

// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5);

// Primitive types
// let lastName = "Williams";
// let oldLastName = lastName;

// lastName = "Davis";
// // console.log(lastName);
// // console.log(oldLastName);

// // Reference types
// const jessica = {
//   firstName: "Jessica",
//   lastName: "Williams",
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = "Davis";
// // console.log(jessica);
// // console.log(marriedJessica);

// // Copying objects
// const jessica2 = {
//   firstName: "Jessica",
//   lastName: "Williams",
//   age: 27,
//   family: ["Bob", "Dilan"],
// };

// // Object.assign({}, jessica2); - this creates a shalow copy not a deep copy, the deep copy is what we actually want;
// const jessicaCopy = { ...jessica2 };
// // or like this we can create a new object
// // Object.assign() & the spread operator have both done a copy the parent object, the array being a deep object this methods are not applied to it.
// // We can use and external library for deep copying
// jessicaCopy.lastName = "Davis";
// jessicaCopy.family.push("George");
// jessicaCopy.family.push("Michaelson");

// console.log(jessica2);
// console.log(jessicaCopy);
// let testArr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
// let testArrSec = ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"];
// let testArrFalse = ["1, 2, 3, 4", "5, 6, 7, 8"];

// let testArrfour = ["1, 5, 6, 7, 10, 11, 12", "5, 6, 8, 11, 17"];

// function checkIntersect(strArr) {
//   const arrFirstElement = strArr[0].split(",");

//   const arrSecondElement = strArr[1].split(",");

//   let resultArr = [];
//   let finalStr;

//   for (let i = 0; i < arrFirstElement.length; i++) {
//     for (let j = 0; j < arrSecondElement.length; j++) {
//       if (+arrFirstElement[i] === +arrSecondElement[j]) {
//         resultArr.push(arrFirstElement[i]);
//       }
//     }
//   }

//   if (resultArr.length > 0) {
//     finalStr = resultArr.join(",");
//   } else {
//     finalStr = "false";
//   }

//   return finalStr;
// }

// console.log(checkIntersect(testArr));

// let strInput = "acc?7??sss?3rr3???7acc";
// let strInput2 = "acc??";

// function questionMarks(str) {
//   let lastNum = null;
//   let count = 0;
//   let num;

//   for (let i = 0; i < str.length; i++) {
//     const chart = str[i];

//     if (/\d/.test(chart)) {
//       num = +chart;
//       lastNum = num;

//       if (lastNum !== null && num + lastNum === 10) {
//         if (count !== 3) {
//           return false;
//         }
//         count = 0;
//       }
//       lastNum = num;
//     } else if (chart === "?") {
//       count++;
//     }
//   }
//   return true;
// }
// console.log(questionMarks(strInput));

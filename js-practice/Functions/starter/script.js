"use strict";

// const bookings = [];

// const createBooking = function (
//   flightNum = "✈",
//   numPassengers = 1,
//   price = numPassengers * 199
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123");
// createBooking("LH123", 2, 800);
// createBooking("LH123", 2);
// createBooking("LH123", 5);

// createBooking("LH123", undefined, 1000);

// const flight = "LH234";
// const jonas = {
//   name: "Jonas Schmedtmann",
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr." + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert("checkIn");
//   } else {
//     alert("Wrong passport");
//   }
// };
// checkIn(flight, jonas);
// // console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(jonas);
// console.log(jonas);
// checkIn(flight, jonas);

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
//   console.log("--------------------------");
// };

// transformer("JavaScript is the best!", upperFirstWord);
// transformer("JavaScript is the best!", oneWord);

// const high5 = function () {
//   console.log("👋🏽");
// };

// document.body.addEventListener("click", high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet("Hey");
// greeterHey("Jonas");
// greeterHey("Steven");

// greet("Hello")("Jonas");

// const greet2 = (greeting) => {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// greet2("Salut")("Marcela");

// const greet3 = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greet3("Buna")("Consuela");

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     const message = `${name} booked a set on ${this.airline} flight ${this.iataCode}${flightNum}`;
//     // console.log(message);
//     this.bookings.push({
//       flight: `${this.iataCode}${flightNum}`,
//       name: `${name}`,
//     });
//   },
// };

// lufthansa.book(239, "Jonas");
// lufthansa.book(635, "John");
// // console.log(lufthansa);

// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const book = lufthansa.book;

// // Call method

// // Does not work, in a regular function call the this key word points to undefine
// // book(23, "Sara");

// book.call(eurowings, 23, "Sara");
// // console.log(eurowings);

// book.call(lufthansa, 239, "Mary");
// // console.log(lufthansa);

// const swiss = {
//   airline: "Swiss Air Line",
//   iataCode: "LX",
//   bookings: [],
// };

// book.call(swiss, 583, "Marlin");
// // console.log(swiss);

// // Apply method
// // Takes as arguments an arr of the arguments;
// // not that use anymore
// const flightData = [583, "George"];
// book.apply(swiss, flightData);

// book.call(swiss, ...flightData);
// // console.log(swiss);

// // The bind method, is better than the call and apply method
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, "Steven Will");
// // console.log(eurowings);

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23("Jonas");
// bookEW23("Martha");
// bookEW23("Cooper");

// // console.log(eurowings);

// lufthansa.planes = 300;

// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// // Partial aplication
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

// const calcTax = (rate) => (value) => value + value * rate;
// const calcVAT = calcTax(0.23);

// console.log(calcVAT(100));

// Poll app
// const pollBtn = document.querySelector(".poll");

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     // Get Answer
//     let answer = Number(
//       prompt(
//         `${this.question}\n ${this.options.join("\n")}\n(Write option number)`
//       )
//     );

//     // Register Answer
//     typeof answer === "number" &&
//       answer < this.options.length &&
//       this.answers[answer]++;

//     this.displayResults("array");
//     this.displayResults("string");
//   },

//   displayResults(type = "array") {
//     if (type === "array") {
//       console.log(this.answers);
//     } else if (type === "string") {
//       console.log(`Poll results are ${this.answers.join(", ")}`);
//     }
//   },
// };

// pollBtn.addEventListener("click", poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] });
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// const oneWord = function (str) {
//   return str.replace(/ /g, "");
// };

// const upperFirstWord = function (str) {
//   const [first, ...rest] = str.split("");
//   return `${[first.toUpperCase(), ...rest].join("")}`;
// };

// const transformer2 = function (str, fn) {
//   console.log("----------------------");
//   console.log(str);
//   console.log(`The transformer2 string: ${fn(str)}`);
//   console.log(fn.name);
// };

// transformer2("laurentiu", upperFirstWord);
// transformer2("JavaScript is the best thing ever!", oneWord);

// // Js callback all the time
// function high5() {
//   console.log("👋🏽");
// }

// ["Jonas", "Martha", "Adam"].forEach(high5);

// const great = function (greating) {
//   return function (name) {
//     console.log(`${greating} ${name}`);
//   };
// };

// const greaterHey = great("Hey");
// greaterHey("Steven");

// great("Hello")("Jonas");

// const great2 = (greating) => (name) => console.log(`${greating} ${name}`);
// great2("Serus")("Gica");

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   book(flightNumber, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
//     );
//     this.bookings.push({
//       id: this.bookings.length,
//       flight: `${this.iataCode}${flightNumber}`,
//       passangerName: name,
//     });
//   },
// };

// lufthansa.book(239, "Jonas Schmedtmann");
// lufthansa.book(635, "John Smith");

// console.log(lufthansa.bookings);

// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const book = lufthansa.book;
// // book.call(eurowings, 23, "Sarah Williams");

// // book.call(lufthansa, 239, "Mary Cooper");

// const swiss = {
//   airline: "Swiss Air Line",
//   iataCode: "LX",
//   bookings: [],
// };

// book.call(swiss, 583, "Mary Cooper");

// Apply method
// const flightData = [583, "George Cooper"];
// console.log(flightData.valueOf());
// book.apply(swiss, flightData);
// This to methos are the same, the apply method in modern js is not that use anymore because of the ... operator
// book.call(swiss, ...flightData);
// console.log(swiss);

// // Bind Method
// // Doesn't imediatlly calls the function, returns a new function where the this key word is bound
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// // bookEW(23, "Steven Williams");
// // bookLH(23, "Steven Williams");
// // bookLX(23, "Steven Williams");

// const bookEW23 = book.bind(eurowings, 23);
// // bookEW23("Jonas Schmedtmann");
// // bookEW23("Marta Cooper");

// // With Event Listeners
// lufthansa.planes = 300;

// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// // console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // console.log(addVAT(100));

// const addVATFnuri =
//   (rate = 0.23) =>
//   (value) =>
//     value + value * rate;

// const test = addVATFnuri()(100);

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     const answerInput = parseInt(
//       prompt(
//         `What is your favourite programming language? \n${this.options.join(
//           "\n"
//         )} \n(Write oprion number)`
//       )
//     );
//     typeof answerInput === "number" &&
//       answerInput <= this.answers.length &&
//       this.answers[answerInput]++;
//   },

//   displayResults(type = "array") {
//     if (type === "array") {
//       console.log(this.answers);
//     } else if (type === "string") {
//       console.log(`Poll results are ${this.answers.join(", ")}`);
//     }
//   },
// };

// const poolBtn = document.querySelector(".poll");
// poolBtn.addEventListener("click", poll.registerNewAnswer.bind(poll));
// poll.displayResults.call({ answers: [5, 2, 3] }, "string");
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// Coding chalenge #2

const body = document.querySelector("body");

(function () {
  const header = document.querySelector("h1");

  header.style.color = "red";

  body.addEventListener("click", () => {
    header.style.color = "blue";
  });
})();

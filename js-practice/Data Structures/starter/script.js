"use strict";

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const hours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   nameRes: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     address,
//   }) {
//     console.log(
//       `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}
//       !`
//     );
//   },
//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your deliciouse pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },
//   orderPizza(mainIngredient, ...otherIngredietes) {
//     console.log(mainIngredient);
//     console.log(otherIngredietes);
//   },
//   hours,
// };

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Solo, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: "Via del Solo, 21",
//   starterIndex: 1,
// });

// restaurant.orderPizza("Mozzarella", "Pomodorro", "Prosciutto cotto");
// restaurant.orderPizza("Mushrooms");
// // Real world example
// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient 1"),
// //   prompt("Let's make pasta! Ingredient 2"),
// //   prompt("Let's make pasta! Ingredient 3"),
// // ];
// // restaurant.orderPasta(...ingredients);

// // With Obj
// const newRestaurant = {
//   foundigYear: 1998,
//   ...restaurant,
//   founder: "Guesseppe",
// };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.nameRes = "Ristorante Roma";
// console.log(restaurant.nameRes);
// console.log(restaurantCopy.nameRes);

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(...newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Join 2 arrays or more
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for (const item of menu) console.log(item);

// console.log(menu);

// const str = "Jhonas";

// const letters = [...str, " ", "S."];
// console.log(letters);
// console.log(...str);

// const { nameRes, openingHours, categories } = restaurant;
// // console.log(nameRes, openingHours, categories);

// const {
//   nameRes: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// // console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;

// // Mutate variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// // console.log(a, b);

// // Nested objects
// // prettier-ignore
// const { fri: { open, close } } = openingHours;
// console.log(open, close);

// const arr = [2, 3, 4];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;

// // Switching using destructuring array's
// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// Coding challenge

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// Challange 1
// 1
// const [player1, player2] = game.players;

// // 2
// const [gk, ...fieldPlayers] = player1;

// // 3
// const allPlayers = [...player1, ...player2];

// // 4
// const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];

// // 5
// // prettier-ignore
// const { odds: { team1, x: draw, team2 } } = game;

// 6
// function printGoals(...players) {
//   console.log(`${players}`);
//   console.log(`${players.length} gols scored!`);
// }

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals("Lewandowski", "Kimmich");
// printGoals(...game.scored);

// team1 < team2 && console.log("Team1 is most likely to win!");

// Challange 2
// const scored = game.scored;
// for (const [i, player] of scored.entries()) {
//   console.log(`Goal ${i + 1} : ${player}`);
// }

// 2
// const oddsValues = Object.values(game.odds);

// Using the reduce method
// let avg = oddsValues.reduce((a, b) => {
//   return a + b;
// });
// let avgResult = avg / oddsValues.length;
// console.log(`The avarage odd is ${avgResult.toFixed(2)}`);

// Using a for of loop
// let avg = 0;

// for (const odd of oddsValues) {
//   avg += odd;
// }
// avg /= oddsValues.length;
// console.log(avg.toFixed(2));

// 3
// for (const [team, odd] of Object.entries(game.score)) {
//   const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

// 4.
// Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value.
// In this game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }

// Bosnus
// let scores = {};
// for (const player of game.scored) {
//   scores[player] ? scores[player]++ : (scores[player] = 1);
// }
// console.log(scores);

// Coding Challange 3

// const gameEvents = new Map([
//   [17, "⚽ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽ GOAL"],
//   [80, "⚽ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

// // 1.
// const events = [...new Set(gameEvents.values())];
// // console.log(events);

// // 2.
// const noRedard = gameEvents.delete(64);
// // console.log(gameEvents);

// // 3.
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// const time = [...gameEvents.keys()].pop();
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// // 4.
// for (const [minute, event] of gameEvents) {
//   const halfs = minute < 50 ? "First" : "Second";
//   console.log(`[${halfs} Half] ${minute}: ${event}`);
// }

// String methods ----------------------------

// function checkMiddleSeat(seat) {
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") console.log("You got the middle seat!😣");
//   else console.log("You got lucky! 👍");
// }
// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// const airline = "TAP Air Portugal";

// Fix Capitalization in name ----------------------------
// const passanger = "jOnAS";
// const passangerLower = passanger.toLowerCase();
// const passangerCorrect =
//   passangerLower[0].toUpperCase() + passangerLower.slice(1);
// console.log(passangerCorrect);

// function correctCapitalization(passanger) {
//   const passangerLower = passanger.toLowerCase();
//   const passangerCorrect =
//     passangerLower[0].toUpperCase() + passangerLower.slice(1);
//   return passangerCorrect;
// }
// console.log(correctCapitalization("lAuREntIU"));
// console.log(correctCapitalization("bIaNcA"));

// Comparing emails ----------------------------
// const email = "hello@jonas.io";
// const loginEmail = " Hello@Jonas.io \n";

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// function normalizeMyEmail(correctEmail, incorrectEmail) {
//   const normalEmail = incorrectEmail.toLowerCase().trim();
//   console.log(normalEmail);
//   return correctEmail === normalEmail;
// }
// console.log(normalizeMyEmail(email, loginEmail));

// // replacing strings ----------------------------
// const priceGB = "288,97£";
// const priceUS = priceGB.replace("£", "$").replace(",", ".");
// console.log(priceUS);

// const announcement =
//   "All passengers come to boarding door 23. Boarding door 23!";
// console.log(announcement.replaceAll("door", "gate"));
// console.log(announcement.replace(/door/g, "gate"));

// Booleans ------------------------------
// const plane = "Airbus A320neo";

// console.log(plane.includes("A320"));
// console.log(plane.includes("Boeing"));
// console.log(plane.startsWith("Air"));

// if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
//   console.log("Part of the new Airbus familly! ✈");
// }

// Practice exercise ---------------------
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();

//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are NOT allowed on board!");
//   } else {
//     console.log("Welcome on board!");
//   }
// };
// checkBaggage("I have a laptop, some Food and a pocket Knife");
// checkBaggage("Socks and a camera");
// checkBaggage("Got some snacks and a gun for protection");

// console.log("a+very+nice+string".split("+"));
// console.log("jonas Schmedtmann".split(" "));

// const [firstName, lastName] = "Jonas Schmedtmann".split(" ");
// console.log(firstName);
// console.log(lastName);

// const newName = [
//   "Mr",
//   firstName.toUpperCase()[0] + firstName.slice(1),
//   lastName,
// ].join(" ");
// console.log(newName);

// const capitalizationName = function (name) {
//   const splitNames = name.split(" ");
//   const namesUpper = [];

//   for (const word of splitNames) {
//     // namesUpper.push(word[0].toUpperCase() + word.slice(1));
//     namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(" "));
// };

// capitalizationName("jessica ann smith davis");
// capitalizationName("jonas schmedtmann");

// Padding --------------------
// const message = "Go to gate 23!";
// console.log(message.padStart(25, "+").padEnd(35, "+"));
// console.log("Jonas".padStart(25, "+").padEnd(35, "+"));
// console.log("Jonas".padStart(25, "+").padEnd(100, "+"));

// const maskCreditCard = function (number) {
//   const str = `${number}`;
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };
// console.log(maskCreditCard(234456778902));
// console.log(maskCreditCard(123475864));
// console.log(maskCreditCard(44903958302385834242));
// console.log(maskCreditCard("6474838764514293q709974298362"));

// const message2 = "Bad weather... All Departures Delayed...";

// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in Line ${"✈".repeat(n)}`);
// };
// planesInLine(2);
// planesInLine(5);
// planesInLine(7);
// planesInLine(1);
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

// My take

// const convertButton = document.querySelector("button");
// convertButton.addEventListener("click", function () {
//   const text = document.querySelector("textarea").value;
//   const str = `${text}`;
//   const splitStr = str.split("\n");

//   const camelCaseArr = [];
//   for (const name of splitStr) {
//     if (name.includes("_")) {
//       // const namesSplit = name.toLowerCase().trim().split("_");
//       // const firstName = namesSplit[0].toLowerCase();
//       // const secondName =
//       //   namesSplit[1].slice(0, 1).toUpperCase() +
//       //   namesSplit[1].slice(1).toLowerCase();
//       // Much easier
//       const [firstName, secondName] = name.toLowerCase().trim().split("_");
//       // Don't need this
//       camelCaseArr.push(firstName + secondName);
//     }
//   }
//   const camelCase = camelCaseArr.join("\n");
//   const emoji = "✅";

//   for (const [i, item] of camelCaseArr.entries()) {
//     console.log(`${item.padEnd(20)} ${emoji.repeat(i + 1)}`);
//   }
// });
// My take 2
// const convertButton = document.querySelector("button");
// convertButton.addEventListener("click", function () {
//   const text = document.querySelector("textarea").value;
//   const names = text.split("\n");

//   for (const [i, name] of names.entries()) {
//     const [firstName, secondName] = name.toLowerCase().trim().split("_");
//     const output = `${firstName}${secondName.replace(
//       secondName[0],
//       secondName[0].toUpperCase()
//     )} `;
//     console.log(`${output.padEnd(20)} ${"✅".repeat(i + 1)}`);
//   }
// });

// Jonnas take
// Best way
// document.querySelector("button").addEventListener("click", () => {
//   const text = document.querySelector("textarea").value;
//   const rows = text.split("\n");

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split("_");
//     // prettier-ignore
//     const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;

//     console.log(`${output.padEnd(20)} ${"✅".repeat(i + 1)}`);
//   }
// });

/*
underscore_case
 first_name
Some_Variable
 calculate_AGE
delayed_departure
*/

// String practice
// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// ..🔴.Delayed Departure from FAO to TXL (11h25)
// ................Arrival from BRU to FAO (11h45)
// ...🔴.Delayed Departure from HEL to FAO (12h05)
// ...............Departure from FAO to LIS (12h30)

"use strict";
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never create a method in the constructure function
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// // The construction function is just a pattern is not a feture in js
// const jonas = new Person("Jonas", 1991);
// const matilda = new Person("Matilda", 2017);
// // const jack = new Person("Jack", 1975);

// // console.log(jonas);
// // console.log(matilda);
// // console.log(jack);

// // const jay = "Jay";
// // console.log(jonas instanceof Person);
// // console.log(jay instanceof Person);

// // Prototypes
// // Prototype inheritance
// // console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));
// This is bad namig of the property, becose the prototype propr
// should be actually the .prototypeOfLinkedObjects
// Person.prototype.species = "Home Sapiens";
// console.log(jonas.species, matilda.species);
// console.log(jonas.hasOwnProperty("firstName"));
// console.log(jonas.hasOwnProperty("species"));

// console.log(jonas.__proto__);
// // Object.prototupe (tope of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 4, 5, 6, 9, 3, 6, 9]; //new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);
// NOT ideal
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique().sort());

// const h1 = document.querySelector("h1");
// console.log(
//   h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__
// );
// console.dir(((x) => x + 5).__proto__);

// OOP coding challenge
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console

// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console

// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them

// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   return this.speed;
// };
// Car.prototype.break = function () {
//   this.speed -= 5;
//   return this.speed;
// };

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);

// console.log(bmw);
// console.log(bmw.accelerate());
// console.log(bmw.break());
// console.log(bmw.accelerate());
// console.log(bmw.break());
// console.log(bmw.accelerate());
// console.log(bmw.accelerate());
// console.log(bmw.break());

// console.log("-----------------------");
// console.log(mercedes);
// console.log(mercedes.accelerate());
// console.log(mercedes.break());
// console.log(mercedes.break());
// console.log(mercedes.break());
// console.log(mercedes.accelerate());
// console.log(mercedes.accelerate());
// console.log(mercedes.accelerate());
// console.log(mercedes.accelerate());

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods will be added to the .prototype property of the Person class
  // witch is the prototype of the Object created by that class
  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // set a property that already exists
  set fullName(name) {
    // console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert("Is not a full name!");
  }

  get fullName() {
    return this._fullName;
  }
  // Static method
  static hey() {
    console.log("Hey there!");
  }
}

const jessica = new PersonCl("Jessica Davis", 1996);

console.log(jessica);
console.log(jessica.__proto__);

// jessica.calcAge();
// jessica.greet();
// PersonCl.hey();

// console.log(jessica.age);
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens, we can call them and return them from function just like with functions
// 3. Classes body are executed in strict mode even if we don't use strict mode in our entier file

// const account = {
//   owner: "jonnas",
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     return this.movements.push(mov);
//   },
// };
// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = "Steven";
// steven.birthYear = 2002;
// steven.calcAge();
// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init("Sarah", 1979);
// console.log(sarah);
// sarah.calcAge();

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is traveling at ${this.speed} km/h`);
//   }
//   break() {
//     this.speed -= 5;
//     console.log(`${this.make} is traveling at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     return (this.speed = speed * 1.6);
//   }
// }

// const bmw = new CarCl("BMW", 120);
// console.log(bmw.speedUS);
// console.log(bmw.speed);
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.break();

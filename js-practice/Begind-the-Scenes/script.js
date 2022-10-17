"use strict";

const date = new Date();

function calcAge(birthYear) {
  const age = date.getFullYear() - birthYear;

  function printAge() {
    let outPut = `${firstName} you are ${age} years old, born in ${birthYear}`;
    console.log(outPut);

    if (birthYear >= 1991 && birthYear <= 1996) {
      var millennial = true;
      // Creating NEW variable with same name as outer scope's variables
      const firstName = "Marcel";

      // Reassigning outer scope's variables
      outPut = "NEW OUTPUT";

      const str = `Oh, and you're a Millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millennial);
    // console.log(add(2, 3));
    console.log(outPut);
  }
  printAge();
}

const firstName = "Jonas";
calcAge(1991);

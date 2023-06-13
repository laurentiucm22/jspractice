"use strict";
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const createUserNames = (accounts) => {
  accounts.forEach((account) => {
    account.username = account.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUserNames(accounts);

const displayMovements = (account, sort = false) => {
  containerMovements.innerHTML = "";

  const movements = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  movements.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov > 0 ? mov : Math.abs(mov)}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = (account) => {
  account.balance = account.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${account.balance} €`;
};

const calcDisplaySummary = (account) => {
  const incoms = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incoms} €`;

  const spendings = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(spendings)} €`;

  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .filter((inter) => inter >= 1)
    .reduce((acc, inter) => acc + inter, 0);

  labelSumInterest.textContent = `${interest.toFixed(1)} €`;
};

function updateUi(account) {
  // Display movements
  displayMovements(account);

  // Display balance
  calcDisplayBalance(account);

  // Display Summary
  calcDisplaySummary(account);
}

// Event listeners
let currentAccount;
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and a welcome message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    updateUi(currentAccount);
  }
});

btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = +inputTransferAmount.value;

  const reciverAccount = accounts.find(
    (account) => account.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    reciverAccount &&
    amount <= currentAccount.balance &&
    reciverAccount?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    reciverAccount.movements.push(amount);
    updateUi(currentAccount);
  }

  inputTransferAmount.value = inputTransferTo.value = "";
  inputTransferAmount.blur();
});

btnLoan.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = +inputLoanAmount.value;

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);

    updateUi(currentAccount);

    inputLoanAmount.value = "";
    inputLoanAmount.blur();
  }
});

btnClose.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const currentAccountIndex = accounts.findIndex(
      (account) => account.username === currentAccount.username
    );

    accounts.splice(currentAccountIndex, 1);

    // Clear inputs filds
    inputCloseUsername.value = inputClosePin.value = "";
    inputClosePin.blur();

    // Logout
    containerApp.style.opacity = 0;
  }
});

let sorted = false;
btnSort.addEventListener("click", (e) => {
  e.preventDefault();

  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const x = new Array(7);
// // x.fill(1);
// x.fill(1, 3, 5);
// // console.log(x);

// arr.fill(23, 2, 6);
// // console.log(arr);

// // Array.from
// const y = Array.from({ length: 7 }, () => 1);
// // console.log(y);

// const z = Array.from({ length: 7 }, (_, index) => index + 1);
// // console.log(z);

// labelBalance.addEventListener("click", () => {
//   const movementsUI = Array.from(
//     document.querySelectorAll(".movements__value"),
//     (el) => +el.textContent.replace("€", "")
//   );
//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll(".movements__value")].map(
//     (el) => +el.textContent.replace("€", "")
//   );
//   console.log(movementsUI2);
// });

//1.
// const bankDepositSum = accounts
//   .flatMap((account) => account.movements)
//   .filter((mov) => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(bankDepositSum);

//2.
// const numDeposits1000 = accounts
//   .flatMap((account) => account.movements)
//   .reduce((count, mov) => count + (mov >= 1000), 0);

// const numDeposits1000 = accounts
//   .flatMap((account) => account.movements)
//   .reduce((count, mov) => (mov >= 1000 ? ++count : count), 0);
// console.log(numDeposits1000);

//3.
// const { deposit, withdrawals } = accounts
//   .flatMap((account) => account.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposit += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? "deposit" : "withdrawals"] += cur;
//       return sums;
//     },
//     { deposit: 0, withdrawals: 0 }
//   );
// console.log(deposit, withdrawals);

// const convertTitleCase = (title) => {
//   const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ["a", "an", "the", "but", "and", "or", "on", "in", "with"];

//   const titleCase = title
//     .toLowerCase()
//     .split(" ")
//     .map((word) =>
//       !exceptions.includes(word) ? word[0].toUpperCase() + word.slice(1) : word
//     )
//     .join(" ");

//   return capitalize(titleCase);
// };

// console.log(convertTitleCase("this is a nice title"));
// console.log(convertTitleCase("this is a LONG title but not to long"));
// console.log(convertTitleCase("and here is another title with an EXAMPLE"));

// Code Challenge 4
// Test data

// Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the
// recommended portion.

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// // 1.
// dogs.forEach((dog) => {
//   dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
// });
// // 2.
// const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));

// // 3. and 4.
// const ownersEatTooMuch = dogs
//   .filter((dog) => dog.curFood > dog.recFood)
//   .flatMap((dog) => dog.owners)
//   .join(" and ");
// console.log(`${ownersEatTooMuch} dogs eat too much!`);

// const ownersEatTooLittle = dogs
//   .filter((dog) => dog.curFood < dog.recFood)
//   .flatMap((dog) => dog.owners)
//   .join(" and ");
// console.log(`${ownersEatTooLittle} dogs eat to little!`);

// // 5.
// console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// // 6.
// const checkEatingOk = (dog) =>
//   dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

// console.log(dogs.some(checkEatingOk));

// // 7.
// const dogsThatEatOkay = dogs.filter(checkEatingOk);
// console.log(dogsThatEatOkay);

// // 8.
// const dogSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
// console.log(dogSorted);

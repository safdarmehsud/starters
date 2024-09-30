'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
// Creating DOM Elements
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//Lecture 003
//Array slice method
// const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// console.log(arr.slice(4));
// console.log(arr.slice(2));
// console.log(arr.slice(6));
// console.log(arr.slice(-1));

//Array reverse method
// const arr2 = ['P', 'a', 'k', 'i', 's', 't', 'a', 'n'];
// console.log(arr.reverse());

//Array concat method
// const letters = arr.concat(arr2);
// console.log(letters.reverse());
//Array join method
// console.log(letters.join('-'));

//Lecture 004
//Array at, length, slice method
// const arrN = [23, 24, 45];
// console.log(arrN[0]);
// console.log(arrN.at(0));
// console.log(arrN[arrN.length - 1]);
// console.log(arrN.slice(-1)[0]);
// console.log(arrN.at(-1));
// console.log('safdar'.at(-1));

//Lecture 005
// looping arrays
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You Deposit ${movement}`);
//   } else {
//     console.log(`You withdraw ${Math.abs(movement)}`);
//   }
// }

// console.log('----FOREACH----');

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1} You Deposit ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdraw ${Math.abs(mov)}`);
//   }
// });

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} You Deposit ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdraw ${Math.abs(movement)}`);
//   }
// }
// Lecture 006;
//With Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

//With Set
// const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'USD', 'EUR']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// Lecture 008 Creating DOM Elements
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

// Lecture 011
const eurToUsd = 1.1;
const movementsUSD = account1.movements.map(function (mov) {
  return mov * eurToUsd;
});
// console.log(movementsUSD);
const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
// console.log(movementsUSDfor);
const movementsUSDs = account1.movements.map(mov => mov * eurToUsd);
// console.log(movementsUSDs);

const movementsDescriptions = movements.map(
  (mov, i, arr) =>
    `Movemnt ${i + 1}: You ${mov > 0 ? 'Deposit' : 'Withdraw'} ${Math.abs(mov)}`
);
// console.log(movementsDescriptions);

// Lecture 013
//The filter method
const deposits = movements.filter(function (mov) {});
console.log(movements);
const Ndeposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(Ndeposits);

const withdrawals = [];
for (const mov of movements) {
  if (mov < 0) {
    withdrawals.push(mov);
  }
}
console.log(withdrawals);

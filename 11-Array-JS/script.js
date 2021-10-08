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

function displayMovements(movements, sort = false) {
  containerMovements.innerHTML = '';
  // textContent = ;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <!-- <div class="movements__date">${i + 1}</div> -->
        <div class="movements__value">${mov}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

// To Display the balance
const calDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};
// To Display account summary
function calDisplaySummary(acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
}
// To creating username = first latter of name
function createUserName(accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      //.map(function (name) { return name[0];}
      .join('');
  });
}
createUserName(accounts);
function updateUI(acc) {
  // display movement
  displayMovements(acc.movements);
  //display balance
  calDisplayBalance(acc);
  // display summary
  calDisplaySummary(acc);
}

let currentAccount;
// Event handler
btnLogin.addEventListener('click', function (e) {
  //Preventing from form submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    // preventing from focus in input field
    inputLoginPin.blur();

    containerApp.style.opacity = 100;
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault(); // prevent to reload page
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing Transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    //update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    console.log(index);
    // index of(23)

    //Delete account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// let sorted = false;
// btnSort.addEventListener('click', function (e) {
//   e.preventDefault();
//   displayMovements(currentAccount.movements, !sorted);
//   sorted = !sorted;
// });

movements.sort((a, b) => a - b);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov) {
  return mov > 0;
});

const depositFor = [];
for (const mov of movements) if (mov > 0) depositFor.push(mov);

const withdrawal = movements.filter(mov => mov < 0);

// accumulator is SNOWBALL
const balance = movements.reduce((acc, cur) => acc + cur, 0);
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i} ${acc}`);
//   return acc + cur;
// }, 0);

const euroToUsd = 1.1;
//PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);

/////////////////////////////////////////////////

// Array in Javascript and its method
/*
const arr1 = ['a', 'b', 'c', 'd', 'e'];
//// SLICE method /////
console.log(arr1.slice(2));
//output: ["c", "d", "e"]
console.log(arr1.slice(2, 4));
//output: ["c", "d"]
console.log(arr1.slice(-2));
//output: ["d", "e"]
console.log(arr1.slice(-1));
//output: ["e"]
console.log(arr1.slice(1, -2));
//output: ["b", "c"]
console.log(arr1.slice());
//output: ["a", "b", "c", "d", "e"]
console.log([...arr1]);
//output: ["a", "b", "c", "d", "e"]

//SPLICE method
arr1.splice(-1);
console.log(arr1);
//output: ["a", "b", "c", "d"]
arr1.splice(1, 2);
console.log(arr1);
//output: ["a", "d"]

// REVERSE
//arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
//output: ["f", "g", "h", "i", "j"]
console.log(arr2);
//output: ["f", "g", "h", "i", "j"]

// CONCAT method
const letter = arr1.concat(arr2);
console.log(letter);
//output: ["a", "d", "f", "g", "h", "i", "j"]
console.log([...arr1, ...arr2]);
//output: ["a", "d", "f", "g", "h", "i", "j"]

// JOIN method
console.log([letter.join(' - ')]);
// output: ["a - d - f - g - h - i - j"]

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// If we need to break out of loop, then should be use the "for of".
// parameter passes to for must be understand
for (const [i, move] of movements.entries()) {
  if (move > 0) {
    console.log(`Movement: ${i + 1}, You have deposited ${move}`);
  } else {
    console.log(`Movement: ${i + 1}, You have withrawal ${Math.abs(move)}`);
  }
}
console.log('---- FOR EACH ----');
// forEach can not break instead of loop whole array
// forEach order of parameter is important and must be same as in below shows
movements.forEach(function (move, i, arr) {
  if (move > 0) {
    console.log(`Movement: ${i + 1}, You have deposited ${move}`);
  } else {
    console.log(`Movement: ${i + 1}, You have withrawal ${Math.abs(move)}`);
  }
});
*/
// forEach use
/*
const currencies = new Map([
  ['INR', 'Indian Rupees'],
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//set
const currenciesUnique = new Set(['INR', 'USD', 'EUR', 'GBU', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

// Coding Challenge #1
/*
function checkDogs(dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  //dogsJulia.slice(1, 3);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy.`);
    }
  });
}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

// Coding Challenge #2
/*
function calcAverageHumanAge(ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);


  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average;
}

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);
*/

// Coding Challenge #3
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
/*
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);
*/

// Find method
/*
const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');

console.log(account);
*/

console.log(movements);

// To checking Equality
console.log(movements.includes(-130)); // Output: True

// Condition
console.log(movements.some(mov => mov > -130));

const anyDeposits = movements.some(mov => mov > 0); // Output: True
console.log(anyDeposits);

// Every method
console.log(` 👉 ${movements.every(mov => mov > 0)}`);
console.log(account4.movements.every(mov => mov > 0));

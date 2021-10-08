'use strict';

/* Default Parameter
const bookings = [];

const createBooking = function (flightNum, flightPassanger = 1, flightPrice = 199 * flightPassanger) {
const flBookings = {
    flightNum, 
    flightPassanger, 
    flightPrice,
};
console.log(flBookings);
bookings.push(flBookings);
};

createBooking('VT215');
createBooking('VT205', 2, 800);
createBooking('VT502', 5);
createBooking('VT502', undefined, 500);
*/

// How passing arguments works: value vs. reference //
/*
const flightNo = 'VS-217';
const omkar = {
  name: 'Omkar Pandit',
  passportID: 2487596432,
};

function checkIn(flightNo, passengerN) {
  flightNo = 'VS-502';
  passengerN.name = 'Mr ' + passengerN.name;

  console.log(passengerN.name);

  if (passengerN.passportID === 2487596432) {
    console.log('CheckIn Successfully');
  } else {
    console.log('Wrong Passport!');
  }
}

// checkIn(flightNo, omkar);
// console.log(flightNo);
// console.log(omkar);

const flightNum = flightNo;
//const flightPassanger = omkar;

function newPassport(person) {
  person.passportID = Math.trunc(Math.random() * 10000000000);
  console.log(person.passengerN);
}
console.log('hello');
//newPassport(omkar);
checkIn(flightNum, omkar);
*/

// First-class and Higher-order functions
// Function accepting callback functions
function singleWord(str) {
  return str.replace(/ /g, '').toLowerCase();
}

function capitalFirstWord(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

// Higher order function
function toChangedWord(str, func) {
  console.log(`Orginal String: ${str}`);
  console.log(`Changed String: ${func(str)}`);

  console.log(`Changed By: ${func.name}`); // "name" is the property
}

toChangedWord('Javascript is the best language !', capitalFirstWord);

toChangedWord(`Javascript is the best language !`, singleWord);

// Javascript uses call back all the time
function handFi() {
  // console.log('👋');
}

document.body.addEventListener('click', handFi);
['Omkar', 'Anil', 'vinod'].forEach(handFi);

//function returning function
function greet(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}
// Alternative of above function using arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
const greetHey = greet('Hello');

greetHey('Omkar');
greetHey('Vinod');

greet('Hello')('Vinod');

greetArr('Hi')('Omkar');

// call and applied method
const vistara = {
  airline: 'Vistara',
  acode: 'VS',
  booking: [],
  //book: functions
  book(flightNum, name) {
    console.log(
      `${name} booked seat on ${this.airline} flight ${this.acode}${flightNum}`
    );
    this.booking.push({ flight: `${this.acode}${flightNum}`, name }); // push data in booking object array
  },
};

vistara.book(2035, 'Omkar');

vistara.book(4055, 'Vinod');
console.log(vistara);

const asiawings = {
  airline: 'Asiawings',
  acode: 'AS',
  booking: [],
};

const book = vistara.book;
//Does not work
//book(25, ''Sarah Willam)

// Important to Remember: Function has really just and object and object have methods = > book is function/object and call is method of an function/object
book.call(asiawings, 26, 'Jonas Madan');
console.log(asiawings);

book.call(vistara, 2369, 'Vishal Shende');
console.log(vistara);

const kingfisher = {
  airline: 'Kingfisher Airline',
  acode: 'KG',
  booking: [],
};

book.call(kingfisher, 9587, 'Tejas Kadam');
console.log(kingfisher);

// Apply method
// const flightData = [2014, 'Chintamani Solankhe'];
// book.apply(kingfisher, flightData);
// console.log(kingfisher);
// book.call(kingfisher, ...flightData);

// Bind method
const bookvs = book.bind(vistara);
const bookaw = book.bind(asiawings);
const bookkf = book.bind(kingfisher);

bookvs(26, 'Allon Solly');

const bookvs28 = book.bind(kingfisher, 28);
bookvs28('Abhi Das');
bookvs28('Mangesh Londhe');

console.log(kingfisher);

// With event Listener
vistara.planes = 100;
vistara.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', vistara.buyPlane.bind(vistara));

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// Function returns function
function addTaxRate(rate) {
  return function (value) {
    return value + value * rate;
  };
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

// Coding Challenge #1
//Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.

// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
// The Complete JavaScript Course 21
// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]

//creating "poll" object
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answer: new Array(4).fill(0),
  // object method
  registerNewAnswer() {
    // Get Answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    //register answer
    typeof answer === 'number' &&
      answer < this.answer.length &&
      this.answer[answer]++;
    this.displayResult();
    this.displayResult('string');
  },
  displayResult(type = 'array') {
    if (type === 'array') {
      console.log(this.answer);
    } else if (type === 'string') {
      //poll result are 13,2,4,1
      console.log(`Poll result are: ${this.answer.join(', ')}`);
    }
  },
};
//poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResult.call({ answer: [5, 2, 3] }, 'string');

// Closer Example
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

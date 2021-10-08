'use strict';

// In OOP convention: constructor function is always start with first capital latter
// arrow function are not work here beacuse it doest have its own "this" keyword and we need that.
function Person(firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   Never do this: never create method inside the constructor function
  //   this.calcAge = function () {
  //     console.log(2021 - this.birthYear);
  //   };
}
//constructor function call with "new" keyword
const omkar = new Person('Omkar', 1993);
const manish = new Person('Manish', 1998);
console.log(omkar, manish);

Person.prototype.calaAge = function () {
  console.log(2021 - this.birthYear);
};

omkar.calaAge();
manish.calaAge();

Person.prototype.species = 'Homo Sapiens';
console.log(omkar, manish);

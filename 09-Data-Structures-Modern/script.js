'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 10, // Open 24 hours
      close: 24,
    },
  },
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({starterIndex, mainIndex, time, address}) {
    console.log(`Order Received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} wil be delivered to ${address} at ${time}`);
  },
  orderPasta: function(item1, item2, item3){
    console.log(`Here is your delicious pasta with ${item1}, ${item2} and ${item3}.`);
  }
};
restaurant.orderDelivery({
  time: '23:30',
  address: 'Via de la street, 25',
  mainIndex: 2,
  starterIndex: 2
});

//Destructuring Object
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starter = []} = restaurant;
console.log(menu, starter);

// Mutating variables
let a = 124;
let b = 150;
const obj = {a: 8, b: 7, c: 6};
({a, b} = obj);
console.log(a, b);

// Nested object
const {sat: {open: d, close: e}} = openingHours;
console.log(d, e);


/******* Destructuring Array *******
const arr = [5, 6, 8];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);
 
let [first, , second] = restaurant.categories;
console.log(first, second);

// Swiching variables
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

[first, second] = [second, first];
console.log(first, second);
console.log(restaurant.order(2, 0));

// Receive 2 values from a function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

//nested destructuring
const nested = [9, 5, [4, 3]];
// const [i, j] = nested;
console.log(nested);
// console.log(i, j);

const [j, , [m, n]] = nested;
console.log(j, m, n);

// Default values
//const [e, f, g] = [8, 9]; // g = undefined
const [e = 1, f = 1, g = 1] = [8, 9];
console.log(e, f, g);
*/


// Spread Operator (...)
console.log('Spread Operator Example');
function sum(a, b, c, d){
  return a + b + c;
}
const number = [1, 2, 3, 4];

console.log(sum(...number));
// output: 6

// Task join two array
const menuNew = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuNew);

// Real World Examples
const ingredients = ['mashroom', 'cheees', 'gralic'];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Object
const newRestaurant = {founded: 2010, ...restaurant, founder: 'Xamper'}
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurant.name = 'Coffico Indiana';
console.log(restaurantCopy.name);
console.log(restaurant.name)

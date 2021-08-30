"use strict"; // this use to identify the bug and error and make your code reliable....

//This is the simple javascript "function" declaration and its use example
/*
function logger(){
    console.log("Hello, This is Javascript Function");
}

logger();

function myfruitprocessor(mango, jackfruit){
    const juice = `This is fruit processor and juice of ${mango} mangos and ${jackfruit} jackfruits`;
    return juice;
}

const fruitJuice = myfruitprocessor(2, 5);

console.log(fruitJuice)

const fruitJuiceNew = myfruitprocessor(8, 5)
console.log(fruitJuiceNew);
*/

// Function Declaration and Function Expression


// Function Declaration
/*
function calAge1(birthYear){
return 2021 - birthYear;
}
const age1 = calAge1(1993);
console.log(age1);

// Function Expression
const calAge2 = function(birthYear){
    return 2021 - birthYear;
}
const age2 = calAge2(1995)
console.log(age2);
*/

// This is one of the types of function declartaion called as function declartion
function cutFuitPieces(fruit){
    const cutFuitPieces = fruit * 2;
    return cutFuitPieces;
}

//This is another type of function declaration called function expression -- store function in variable
/*
const fruitProcessor = function (apple, orange){
const cutFruitApple = cutFuitPieces(apple);
const cutFruitOrange = cutFuitPieces(orange);

const juice = `Juice with ${cutFruitApple} apples and ${cutFruitOrange} Oranges`;
return juice;
}

console.log(fruitProcessor(2, 3));

//This is another and last types of function declartion called Arrow Function
const calAge3 = birthYearNew => 2021 - birthYearNew;
const age3 = calAge3(1993);
console.log(age3); 

const yearRetirement = (birthYearNew, firstName) => {
    const ageNew = 2021 - birthYearNew;
    const retirement = 60 - ageNew;
    return `${firstName} retires in ${retirement}`;
}
console.log(yearRetirement(1993, 'Omkar'));
*/


/*
// JavaScript Fundamentals – Part 2
// Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
*/
/*
console.log("This Coding challange 👇👇👇");

const calcAverage = (n1, n2, n3) => (n1 + n2 + n3) / 3;
console.log(calcAverage(65, 66, 85));

//Test data - 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65,54, 49);

console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolhins, avgKoalas){
if(avgDolhins >= 2 * avgKoalas){
    console.log(`Dolphins Win th trophy 🏆, ${avgDolhins} vs. ${avgKoalas}`);
} else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas Wins the trophy 🏆, ${avgKoalas} vs. ${avgDolhins}`);
} else {
    console.log("No one wins the trophy 😓");
}
}

checkWinner(scoreDolphins, scoreKoalas);

//Test data - 2
checkWinner(74, 150);
*/

/* Coding challenge  */
/*
console.log("Creating a simple tip calculator using array 👇👇👇")

const billAmount = [250, 300, 150];
const tip = [calTip(billAmount[0]), calTip(billAmount[1]), calTip(billAmount[2])]

const total = [billAmount[0] + tip[0], billAmount[1]+ tip[1], billAmount[2] + tip[2]];

console.log(billAmount, tip, total);

function calTip(billAmount){
    return billAmount >=50 && billAmount <= 300 ? billAmount * 0.15 : billAmount * 0.20;
}
*/

/* Object in JavaScript */
/*
const omkar = {
    firstName: "Omkar",
    lastName: "Pandit",
    age: "28",
    job: "Developer",
    friends: ["Vinod", "Anil", "Vishal"]
};
console.log(omkar);

console.log(omkar.lastName);

const nameKey = "Name";

console.log(omkar["first"+nameKey]);
console.log(omkar["last"+nameKey]);

const intrestedIn = "job";
//prompt("What do you know you want about omkar, choose from firstName, lastName, age, job, friends ");

if(omkar[intrestedIn]){
    console.log(omkar[intrestedIn]);
} else {
    console.log("wrong choice, try again");
}

omkar.location = "India";

//call the friend[0] array in omkar object
console.log(`${omkar.firstName} has most close friend is ${omkar.friends[0]} `);
*/

/* Object and methods in JavaScript */
//Object
/*
const omkar = {
    firstName: "Omkar",
    lastName: "Pandit",
    birthYear: 1993,
    job: "Developer",
    friends: ["Vinod", "Anil", "Vishal"],
    hasDrivingLicense: true,

    //method: method is nothing but an function, method is perform actions on object
    calcAge: function(){
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    //method:
    getDetails: function(){
        return `${this.firstName} is a ${this.calcAge()} - years old and he has ${this.hasDrivingLicense ? "a" : "no"} driving license...`
    }
};
console.log(omkar.calcAge());
console.log(omkar.getDetails());
*/

// *** Coding Challenge #3 *********
/*
//Object Creation
const mark = {
    fullName: "Mark Miller",
    mass: "92",
    height: "1.95",

    // Object Method
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
//Object Creation
const john = {
    fullName: "John Smith",
    mass: "78",
    height: "1.69",

    //Object Method
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

//method calling for calculating the BMI
mark.calcBMI();
john.calcBMI();

console.log(`Mark Miller BMI: (${mark.bmi})`);
console.log(`John Smith BMI: (${john.bmi})`);

if(mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is Higher than John's BMI (${john.bmi}) !`)
    } else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than Mark's BMI (${mark.bmi}) !`)
}
*/

// *** Control Structure: for loop ****************
//simple example of for loop
/*
for(let rep = 1; rep <= 10 ; rep++){
    console.log(`This is repetation string ${rep}`);
}
*/

// ** Array using for and adding data in array using for loop
/*
const yearN = [1991, 1998, 2001, 2009];
const ages = [];

for(let i = 0; i < yearN.length ; i++){
    ages.push(2021 - yearN[i]);
}
console.log(ages);
*/

// object
/*
const omkar = [
    "omkar",
    "pandit",
    2021 - 1993,
    "developer",
    ["vinod", "anil", "vishal"],
    true
]

const types = [];

for(let i=0; i < omkar.length ; i++){
    console.log(omkar[i], typeof omkar[i]);

    types.push(typeof omkar[i]);
}
console.log(types);

//continue and break
for(let i = 0; i < omkar.length ; i++){
    if(typeof omkar[i] !== "string") continue;//continue statement working

    console.log(omkar[i], typeof omkar[i]);
}

for(let i = 0; i< omkar.length; i++){
    if(typeof omkar[i] === "number") break;//break statement working:=> if they are found number immediatly break the object array
    console.log(omkar[i], typeof omkar[i]);
}
*/

//Loopin backward and loops in inside loops
//Array 
/*
const omkar = [
    "omkar",
    "pandit",
    2021 - 1993,
    "developer",
    true
];

for(let i = omkar.length - 1 ; i >= 0 ; i--){
    console.log(i, omkar[i]);
}
*/
//Loop in inside loop
/*
for(let exercise = 1; exercise < 4; exercise++){
    console.log(`---- Starting Exercise ${exercise} 🤸‍♀️🤸‍♂️...`);

    for(let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise}: This is weight lifting repetition ${rep} 🏋️‍♂️🏋️‍♀️.`);
    }

}
*/
/*
//while loop demo
console.log("-----This is starting while loop-------")

let i = 0;

while(i < omkar.length){
    console.log(i, omkar[i]);
    i++;
}
*/

//Coding Challenge #4 : Let's improve Steven's tip calculator even more, this time using loops!
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const total = [];

function calcTip(bills){
    return bills >=50 && bills <= 300 ? bills * 0.15 : bills * 0.20;
} 

//calculating tips
/*
for(let i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]));
}
//calculating total= bills + tips
for(let i = 0; i < bills.length; i++){
    total.push(tips[i] + bills[i]);
}
*/
for(let i = 0; i < bills.length; i++){
    const tip = (calcTip(bills[i]));
    tips.push(tip);
    total.push(tip + bills[i])
}

console.log(bills, tips, total);

//Bonus: Write a function 'calcAverage' which takes an array called 'arr' asan argument. This function calculates the average of all numbers in the given array.
const calcAverage = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(total));
console.log(calcAverage(tips));





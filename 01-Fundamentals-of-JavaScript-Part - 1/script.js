/*
const firstName = "Omkar";
let lastName = "Pandit";

lastName = "Tejas";


const myAddress = "Phaltan";
// myAddress = "Pune";
// const variable value could not rechange further
// var variable is older way to declare variable


console.log(firstName)
console.log(lastName)
console.log(myAddress)

let a = 30;
let b = 20;

// var and let are similar -- variable declaration example
let total = a + b;
total = a * b;
total = a / b;
console.log(total)

// *** Coding challenge ***************
console.log("Below are first coding challange 👇👇👇")

const massMark = 84;
const heightMark = 1.89;

const massJonh = 78;
const heightJonh = 1.72;

const BMIMark = massMark / heightMark ** 2;
const BMIJonh = massJonh / (heightJonh * heightJonh); //this is another formula
markHigherBMI = BMIMark < BMIJonh;

console.log(BMIMark, BMIJonh);
console.log(markHigherBMI);

// *** Coding Challenge ******************

if(BMIMark < BMIJonh){
console.log(`John BMI (${BMIJonh}) is Higher than Mark (${BMIMark}) `)
} else {
console.log(`Mark BMI (${BMImark}) is higher than John (${BMIJonh})`)
}


// *** 17. Strings and Template Literals Example. ********

const firstNameNew = "Omkar";
const job = "Web Developer";
const birthYear = 1993;
const year = 2021;

const stringNew = "I'am " + firstNameNew + ", a " + (year - birthYear) + " year old " + job + "!";

console.log(stringNew)

const stringNewOne = `I'am ${firstNameNew}, a ${year - birthYear} years old ${job}!`

console.log(stringNewOne)

//multiple line string
console.log(`This 
is multiple 
line comment :)`)

console.log("------------------------")
*/

/* 25.Codding Challenge #3 */
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

const teamDolphinsScore = (97 + 112 + 94) / 3;
const teamKoalasScore = (109 + 95 + 99) / 3;
console.log(teamDolphinsScore, teamKoalasScore);

if(teamDolphinsScore > teamKoalasScore && teamDolphinsScore >= 100){
console.log("Team Dolphins Win the trophy 🏆");
} else if (teamKoalasScore > teamDolphinsScore && teamKoalasScore >= 100) {
console.log("Team Kolas Win the trophy 🏆");
} else if (teamDolphinsScore === teamKoalasScore &&teamDolphinsScore >= 100 && teamKoalasScore >= 100) {
console.log("Both team are wins trophy 🏆");
} else {
console.log("No one wins trophy 😣");    
}

/* Switch case */
const day = "Wednesday"

if(day === "Monday"){
console.log("Today is monday");
} else if(day === "Tuesday" || day === "Wednesday"){
console.log("Today is Tuesday or Wednesday");
}

/* Coding Challenge #4 */
/* 
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
*/

const bill = 408;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill + tip}`)


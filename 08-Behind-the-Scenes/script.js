'use strict';

// Before ES6 (2015), JavaScript had only "Global Scope" and "Function Scope".
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.

//function scope variable
function calAge(birthYear){
const age = 2021 - birthYear;

// parent function/block
function first(){
    let output = `${firstName}, You are ${age} and your birthyear: ${birthYear}.`;
    console.log(output);
    // block scope
    if(birthYear >= 1981 && birthYear <= 1996){
        var millenial = true; // var variables are function scope, no matter it will declared inside or outside the block.
        const str = `Oh, and you are millenial, ${firstName}`;
        
        //console.log(str);  // child function/block
        function add(a, b){
            return a + b;
        }
        // Reassigning outer scope variable
        output = 'New Output !!!'; // manipulating of "parent scope" variable/output in "child scope"
    }
    console.log(millenial);
    // console.log(add(5,8)); // in "use strict" mode it will shows error: Uncaught ReferenceError: add is not defined
 console.log(output); // to display manipulated output by child
}
first();
return age;
}
//Global scope variable
const firstName = 'Omkar'; 
console.log(calAge(1993));
//const firstName = 'Omkar'; //if this variable declared below the calAge Function: Uncaught ReferenceError: Cannot access 'firstName' before initialization

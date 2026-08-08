/*
Functions
================
1. Function is a block of code that can be executed when it is called.
2. Function is used to perform a specific task and can be reused multiple times in the program.
3. Function can take input parameters and return output values.
4. Function can be declared using function keyword or arrow function syntax (ES6).
5. Function can be named or anonymous.


1. Function Declaration: A function that is declared using the function keyword and has a name.
2. Function Expression: A function that is assigned to a variable and can be anonymous.
    2.1. Anonymous function: A function that does not have a name and is usually assigned to a variable or passed as an argument to another function.
    2.2. Arrow Function: A function that is declared using the arrow syntax (=>) and can be anonymous.

*/

console.log("---------Function Declaration--------------");

//functon definition
function test1(){
    console.log("This is a function declaration - test1");
}

//function call
test1();

//--------------------------------------------------------------

console.log("---------Function Expression--------------");
console.log("---------Anonymous Function--------------");

//functon definition
let test2 = function(){
    console.log("This is an anonymous function expression - test2");
}

//function call
test2();
console.log("type of test2 is: ",typeof test2); //function

//--------------------------------------------------------------

console.log("---------Function Expression--------------");
console.log("---------Arrow Function--------------");

//functon definition
let test3 = () => {
    console.log("This is an arrow function expression - test3");
}

//function call
test3();
console.log("type of test3 is: ",typeof test3); //function
//--------------------------------------------------------------
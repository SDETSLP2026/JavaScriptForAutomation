/*
var type: redeclaration and reassignment is allowed.
let type: redeclaration is not allowed but reassignment is allowed.
const type: redeclaration and reassignment is not allowed.
*/

var bookName = "Java";

//Redeclaration
var bookName = "Python"; // This is allowed for var type
console.log("bookName is: " + bookName); //Python

//Reassignment
bookName = "JavaScript"; // This is allowed for var type
console.log("bookName is: " + bookName); //JavaScript

console.log("----------------------------");

let toolName = "Playwright";

//Redeclaration
//let toolName = "Selenium"; // This is not allowed for let type - Uncaught SyntaxError: Identifier 'toolName' has already been declared
console.log("toolName is: " + toolName); //Playwright

//Reassignment
toolName = "Selenium"; // This is allowed for let type
console.log("toolName is: " + toolName); //Selenium

console.log("----------------------------");

const pi = 3.14;
//Redeclaration
const pi = 3.14159; // This is not allowed for const type - Uncaught SyntaxError: Identifier 'pi' has already been declared
console.log("pi is: " + pi); //3.14

//Reassignment
//pi = 3.14159; // This is not allowed for const type - Uncaught TypeError: Assignment to constant variable.
console.log("pi is: " + pi); //3.14

console.log("----------------------------");
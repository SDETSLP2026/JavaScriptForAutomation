/*
Strings_Assignment-4
PS: Remove all spaces from a string.
Input: “Welcome to learn playwright”
Output:”Welcometolearnplaywright”
*/

let str = "Welcome to learn playwright";

// Remove all spaces using replace() method with regex
let result = str.replaceAll(" ", "");

console.log("String after removing all spaces: " + result);
// String after removing all spaces: Welcometolearnplaywright
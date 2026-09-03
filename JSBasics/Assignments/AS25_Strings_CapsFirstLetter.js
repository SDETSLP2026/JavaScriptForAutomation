/*
Strings_Assignment-3
PS: Capitalize the first letter of a string.
Input: “javascript”
Output: “Javascript”
*/

let str = "javascript";
let capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
console.log("String with capitalized first letter: " + capitalizedStr);

//String with capitalized first letter: Javascript
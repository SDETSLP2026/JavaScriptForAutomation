/*
Strings_Assignment-7
PS: Reverse a string with & without using the built-in reverse() method.
*/

let str = "Playwright with JavaScript Typescript";

// With using reverse() method
let reversedStr = str.split("").reverse().join("");
console.log(reversedStr); //tpircsepyT tpircSavaJ htiw thgirwyalP

// Without using reverse() method
let revStr = "";
for(let i=str.length-1; i>=0; i--){
    revStr = revStr + str.charAt(i);
}

console.log(revStr); //tpircsepyT tpircSavaJ htiw thgirwyalP

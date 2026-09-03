/*
Strings_Assignment-5
PS: Find the number of characters in a string with and without using length.
*/

let str1 = "Playwright is webui and api testing end to end framework";

//with using length property
console.log("Length of total characters: " + str1.length); //56

//---------------------------------------------------------------------

//without using length property
let count = 0;

for (let i = 0; str1[i] !== undefined; i++) {
    count++;
}

console.log("Length of total characters: " + count); //56
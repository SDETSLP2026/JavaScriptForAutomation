/*
Strings_Assignment-2
PS: Remove duplicate characters from a string.
Input: “Programming”
Output:Progamin
*/

let str = "Programming";
let result = "";

for (let i = 0; i < str.length; i++) {
    if (result.indexOf(str[i]) === -1) { //-1 means the character is not present in the result string
        result = result + str[i];
    }
}

console.log("String after removing duplicates: " + result);
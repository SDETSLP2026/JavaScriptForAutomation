/*
Strings_Assignment-6
PS: Count the number of vowels in a string.
Input:”Javascript”
Output: 3
*/

let str = "Javascript";
let vowelcount = 0;
let consonantcount = 0;

for(let i=0; i<str.length; i++){
    let ch = str.charAt(i).toLowerCase();
        if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
            vowelcount++;
        } else {
            consonantcount++;
        }
    }

console.log("Number of vowels: " + vowelcount); // 3
console.log("Number of consonants: " + consonantcount); //7
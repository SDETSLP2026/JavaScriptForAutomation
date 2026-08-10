/*
Loops_Assignment-6
PS: Find the largest digit
Input: 58329
Output: 9
*/

let num = 58329, rem, largest = 0;
let temp = num;

while(temp>0){
    rem = temp % 10;
        if(rem > largest){
            largest = rem;
        }
    temp = Math.floor(temp/10);
}

console.log("Largest of " + num + " is " + largest);
// Output: Largest of 58329 is 9
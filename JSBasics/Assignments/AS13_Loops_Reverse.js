/* 
Loops_Assignment-2
PS: Reverse a number using a loop. 
Input:1234 
Output:4321
*/

let num = 1234, rem, rev=0;
console.log("Number before reverse: " + num);

while(num > 0){
    rem = num % 10;
    num = Math.floor(num / 10);
    rev = rev*10 + rem;
}

console.log("Number after reverse: " + rev);

/* 
Output:
Number before reverse: 1234
Number after reverse: 4321
*/
/*
Loops_Assignment-5
PS: Count number of Digits
Input: 12345
Output: 5
*/

let num = 12345, count = 0, rem;

let temp = num;

while(temp>0){
    rem = temp % 10;
    temp = Math.floor(temp/10);
    count++;
}

console.log("Number of digits in " + num + " is - " + count);

// Output: Number of digits in 12345 is - 5
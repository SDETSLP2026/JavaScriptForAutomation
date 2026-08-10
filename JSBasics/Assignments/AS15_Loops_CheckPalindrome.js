/* 
Loops_Assignment-4
PS: Check if 121 is a Palindrome Number. 
Palindrome number: A palindrome number is a numerical sequence that reads the same forwards and backward.
It remains unchanged even when reversed, retaining its original identity.

Here, we can use the reverse number logic. If the original & reversed numbers are same then we can say it is a Palindrome number.

*/

let num = 121, rem, rev=0;

let temp = num; //We need original number to compare, so it is copied to temp variable.

while(temp > 0){
    rem = temp % 10;
    temp = Math.floor(temp / 10);
    rev = rev*10 + rem;
}

if(num === rev){
    console.log(rev + " - is a Palindrome number");
} else {
    console.log(rev + " - is a not a Palindrome number");
}
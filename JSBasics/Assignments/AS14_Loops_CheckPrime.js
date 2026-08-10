/* 
Loops_Assignment-3
PS: Check whether a number 7 is prime or not.
Prime number: A prime number is a whole number greater than 1, which has no positive divisors other than 1 and itself.
*/

let num = 7;
let isPrime = true;

//As we know the number is 7 - we are skipping to check the number is <=1.

for(let i=2; i<num; i++){
    if(num % i === 0){
        isPrime = false;          
    }
}

if(isPrime === true){
    console.log(num + " - This is a Prime number.");
} else {
    console.log(num + " - This is a not a Prime number.");
}
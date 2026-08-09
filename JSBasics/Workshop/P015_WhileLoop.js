/*
Loop
=============
For Number of iterations/executions we use loop

1.for loop
------------------
- When number of iterations are fixed then use for loop
scenario: 
calendar - fixed no of days 30/31/28/29
list/menu/dropdown

2.While loop
---------------
- entry controlled loop
- When number of iterations are not fixed
Scenario: Pegination logic,month selection, page load timeout for every page

3.do-while
-----------
- exit control loop
- when only one time iteration is expected without matter what condition result it is then use dowhile

Wonking with Array/Object
=========================
1. for...of loop
2. for...in loop

*/

// Print hello statement 5 times using while loop

let i = 1;                  //Initialization

while(i<=5){                // Condition
    console.log("Hello");   // Statement
    i++;                    // Increment
    
}

console.log("----------------------------------------------");


/* Number of iterations are unknown : Sum of digits logic
num = 12 => 1 + 2 = 3
num = 123 => 1 + 2 + 3 = 6
num = 123 => 1 + 2 + 3 + 4 = 10

The digit count is not fixed.
*/

let num = 102034, rem, sum = 0;

while(num > 0){
    rem = num % 10;             // Using remainder the last degit can be extracted
    num = Math.floor(num/10);   // This step will extract the number after slicing last digit
    sum = sum + rem;            // one by one the number is extracted and added 
}

console.log("Sum of digits : " + sum); // 10

console.log("----------------------------------------------");

// Reverse number logic
let num1 = 12345, rem1, rev = 0;

while(num1 > 0){
    rem1 = num1 % 10;
    num1 = Math.floor(num1 / 10);
    rev = rev*10 + rem1;
}

console.log("Reversed number is : " + rev);

console.log("----------------------------------------------");

/*
let j = 1;
while(j<=10){
    console.log("Welcome...!"); // This will run infinite times as increment statement is not given.
}
*/
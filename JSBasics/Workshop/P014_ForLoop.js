/*
Loop
=============
For Number of iterations/executions - we use loop

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
Scenario: Pegination logic, page load timeout for every page

3.dowhile
-----------
- exit control loop
- when only one time iteration is expected without matter what condition result it is then use dowhile

4. Wonking with Array/Object
=========================
1. for...of loop
2. for...in loop


*/

console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");

console.log("--------------------------");

for(let i = 1; i <= 5; i++){
    console.log("Hello");
}

console.log("--------------------------");

// Print 1 to 10 numbers

for(let i = 1; i <= 10; i++){
    console.log(i);
}

console.log("--------------------------");

// Print 10 to 1 numbers

for(let i = 10; i >= 1; i--){
    console.log(i);
}

console.log("--------------------------");

// Factorial of a number
// 5! = 5 x 4 x 3 x 2 x 1 = 120

let fact = 1;
for(let i=5; i>=1; i--){
    fact = fact * i;
}

console.log("Factorial of number 5 is: " + fact);

console.log("--------------------------");

// sum of 100 natural numbers 
// 1+2+3+4+.......+100 = 5050

let sum = 0;

for(let i=1; i<=100; i++){
    sum = sum + i;
}

console.log("sum of 100 natural numbers: " + sum);

console.log("--------------------------");

//by default for loop conditions are always true
for(;;){
    console.log("Hi"); //
    
}
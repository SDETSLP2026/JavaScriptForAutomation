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
- when only one time iteration is expected without matter what condition result it is then use do-while

Wonking with Array/Object
=========================
1. for...of loop
2. for...in loop

*/

// To print Playwright for 10 timesa

let i = 1;                          //Initialization

do{
    console.log("Playwright");      //Statement
    i++;                            //Increment
}while(i<=10);                      //Condition

console.log("---------------------------------------");

// do-while loop is used when at least 1 execution is expected.

let j = 1;

do{
    console.log(j);
    j++;
}while(j>5);

// This will print only 1 and exit the loop

console.log("---------------------------------------");

/*
let k = 1;
do{
    console.log("Hi");
}while(k<10);
*/
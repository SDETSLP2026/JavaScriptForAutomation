/*
Functions
===================
1.Function declaration
2.Function Expression
    2.1.Anonymous function(function without name)
    2.2.Arrow function(short hand function)

Rules - 
- Anonymous function should be assigned to a variable.
- If function is returning anything, it should be received using a variable or print it directly.  

*/

console.log("----Anonymous function without parameter-----");

// Define function
let test1 = function(){
    console.log("We are calling an annonymous function.....");
}

// Call function
test1(); //We are calling an annonymous function.....
console.log(typeof test1); // function

//----------------------------------------------------------------------------

console.log("----Anonymous function with parameter-----");

// Define function
let test2 = function(id,fname){
    console.log("Hello " + fname + ", your id is: " + id);
}

// Call function
test2(101, "Kiran"); //Hello Kiran, your id is: 101

//----------------------------------------------------------------------------

console.log("----Anonymous function with parameter and return keyword-----");

// Define function
let test3 = function(msg){
    return msg;
}

// Call function
//1. returned msg - received using a variable
let result = test3("Hello All....."); 
console.log(result); //Hello All.....

//2. returned msg - print it directly
console.log(test3("Welcome.....")); //Welcome.....

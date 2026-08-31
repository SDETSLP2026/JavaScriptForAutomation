/*
CallBack function/Higher order function
----------------------------------------
If any function itself passed as a parameter to other function then it is called as a callback function.

Syntax:
--------
1. Define a function - which will be called.
2. The business logic - where the function is called.
3. Call the function with callBackFunction.


*/

//Define function
function greetName(name1){
    console.log("Hello " + name1);
}

//business logic
function greet(name2, callBackFun){ //here callbackfun this is parameter where we are passing function
    callBackFun(name2);
}

//Call the function
greet("Sujit",greetname); //here greetName() is call back function

console.log("---------------------------------");

//Define base functions
function add(num1, num2){
    console.log("Addition is: " + (num1+num2));
}

function sub(num1, num2){
    console.log("Subtraction is: " + (num1-num2));
}

function mul(num1, num2){
    console.log("Multiplication is: " + (num1*num2));
}

function div(num1, num2){
    console.log("Division is: " + (num1/num2));
}

//Business Logic
function calculations(num1, num2, callBackFun){
    callBackFun(num1,num2);
}

//Call the function
calculations(100,20,div); // Division is: 5
calculations(200,34,sub); // Subtraction is: 166
calculations(300,200,add); // Addition is: 500
calculations(300,24,mul); // Multiplication is: 7200

console.log("---------------------------------");

let arr = [10,20,30,40];

//Just iterate and print all the elements using forEach()
arr.forEach((num)=> {
    console.log(num); // all the array elements will be printed.
})

/*
Upcoming/Remaining topics -
-------------------------------------
map(),filter(),reduce()
destructuring in Js--->Pw
share data/object from one file to file
OOP- Encapsulation/polymorphism/Inheritance
Asynchronous programming
await,async,promise
TypesScript
*/
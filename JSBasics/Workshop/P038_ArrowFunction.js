/*
Functions
===================
1.Function declaration
2.Function Expression
    2.1.Anonymous function(function without name)
    2.2.Arrow function(short hand function)

Rules - 
- Arrow function should be assigned to a variable.
- If function is returning anything, it should be received using a variable or print it directly.  

*/

console.log("-------Arrow function without parameter------");

// Define function
let test1 = ()=>{
    console.log("We are calling an arrow function.....");
}

// let test1=()=>{console.log("Arrow function is calling....")};

// Call function
test1(); //We are calling an arrow function.....

console.log("-------Arrow function with a single parameter------");

//Define function
let test2 = (data)=>{
    console.log("Data is "+data);
}

//Call function
test2("Playwright is E2E automation framework"); //Data is Playwright is E2E automation framework
console.log(typeof test2);//function

console.log("-------Arrow function with a multiple parameter------");

//Define function
let test3 = (a,b)=>{
    console.log("Multiplication is: "+(a*b));
}

//Call function
test3(10,4); //Multiplication is: 40

console.log("-------Arrow function with parameter and return keyword------");

//Define function
let test4 = (msg)=>{
    return msg;
}

//Call function
console.log(test4("Thank you!")); //Thank you!
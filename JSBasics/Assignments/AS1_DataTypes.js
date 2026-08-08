/*
1. Identify the Data Type 
Write a program to declare the following variables and log 
their data types: 
let a = "Hello"; 
let b = 100; 
let c = true; 
let d = null; 
let e = undefined; 
let f = { name: "John" }; 
let g = [1, 2, 3]; 
let h = function() { 
}; 

*/

let a = "Hello";
console.log("Type of a is : ", typeof a); // Type of a is : string

let b = 100;
console.log("Type of b is : ", typeof b); // Type of b is : number

let c = true;
console.log("Type of c is : ", typeof c); // Type of c is : boolean

let d = null;
console.log("Type of d is : ", typeof d); // Type of d is : object (this is a known quirk in JavaScript)

let e = undefined;
console.log("Type of e is : ", typeof e); // Type of e is : undefined

let f = { name: "John" };
console.log("Type of f is : ", typeof f); // Type of f is : object

let g = [1, 2, 3];
console.log("Type of g is : ", typeof g); // Type of g is : object (arrays are of type object in JavaScript)

let h = function () {
};
console.log("Type of h is : ", typeof h); // Type of h is : function
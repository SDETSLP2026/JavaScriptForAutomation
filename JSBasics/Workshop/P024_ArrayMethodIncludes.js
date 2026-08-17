/*
includes() - this is a common method for string and arrayin JS

includes('element') - returns boolean true/false 

This is used to determine whether an array includes a certain element,
returning true or false as appropriate.
*/

let product = ["Monitor", "Mouse", "Keyboard", "Printer", "HardDrive"];

let productStatus = product.includes("Mobile");
console.log("Does product list have Mobile? : " + productStatus); //false

console.log("Does product list have Mouse? : " + product.includes("Mouse"));
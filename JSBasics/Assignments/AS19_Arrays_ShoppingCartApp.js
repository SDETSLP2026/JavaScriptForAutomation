/*
Arrays_Assignment-2
PS: Shopping Cart Application 
Scenario: 
An e-commerce website manages products in a shopping cart. 
Question: 
Declare an array with "Mobile", "Laptop", "Mouse" and: 
1. Add "Keyboard" to the cart  
2. Display all products in reverse order  
3. Convert all cart items into a single string separated by " | "
*/

let prdArray = ["Mobile", "Laptop", "Mouse"];

console.log("1. Add Keyboard to the cart");
prdArray.push("Keyboard");
console.log(prdArray); // [ 'Mobile', 'Laptop', 'Mouse', 'Keyboard' ]

console.log("------------------------------------------------------------------------");

 
console.log("2. Display all products in reverse order");
let revPrdArray = prdArray.reverse();
console.log(revPrdArray); // [ 'Keyboard', 'Mouse', 'Laptop', 'Mobile' ]

console.log("------------------------------------------------------------------------");

console.log("3. Convert all cart items into a single string separated by | ");
let allElementsString = prdArray.join(" | ");
console.log(allElementsString); // Keyboard | Mouse | Laptop | Mobile

/* Output -
1. Add Keyboard to the cart
[ 'Mobile', 'Laptop', 'Mouse', 'Keyboard' ]
------------------------------------------------------------------------
2. Display all products in reverse order
[ 'Keyboard', 'Mouse', 'Laptop', 'Mobile' ]
------------------------------------------------------------------------
3. Convert all cart items into a single string separated by | 
Keyboard | Mouse | Laptop | Mobile
*/
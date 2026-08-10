/*
Arrays_Assignment-4
PS: Food Delivery Orders 
Scenario: 
A food delivery application maintains current orders. 
Question: 
Declare an array with "Pizza", "Burger", "Pasta" and: 
1. Add "Sandwich" to the orders  
2. Remove the first order  
3. Display all orders as a comma-separated string   
*/

let fdOrders = ["Pizza", "Burger", "Pasta"];
console.log("The current food orders: " + fdOrders);

console.log("------------------------------------------------------------------------");

console.log("1. Add Sandwich to the orders");
fdOrders.push("Sandwich");
console.log("The modified food orders: " + fdOrders);

console.log("------------------------------------------------------------------------");

console.log("2. Remove the first order");
let firstOrder = fdOrders.shift();
console.log("First order is shipped: " + firstOrder);
console.log("The modified food orders: " + fdOrders);

console.log("------------------------------------------------------------------------");

console.log("3. Display all orders as a comma-separated string ");
let allOrders = fdOrders.join(",");
console.log("All the remaining orders with comma separated values: " + allOrders);


/* Output:
The current food orders: Pizza,Burger,Pasta
------------------------------------------------------------------------
1. Add Sandwich to the orders
The modified food orders: Pizza,Burger,Pasta,Sandwich
------------------------------------------------------------------------
2. Remove the first order
First order is shipped: Pizza
The modified food orders: Burger,Pasta,Sandwich
------------------------------------------------------------------------
3. Display all orders as a comma-separated string 
All the remaining orders with comma separated values: Burger,Pasta,Sandwich
*/
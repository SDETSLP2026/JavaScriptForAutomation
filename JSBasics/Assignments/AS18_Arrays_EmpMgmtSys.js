/*
Arrays_Assignment-1
PS: Employee Management System 
Scenario: 
A company stores employee names in an array. 
Question: 
Declare an array with employee names "Rahul", "Priya", "Amit" and 
perform the following operations: 
1. Add "Sneha" to the employee list  
2. Remove the last employee from the list  
3. Add "Manager" at the beginning of the list  
4. Remove the first employee from the list  
*/

let empArray = ["Rahul", "Priya", "Amit"];

console.log("The original array is: ");
console.log(empArray);

console.log("------------------------------------------------------------------------");

console.log("1. Add Sneha to the employee list");
empArray.push("Sneha"); // push() is used to add at the last element of the array
console.log(empArray); // [ 'Rahul', 'Priya', 'Amit', 'Sneha' ]

console.log("------------------------------------------------------------------------");

console.log("2. Remove the last employee from the list");
let delLastEle = empArray.pop(); // pop() is used to remove the last element of the array
console.log(delLastEle); // Sneha - This is deleted from an array
console.log(empArray); // [ 'Rahul', 'Priya', 'Amit' ]

console.log("------------------------------------------------------------------------");

console.log("3. Add Manager at the beginning of the list");
empArray.unshift("Manager"); // unshift() is used to add at the start element of the array
console.log(empArray); // [ 'Manager', 'Rahul', 'Priya', 'Amit' ]

console.log("------------------------------------------------------------------------");

console.log("4. Remove the first employee from the list");
empArray.shift(); // shift() is used to remove the first element of the array
console.log(empArray); // [ 'Rahul', 'Priya', 'Amit' ]

/* Output:
The original array is: 
[ 'Rahul', 'Priya', 'Amit' ]
------------------------------------------------------------------------
1. Add Sneha to the employee list
[ 'Rahul', 'Priya', 'Amit', 'Sneha' ]
------------------------------------------------------------------------
2. Remove the last employee from the list
Sneha
[ 'Rahul', 'Priya', 'Amit' ]
------------------------------------------------------------------------
3. Add Manager at the beginning of the list
[ 'Manager', 'Rahul', 'Priya', 'Amit' ]
------------------------------------------------------------------------
4. Remove the first employee from the list
[ 'Rahul', 'Priya', 'Amit' ]
*/
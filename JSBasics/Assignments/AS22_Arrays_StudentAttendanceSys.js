/*
Arrays_Assignment-5
PS: Student Attendance System 
Scenario: 
A school application maintains student attendance. 
Question: 
Declare an array with "Ankit", "Riya", "Karan" and: 
1. Add "Neha" at the beginning
2. Remove the last student from the list  
3. Create a separate copy of the attendance list  
*/

let studentsArr = ["Ankit", "Riya", "Karan"];
console.log("Currently present students: " + studentsArr);

console.log("------------------------------------------------------------------------");

console.log("1. Add Neha at the beginning ");
studentsArr.unshift("Neha");
console.log("After adding Neha at the beginning: " + studentsArr);

console.log("------------------------------------------------------------------------");

console.log("2. Remove the last student from the list");
let lastStudent = studentsArr.pop();
console.log("The last removed student: " + lastStudent);
console.log("After removing last student: " + studentsArr);

console.log("------------------------------------------------------------------------");

console.log("3. Create a separate copy of the attendance list");
console.log("Original copy of present students: " + studentsArr);
let copyStdArr = [...studentsArr]
console.log("Another copy of present students:" + copyStdArr);

/* Output -
Currently present students: Ankit,Riya,Karan
------------------------------------------------------------------------
1. Add Neha at the beginning 
After adding Neha at the beginning: Neha,Ankit,Riya,Karan
------------------------------------------------------------------------
2. Remove the last student from the list
The last removed student: Karan
After removing last student: Neha,Ankit,Riya
------------------------------------------------------------------------
3. Create a separate copy of the attendance list
Original copy of present students: Neha,Ankit,Riya
Another copy of present students:Neha,Ankit,Riya
*/
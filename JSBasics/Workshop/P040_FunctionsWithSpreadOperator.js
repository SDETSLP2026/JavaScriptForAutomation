/*
Spread operator in JS/REST parameters (...)
==============================================
Using spread operator we can save n number of entries in an array
and even we can pass n number of parameters into a function.


1. How to copy array [...]
2. Destructuring of array elements
3. To pass parameters to functions

- To create/design dynamic functions, we need spread operator/rest parameters.
- Spread operator/rest parameter should always be a last parameter of a function.
- A rest parameter must be last in a parameter list.

*/

function getEmployeeDetails(id, name, ...address){ // Here, we can have multiple addresses
    console.log("Employee name: "+name+": id is: "+id+" : Address is: "+address);
}

getEmployeeDetails(101,"Kiran","India","Us","Uk"); //Employee name: Kiran: id is: 101 : Address is: India,Us,Uk

console.log("------------------------------------------------------------");

function testSkill(...skill){
    console.log(skill);
}

testSkill("C","C++","Java","Python","Js","Ts"); //[ 'C', 'C++', 'Java', 'Python', 'Js', 'Ts' ]

console.log("------------------------------------------------------------");
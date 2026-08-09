/*
Array
======
- Array is dynamic data structure in JS.
- It is non-primitive.
- It is a collection of data/records/information

Types
------
1. Single Dimentional
2. Multi Dimentional

Iterations
----------
1. Using simple for loop
2. Using for...of loop

Array/Objects
==============
1. for...of loop
-----------------
- for...of loop is applicable for array/string
- this loop iterates over values

2. for...in loop
-----------------
- for...in loop is applicable for Object
- this loop iterates over keys and indexes

*/

//array literal

let arr = []; //Single dimentional array
console.log(arr); //[]
console.log(typeof arr); //object

console.log("------------------------------------------------------");

console.log("--------- Single D Array ---------");

let id = [101,102,103,104,105];
console.log("Total size of the array is: " + id.length); //5

//how to read single record from array: arrayVariableName[index]
console.log(id[3]);//104

//for wrong index - 
// an array is assigned to a var i.e. let. If nothing is assigned then it will give you undefined. 
console.log(id[9]); //undefined
console.log(id[-1]); //undefined

console.log(id); //[ 101, 102, 103, 104, 105 ]

console.log("------------------------------------------------------");

let location=["Pune","Mumbai","Delhi"];

console.log(location);//[ 'Pune', 'Mumbai', 'Delhi' ]
console.log("Total locations: " + location.length);//3
console.log(location[2]);//Delhi
console.log(location[3]);//undefined

console.log("------------------------------------------------------");

// Mixed type of array
let empData=["Sarang", "Pune", 'M', 26, 7899878979, 89.77];
//            0          1      2    3      4         5

console.log(empData);//[ 'Sarang', 'Pune', 'M', 26, 7899878979, 89.77 ]
console.log("Total record: " + empData.length);//6
console.log(empData[4]);//7899878979

console.log("------------------------------------------------------");

console.log("---------Multi Dimensional Array--------");


let userData=[
    ["Admin","admin123"],
    ["Sumit","sumit123"],
    ["Kiran","kiran123"],
    ["Shital","shital123"]
]

console.log(userData); // Complete array is printed

console.log("Number of rows: "+userData.length);//4
console.log("Number of columns: "+userData[0].length);//2

//single entry[][]
console.log(userData[2][0]);//Kiran
console.log(userData[3][1]);//shital123

console.log(userData[2][2]);//undefined
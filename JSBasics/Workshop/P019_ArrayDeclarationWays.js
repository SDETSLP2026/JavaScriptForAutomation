/*
Array
======
- Array is dynamic data structure in JS.
- It is non-primitive.
- It is a collection of data/records/information

Types
------
1. Single Dimentional (1D)
2. Multi Dimentional (2D)

Declaration ways
-----------------
1. Array literal
2. Array constructor
3. Array.of() - Added in ES6 version

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

console.log("-----------Array literal-----------");
console.log("---------------------------------------");

let id = [10,20,30,40,50,60];

console.log(id); //[ 10, 20, 30, 40, 50, 60 ]
console.log("Length of the elements in id: " + id.length); //6
console.log(id[4]); //50


console.log("-----------Array constructor-----------");
console.log("---------------------------------------");


/*
Constructor
==============
- This is special function which is responsible to initialize object.
- Constructor will get called at the time object creation/initialization.
- call Array() with new keyword.
- new keyword is used to create Object.
e.g. Array()
*/

let arr = new Array(10,20,30,40,50);
console.log("Length of the elements in arr: " + arr.length); //5
console.log(arr); //[ 10, 20, 30, 40, 50 ]
console.log(arr[3]); //40

console.log("---------------------------------------");

//In Array() - if only 1 element is provided, then this would be considered as a length

let arr1 = new Array(5);
console.log("Length of the elements in arr1: " + arr1.length); //5
console.log(arr1); //[ <5 empty items> ]

let arr2 = new Array("Pune");
console.log("Length of the elements in arr2: " + arr2.length); //1
console.log(arr2); //[ 'Pune' ]

console.log("----------Array.of()-------------");

let arr3 = Array.of(100,200,300,400);

console.log(arr3); //[ 100, 200, 300, 400 ]
console.log("Length of the elements in arr2: " + arr3.length); //4
console.log(arr3[2]); //300
console.log(arr3[5]); //undefined
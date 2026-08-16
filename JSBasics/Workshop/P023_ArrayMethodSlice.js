/*
slice() - This method returns a copy of a section of an array.
For both start and end,
a negative index can be used to indicate an offset from the end of the array. 
For example, -2 refers to the second to last element of the array.

Syntax:
================
slice(startindex, endindex); ===> This returns: startindex - to - endindex-1
Traversal - Left to Right only
*/

//index    -8  -7  -6  -5  -4  -3  -2  -1 ------> Negative Index
let arr = [10, 20, 30, 40, 50, 60, 70, 80];
//index     0   1   2   3   4   5   6   7 ------> Positive Index

console.log(arr); // [10,20,30,40,50,60,70,80]

// Slice from 2 to 6
let slice0 = arr.slice(2, 6);
console.log(slice0); //[30,40,50,60] - StartIndex to LastIndex-1

// Slice from 2 to 6
let slice1 = arr.slice(2, 7);
console.log(slice1); //[30,40,50,60,70] - StartIndex to LastIndex-1

//Slice with 1 parameter (startIndex)
let slice2 = arr.slice(3);
console.log(slice2); //[40, 50, 60, 70, 80] - StartIndex to LastIndex

let slice3 = arr.slice(0);
console.log(slice3); //[10, 20, 30, 40,  50, 60, 70, 80] - Complete Array

let slice4 = arr.slice(-2);
console.log(slice4); //[ 70, 80 ]

let slice5 = arr.slice(-5);
console.log(slice5); //[ 40, 50, 60, 70, 80 ]

let slice6=arr.slice(8,10);
console.log(slice6);//[]

//valid index and rule: left to right travelsing
let slice7=arr.slice(-6,-2);
console.log(slice7);//[ 30, 40, 50, 60 ]

let slice8=arr.slice(-2,10);
console.log(slice8);//[ 70, 80 ]

//wrong index
let slice9=arr.slice(-2,-5);
console.log(slice9);//[]
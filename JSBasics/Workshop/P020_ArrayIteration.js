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

let id = [10,20,30,40,50,60];
console.log(id);

console.log("----------- Simple for loop -----------");

for(let i=0; i<id.length;i++){
    console.log(id[i]); // 10,20,30,40,50,60
}


console.log("----------- for...of loop -----------"); //Iterates over values

for(let i of id){
    console.log(i); //10,20,30,40,50,60
}

console.log("----------- for...in loop -----------"); //Iterates over index/keys

for(let i in id){
    console.log(i); //0,1,2,3,4,5
}

console.log("-------------------------------------"); 

for(let i in id){
    console.log("at index: "+i+" value is: "+id[i]); 
}

/*
at index: 0 value is: 10
at index: 1 value is: 20
at index: 2 value is: 30
at index: 3 value is: 40
at index: 4 value is: 50
at index: 5 value is: 60
*/

console.log("-------------------------------------");

//Sum of elements of array

let arr = [1,2,3,4,5,6];

let sum = 0;
for(let i of arr){
    sum = sum + i;
}

console.log("Addition of all the elements in the array: " + sum); //21

console.log("-------------------------------------");

let arr1 = [
    [100,200,300],
    [400,500,600]
];

for(let i of arr1){
    console.log(i);
}

/*
[ 100, 200, 300 ]
[ 400, 500, 600 ]
*/

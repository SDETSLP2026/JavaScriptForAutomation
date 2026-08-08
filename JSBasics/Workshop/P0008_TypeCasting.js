/*
Type casting
------------
We can convert one data type to another data type using type casting OR coercion.
This is applicable for strings, numbers and boolean data types.

1. Implicit Type Casting/Type Conversion
----------------------------------------
Type coercion means automation conversion of the data.
This is responsibility of the JavaScript engine to convert one data type to another data type automatically.

2. Explicit Type Casting/Type Conversion
----------------------------------------
We can convert one data type to another data type using built-in/constructor functions.

1. String() - Convert to string
2. Number() - Convert to number
3. Boolean() - Convert to boolean

Constructor -
==============
It is a special method which is used to create and initialize an object.
- It is used inside a class.
- It is called automatically when an object is created.

Boolean conversion rules
------------------------
1. Truthy values - true, 1, "hello", {}, [], function() {}
Any true value in boolean context is called truthy value e.g. any non empty string,non zero number....etc


2. Falsy values - false, 0, "", null, undefined, NaN
Any false value in boolean context is called falsy value e.g. any empty string, zero number....etc

*/

console.log("-------------String Conversion-----------------");

/*
If you have expression which includes string,number,boolean data with + operator
then number type and boolean type data automatically converts into string
*/

let a = "Hello"+100+true; //here 100 and true will coerced into string Hello100true
console.log(a); // Hello100true
console.log(typeof a); // Output: string

let b = 100+25+"200"; //here 100 and 25 will be added first then 125 will be coerced into string and concatenated with "200"
console.log(b);//125200
console.log(typeof b);//string

console.log(true+"Bye"); //trueBye: here true will be coerced into string and concatenated with "Bye"
console.log("200"+100+25+"200"); //20010025200: here 100 and 25 will be coerced into string and concatenated with "200" and "200"
console.log(100+"10"+20); //1001020: here 10 will be coerced into string and concatenated with "100" and "20"
console.log(true+50+"100"); //51"100": here true will be coerced into number 1 and added with 50 then 51 will be coerced into string and concatenated with "100"

console.log("-------------Number Conversion-----------------");

/*
If you have expression which includes string,number,boolean data with arithemetic (-,*,/) operator
then string type(compatible) and boolean type data automatically converts into number
*/

//non-compatibility string data
let c = "Hello"*100; //here Hello is non-compatibility string data so it will be coerced into NaN
console.log(c); // NaN as Hello is not a number
console.log(typeof c); // number

//compatibility string data
let d = "100"/10; //here "100" is compatibility string data so it will be coerced into number 100 and then divided by 10
console.log(d); // 10
console.log(typeof d); // number

let r=90-"30";//here "30" will coerced into number 30 90-30=60
console.log(r);//60 
console.log(typeof r);//number

let y="78"-15+100+"56"; //here "78" will be coerced into number 78 then 78-15=63 then 63+100=163 then 163 will be coerced into string and concatenated with "56"
console.log(y);//16356
console.log(typeof y);//string

let i=90-"30"+true;//here "30" coerced into number 30,90-30=60+true again true changed its type to number 1=61
console.log(i);//61
console.log(typeof i);//number



console.log("-------------Explicit Type Casting-----------------");

//String (compatible) to Number

let s1 = "100";
console.log(s1); // 100
console.log(typeof s1); // string

// number to string

let num = 87956;
console.log(typeof num); // number
let numToStr = String(num); // number to string
console.log(numToStr); // 87956
console.log(typeof numToStr); // string

let s2 = "Hello";
console.log(Number(s2)); // NaN as Hello is not a number
console.log(typeof Number(s2)); // number

//Scenario: Validate amount from the bill, amount should be less than 10000

let id = [10,20,30,40,50];
console.log(id); // [10, 20, 30, 40, 50]
console.log(typeof id); // object
console.log(id[2]); // 30


let bill = "Your total bill amount is 5000";
let data = bill.split(" ")[4];  // extract the amount from the bill string
console.log(data); // 5000
console.log(typeof data); // string

//String to Number conversion
let amount = Number(data); // convert string to number
console.log(amount);
console.log(typeof amount); // number

if(amount<10000){
    console.log("Test Pass...amount is valid");
}
else{
    console.log("Test Fail....amount is not valid");
}


console.log("------Boolean Conversion------");

/*
truthy
==========
Any true value in boolean context is called truthy value

example:
any non empty string,non zero number....etc

falsy
--------------
Any false value in boolean context is called falsy value
-5 falsy values are available

Example: emptyString "",0,null,undefined,NaN
*/

console.log(Boolean("Jay"));//true
console.log(Boolean(190));//true
console.log(Boolean(-89));//true
console.log(Boolean(56.44));//true
console.log(Boolean('T'));//true


console.log("---------------------");
console.log(Boolean(0));//false
console.log(Boolean(null));//false
console.log(Boolean(""));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false
console.log(Boolean(false));//false

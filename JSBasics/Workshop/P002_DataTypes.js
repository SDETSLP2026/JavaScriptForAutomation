/*
Variable: Variable is the name of the memory location where we can store any data.
 
Variable Syntax:
================
In modern Js we use let(for mutable) and const(for immutable) keywords to declare variable and function expression.

var_name = value; // var_name is the name of the variable and value is the data (literal) we want to store in that variable.

let x = 100;
let name = "John";

DataTypes
=================
Datatypes define what type of data you store into variable - JS is dynamically type language means while declaring any variable you dont need to specify type of variable.

Js Support two types of Data types - Primitive and Non-Primitive.
--------------------------------------------------------------------
1.Primitive type(primary data types : which stores some value)
=======================
    1.number
    2.string
    3.boolean (true/false)
    4.undefined
    5.null
    --------------------------
    After ES6 (ES- ECMA Script) added datatypes
    6.BigInt(NA for automation)
    7.Symbol(NA for automation)
    --------------------------

2.Non-primitive types(which store object reference /Object)
======================
 - array []
 - object {} => In Js everything is Just Object. All the objects come under Non-primitive data types.

# typeof operator - used to understand what type of data we store into variable
 
 */

console.log("------- Number types -------");
/*
In JS - all the numbers +ve int/-ve int, decimal/float digit 45.78
*/

let num1 = 100;
console.log(num1); // 100
console.log(typeof num1); // number

let num2 = -90;
console.log(num2);
console.log(typeof num2); // number

let num3 = 45.78;
console.log(num3);
console.log(typeof num3); // number


// ======================================================



console.log("------- String types -------");

/*
Character - A single character is a string of length 1. In JS we dont have char datatype, we can store single character into string variable.
String - A string is a sequence of characters. In JS, we can store string into variable using single quotes(''), double quotes("") and backticks(``).
String is an Object and of Primitive Data Type. In JS, string is immutable means we cannot change the value of string once it is created.

Ways to declare string in JS
============================
1. Using single quotes('') e.g. let name = 'John';
2. Using double quotes("") e.g. let name = "John";
3. Using backticks(``) e.g. let name = `John`; (ES6 - Template literals - used to create multi-line string and string interpolation)
*/

let fname = 'Swapnil';
console.log(fname); //Swapnil
console.log(typeof fname); // string

let prof = "Automation Tester";
console.log(prof); // Automation Tester
console.log(typeof prof); // string

let email=`sdet.slpadekar2026@gmail.com`;
console.log(email);//sdet.slpadekar2026@gmail.com
console.log(typeof email);//string

let para = `JavaScript is a dynamically typed, interpreted scripting language, whereas TypeScript is a statically typed, compiled superset of JavaScript. The core distinction is that TypeScript introduces optional strong typing, interfaces, and generics to catch errors during compilation, while JavaScript allows variables to change types at runtime and detects errors only when the code executes.`
console.log(para);
console.log(typeof para); // string


// ======================Use of backticks================================

let requestPayload = `{
    "name" : "Apple MacBook M5 Pro",
    "data" : {
        "Year" = 2026,
        "Price" = 2500,
        "Processor" = "M5 Pro",
        "RAM" = "16GB",
        "Storage" = "1TB"
    }
}`;

console.log(requestPayload);
console.log(typeof requestPayload);//String

// ======================================================

console.log("------- Boolean types -------"); //true OR false

let isActive = true;
console.log("The current status is : ", isActive); //true
console.log(typeof isActive); //boolean

let isEmployee = false;
console.log(isEmployee); //false
console.log(typeof isEmployee); //boolean


// ======================================================

console.log("------- undefined types -------");

/*
If any variable is declared without value (Variable declared without initializaltion)
Then the value of the variable is shown as undefined and typeof variable is also shown as undefined.(Because it is in TDZ - Temporal Dead Zone)
*/

let dob;
console.log(dob); //undefined
console.log(dob); //undefined

// ======================================================

console.log("------- null types -------");

/* null means unknown data - For null variable data type will be shown as Object 
& this is introduced as Bug in JS languages */

let policyMaturityDate = null;
console.log(policyMaturityDate); //null
console.log(typeof policyMaturityDate); //object

// ======================================================

console.log("------- dynamically typed language -------");

let data = "Swapnil"; // string
data = 2026; // number 
data = 6.5; // number - decimal
data = true;

console.log(data); // true 
console.log(typeof data); //boolean

// ======================================================

console.log("------- BigInt types -------");
// ES6 - BigInt: Write int number with n suffix

console.log("Max number is : " + Number.MAX_VALUE); //1.7976931348623157e+308

let num4=17976931348623157308;
console.log(typeof num4); //number

//A bigint literal must be an integrer. : AST
let num5 = 17976931348623157308n;
console.log(typeof num5); //bigint - associated n at the end of number to make it BigInt type

// ======================================================

//Symbol type - this type is used to store unique properties for an object.

/*
Object - Any real world entity which has state and functionality.
Every object is an instance of a class.
In JS - everything is a dynamic object.
In JS - Object is defined with {}
In JS - Object is an information in the form of Key & value pair.

Ways to introduce an object
-----
1. Using literal way
2. Using class variable
ES6 (ECMA Standard 6)
3. Using constructor function
4. Using prototype based object interface
*/

// Creating an empty objects
let x = {};
console.log(x); //{} - This is an empty object
console.log(typeof x);//object

let user = {
    "id" : 1001,
    "Name" : "Shivdeep",
    "onDutyStatus" : false
}

console.log(user); //{ id: 1001, Name: 'Shivdeep', onDutyStatus: false }
console.log(typeof user); // object

// Retrieve/Fetch full/partial info of any object
/*
1. using . DOT notation
objectName.key

2. using bracket notation
objectName["key"]
*/

console.log(user); // { id: 1001, Name: 'Shivdeep', onDutyStatus: false }
console.log(user.id); // 1001
console.log(user["Name"]); // Shivdeep

// Update info of any object
/*
objectName.Key = Value
*/

user.city = "Navi Mumbai";
console.log(user); //{ id: 1001, Name: 'Shivdeep', onDutyStatus: false, city: 'Navi Mumbai' }

// Delete info from any object
/*
delete objectName.Key
*/

delete user.city;
console.log(user); //{ id: 1001, Name: 'Shivdeep', onDutyStatus: false }

//------------------------------------------------------------------

//Symbol type(For automation - it is not applicable)
/*
Symbol type is used to store unique properties for an object.
*/
//Returns a new unique Symbol value.
let profile1=Symbol("QA");
console.log(profile1);
console.log(typeof profile1);//symbol


let profile2=Symbol("QA");
console.log(profile2);
console.log(typeof profile2);//symbol

/*
= ->    (Assignment operator) Used to assign a value to a variable.
== ->   (Loose equality operator) Compares two values for equality ignoring data types.
=== ->  (Strict equality operator) Compares both value and data type without any type coercion.
*/


console.log(100 === 100);//true

console.log(profile1 === profile2);//false - Because symbol type is used to store unique properties for an object.

let product={
  name:"iphone",
  price:800000
}

console.log(product);
console.log(typeof product);//object

//create unique property is pid
let id=Symbol('pid');

//attached this symbol property to product object
product[id]=1234;
console.log(product);

product.id=899;
console.log(product);

//delete symbol property
delete product[id];
console.log(product);//{ name: 'iphone', price: 800000, id: 899 }
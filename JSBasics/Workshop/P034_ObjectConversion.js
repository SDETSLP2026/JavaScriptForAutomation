/*
Object conversion
-----------------
Javascript object into JSON string
---------------------------------
stringify():Converts a JavaScript value to a JavaScript Object Notation (JSON) string.


JSON string into Javascript Object
----------------------------------
parse(): Converts a JavaScript Object Notation (JSON) string into an object.
*/

let user={
    name:"Amit",
    id:1010
}

console.log(user);
console.log(typeof user);//object

//Js object--->json string
//Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
let jsonData=JSON.stringify(user);
console.log(jsonData);
console.log(typeof jsonData);//string


console.log("----------------------------------------");


let payload=`{
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": 2019,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
}`

console.log(payload);
console.log(typeof payload);//string

//Json--->Js
let jsData=JSON.parse(payload);
console.log(jsData);
console.log(typeof jsData);//object
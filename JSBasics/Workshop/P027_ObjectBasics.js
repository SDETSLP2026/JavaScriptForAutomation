/*
Object
-------
- It is a real world entity that has state(data members) & behavior(member functions)
- Objevct is an instance of a class.
- In JS, everything is represented as a dynamic object.
- In JS, Object is represented in the form of {Key:Value} pair

Ways to declare
----------------
1. Using Object literal
2. Using class level (ES6)
3. Using constructor function (ES6)
4. Prototype based (Object Interface)

*/
console.log("--------- 1. Using Object literal ---------");

//JS object keys are by-default of String type
let user = {};
console.log(user); //{}
console.log(typeof user); //object

let person = {
    id:100,
    fname: "Swapnil",
    address: "Pune"
}

console.log(person); //{ id: 100, fname: 'Swapnil', address: 'Pune' }
console.log(typeof person); //object

//Operations: read/insert/update/delete
//CRUD - (Create/Insert) | Read | Update | Delete

/*
To read any property/key value from object
----------------------------------------------
1. dot notation
----------------------
objectName.key

2.square bracket notation
-------------------------
objectName["key"]
*/

console.log(person.id); //1010
console.log(person.fname); //Swapnil
console.log(person.address); //Pune

console.log(person["id"]); //1010
console.log(person["fname"]); //Swapnil
console.log(person["address"]); //Pune

// Create/Insert new property to Object
person.phno = 8369191401;
console.log(person); //{ id: 100, fname: 'Swapnil', address: 'Pune', phno: 8369191401 }


//Modify/Update existing property from the object
person.id = 2020;
console.log(person); //{ id: 2020, fname: 'Swapnil', address: 'Pune', phno: 8369191401 }


//Delete any property from an object
delete person.address;
console.log(person); //{ id: 2020, fname: 'Swapnil', phno: 8369191401 }
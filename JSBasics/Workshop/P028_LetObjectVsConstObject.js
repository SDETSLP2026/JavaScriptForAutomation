/*
Syntax of an object
---------------------
<let/const> <objectRef> = {<ObjectKey>:<objectValue>} 

Variables
==========
let (Mutable | Redeclaration - Not allowed | Reassignment - allowed)
const (Immutable | Redeclaration - Not allowed | Reassignment - Not allowed)

In const object - only reference is immutable.
In terms of object - for let & const type we can perform all CRUD operations.
--------------------------------------------------------------------------------
But for let type of object reference - it is mutable, so we can change.
But for const type of object reference - it is immutable, so we cannot change.


*/

console.log("------let object------");

let user1 = {
    id:1010,
    name:"Susmit"
}

// Read
console.log(user1); //{ id: 1010, name: 'Susmit' }

// Create/Insert
user1.phno=9090900;
console.log(user1); //{ id: 1010, name: 'Susmit', phno: 9090900 }

// Update/Modify
user1.name="Susmit Jadhav";
console.log(user1); //{ id: 1010, name: 'Susmit Jadhav', phno: 9090900 }

// Delete
delete user1.phno;
console.log(user1); //{ id: 1010, name: 'Susmit Jadhav' }

//Change in reference for let type of object

user1 = {
    address:"Pune"
}
console.log(user1); //{ address: 'Pune' }

//-------------------------------------------------------------------------------

console.log("------const object------");

const user2={
    id:2222,
    name:"Kiran",
    location:"Us"
}

// Read
console.log(user2); //{ id: 2222, name: 'Kiran', location: 'Us' }

// Create/Insert
user2.profile="QA";
console.log(user2); //{ id: 2222, name: 'Kiran', location: 'Us', profile: 'QA' }

// Update/Modify
user2.location = "India";
console.log(user2); //{ id: 2222, name: 'Kiran', location: 'India', profile: 'QA' }

// Delete
delete user2.location;
console.log(user2); //{ id: 2222, name: 'Kiran', profile: 'QA' }

//Change in reference for const type of object
// for const - objRef is immutable so will get typeError for the same
user2 = {
    bonus:25000
}
console.log(user2); //TypeError: Assignment to constant variable.
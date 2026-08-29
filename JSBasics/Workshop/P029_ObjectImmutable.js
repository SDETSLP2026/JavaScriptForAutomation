/*
How to make objects immutable?
------------------------------
#1. To create completely immutable object - we can use freeze(). 
Then we cannot perform Create/Update/Delete operations.
Syntax - Object.freeze(ObjectName)

#2. To create partially immutable object - we can use seal(). 
Then we cannot perform Create/Delete operations. But updating existing properties of the object is allowed.
Syntax - Object.seal(ObjectName)

*/

const student = {
    id: 1010,
    fname: "Sinamika",
    profile: "QA"
}
console.log(student); // { id: 1010, fname: 'Sinamika', profile: 'QA' }
console.log(typeof student); //object

// To make this object immutable
Object.freeze(student);

//Insert new property
//student.phno = 8369191401; //TypeError: Cannot add property phno, object is not extensible

//Modification of any existing property
//student.profile="SDET"; //TypeError: Cannot assign to read only property 'profile' of object 

//Delete any existing property
//delete student.name; //TypeError: Cannot delete property 'name' of #<Object>
    
//reading
console.log(student.id); //1010
    
console.log("----------Real time example------------");

const browser = {
    browserName:"Cheome",
    browserVersion:150
}

console.log(browser); //{ browserName: 'Cheome', browserVersion: 150 }
console.log(typeof browser); //object

Object.seal(browser);

//Read/Retrieve - Allowed
console.log(browser); //{ browserName: 'Cheome', browserVersion: 150 }

//Update/Modify (only existing properties) - Allowed
browser.browserName = "MSEdge";
console.log(browser);

//Create/Insert - Not allowed
//browser.browserVendor = "Google"; //TypeError: Cannot add property browserVendor, object is not extensible

//Delete - Not allowed
//delete browser.browserName; //TypeError: Cannot delete property 'browserName' of #<Object>
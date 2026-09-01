/*
What is destructuring in JavaScript?
------------------------------------
It is a clean way to extract data/values from Array or from Object and assign them to variables.
Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

Automanation Testing
-------------------
1. To design test case in playwright, we use destructuring to extract the values from the object returned by playwright methods.
2. For window handling, tab handling, file handling, we use Promise.all() method which returns an array of objects.
*/


console.log("********** While destructuring Array - we use [] *************");

let arr = [10,20,30,40];
console.log(arr); //[ 10, 20, 30, 40 ]
console.log(arr[2]); //30

//Array destructuring
let[firstEle] = arr; //firstele=10
console.log(firstEle); //10

let[n1,n2,n3] = arr; //n1=10, n2=20, n3=30
console.log(n1); //10
console.log(n2); //20
console.log(n3); //30
console.log(n1,n2,n3); //10 20 30

//Can I have one variable which store all the elements of array? Yes, we can use rest operator(...)
let [...pop] = arr; //pop=[10,20,30,40]
console.log(pop); //10 20 30 40


console.log("********** While destructuring Object - we use {} *************");
/*
While destructuring Object - we use {}
For Object variable name should be same as Object key name.
For Object variable name should be same as the property name of object. If we want to use different variable name, we can use aliasing.
*/

let user={
    id:101,
    fname:"Sarang",
    age:20,
    address:'Pune',
    profile:"QA",
    phno:80909090,
    postalcode:411047
}

console.log(user);

//For desructuring with object we use {}
let {fname,address,profile} = user;
console.log(fname, address, profile);
console.log("Hello " + fname);

//Function
function placeOrder({fname, address, phno, postalcode}){
    console.log("Hello "+fname
        +" your order is placed and you will received it on given address: "+ address 
        + " and the postalcode is: "+postalcode
        + " in case of emergency we will call you on: "+phno
    ); 
}

//call
placeOrder(user);
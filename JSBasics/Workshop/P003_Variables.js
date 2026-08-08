/*
Variable:
---------------
It is name of storage location where we can store data

Syntax:
=============
keyword(let/const) variableName = value;

let x=100;
let name="Jay";

In JS to declare variable  we use 3 keywords
---------------------------------------------
1.var(older & not recommended)
----------------------
- Scope: Global + functional
- Var is fully Hoisted
- Redeclaration is allowed
- Reassignment is allowed


2.let (modern)
----------------------
- Scope: Global + Block 
- For Mutable data
- Redeclaration is not allowed
- Reassignment is allowed
- let is also hoisted but due TDZ(temporal dead zone) if you access varibale before declaration then you will get reference error


3.const(modern) : (like final keyword in Java)
------------------------
- Scope: Global + Block 
- For Immutable data
- Redeclaration is not allowed
- Reassignment is not allowed
- const is also hoisted but due TDZ(temporal dead zone) if you access varibale before declaration then you will get reference error

Scope:
=============
1.Global scope:
----------------
variable declare inside js file and outside function or block is called global scope.
- we can call global scope data anywhere in file.


2.Functional scope/local
-----------------------
Variable declared inside the function then you can access it within function that is functional scope.

3.Block scope(let and const)
-------------------------
Variable declared inside if(){} block, for(){} block, while(){} block - has a block scope.


*/

console.log("---------Global scope--------------");

var fname="Hiteshi";
let email="hiteshi@gmail.com";
const location="US";

console.log("first name is: ",fname);
console.log("Email id is: ",email);
console.log("Location is: ",location);

console.log("---Global data from function-----");

function show() //Here, you can use global scope variable inside function because it has global scope.
{
console.log("first name is: ",fname);
console.log("Email id is: ",email);
console.log("Location is: ",location);
}

//call
show();

console.log("-----Functional scope--------");

function test1()
{
    var browserName="Chrome";//local
    console.log("browser name is: ",browserName);

    let browserVersion=150;//block 
    const browserVendor="Google";//block
    console.log("browser version: "+browserVersion);
    console.log("browser vendor name: "+browserVendor);
    
}

//call
test1();

// Here, you can not use functional scope variable outside function because the scope is limited to the function only. So, you will get reference error.
// console.log("-----functional scope data calling outside the function"); 

//console.log("browser name is: ",browserName);//ReferenceError: browserName is not defined
//console.log("browser version: "+browserVersion);//ReferenceError: browserVersion is not defined
//console.log("browser vendor name: "+browserVendor);//ReferenceError: browserVendor is not defined
    
//After ES6 : Block scope let and const is allowed

//inside the if block -
if(true)
{
    let toolVersion=1.59;
    const toolName="Playwright";

    console.log("Tool version is: "+toolVersion);
    console.log("Tool name is: "+toolName);
    
}

//outside the if block -
//console.log("Tool version is: "+toolVersion);//ReferenceError: toolVersion is not defined
// console.log("Tool name is: "+toolName);//ReferenceError: toolName is not defined

console.log("----------------------------");

var a=10; // This is global scope variable declared for the first time.
console.log("Globally declared 'a' - " + a);//10

function test2()
{
    var a=20;
    console.log("Inside test2 function - " + a);//20

    if(true)
    {   
        var a=30;//redeclared 'a' inside if block - so it will override the value of a inside function. 
        console.log("Inside if block of test2 function - " + a);//30
        
    }
    console.log("Outside if block of test2 function - " + a);//30 - This is because var is function scoped and redeclared inside function so it will override the value of a inside function.
    
}

test2();

console.log("----------------------------");


//let and const

let a=10; // This is global scope variable declared for the first time.
console.log("Globally declared 'a' - " + a);//10

function test3()
{
    let a=20;
    console.log("Inside test3 function - " + a);//20

    if(true)
    {   
        let a=30;//redeclared 'a' inside if block - so it will override the value of a inside function. 
        console.log("Inside if block of test3 function - " + a);//30
        
    }
    console.log("Outside if block of test3 function - " + a);//20 - This is because let is block scoped and it will show the value redeclared inside function test3() and not the value redeclared inside if block.
    
}

test3();
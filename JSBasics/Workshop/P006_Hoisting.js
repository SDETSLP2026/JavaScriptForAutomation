/*
 - Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top (hoisting) of their scope before code execution.
 - Only declarations are hoisted to the top, not initializations.
 - This means that you can use variables and functions before they are declared in the code.
 - However, if you try to access a variable before it is declared, it will result in a ReferenceError.
 - Hoisting is a behavior of JavaScript's execution context and is not a feature of the language itself.
 - Hoisting is fully applicatble for var type variables and function declarations, but not for let and const type variables.
 - Hoisting is also applicable for function declarations, but not for function expressions.
 - Function declarations are hoisted to the top of their scope, while function expressions are not hoisted and can only be used after they are defined in the code.
 - This means that you can call a function before it is declared in the code if it is a function declaration, but not if it is a function expression.

 let and const
 --------------
 Before initialization let keyword and cost keyword variables are part of TDZ (Temporal Dead Zone) area

 */

 test1(); // This is allowed for function declaration - This will work because function declarations are hoisted to the top of their scope.
 //test2(); // This is not allowed for function expression - This will throw an error because function expressions are not hoisted and can only be used after they are defined in the code.


 console.log(id); //undefined - This is allowed for var type variable - This will work because var type variables are hoisted to the top of their scope and initialized with undefined.
 var id = 100;
 console.log(id); //100

 //------------------------------------------------------------
 // let and const

 //console.log(name); //ReferenceError: Cannot access 'name' before initialization - This is not allowed for let type variable - The let type variables are hoisted but are in TDZ.
 
 let name = "Kiran";
 console.log(name); //Kiran

 //console.log(toolName);//TDZ: ReferenceError: Cannot access 'toolName' before initialization - This is not allowed for const type variable - The const type variables are hoisted but are in TDZ.
const toolName="Playwright";
console.log(toolName); //Playwright

 //------------------------------------------------------------

 console.log("----functions----");

function test1() 
{
    console.log("Function declarations - Calling before declaration is allowed");
    //function declarations - This will work because function declarations are hoisted to the top of their scope.
}

let test2=function() 
{
    console.log("Function expressions - Calling before declaration is not allowed");
    //function expression - This will not work because function expressions are not hoisted and can only be used after they are defined in the code.
}

 //------------------------------------------------------------
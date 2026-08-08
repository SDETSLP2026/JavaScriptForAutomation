/*
4. Let vs Var 
What will be the output? 
function testScope() { 
if (true) { 
var a = 10; 
let b = 20; 
} 
console.log(a); // ? 
console.log(b); // ? 
} 
testScope();

*/

function testScope() {
    if (true) {
        var a = 10;
        let b = 20;
    }
    console.log(a); // 10 - The variable a is declared with var, which has function scope, so it is accessible outside the if block.
    console.log(b); // ReferenceError: b is not defined - The variable b is declared with let, which has block scope.
}
testScope();
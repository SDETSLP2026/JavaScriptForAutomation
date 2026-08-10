/*DataTypes,Variable and Operators_Assignment-2
PS: Check the Variable Scope 
What will be the output of the following? 
var x = 10; 
function test() { 
var x = 20; 
console.log(x); 
} 
test(); 
console.log(x); 

*/

var x = 10;

function test() {
    var x = 20;
    console.log(x);
}
test(); 
// Output: 20
//The function test() has its own local variable x, which shadows the global variable x. 
// Therefore, when console.log(x) is called inside the function, it refers to the local variable x, which has a value of 20.

console.log(x);  
// Output: 10 - Global Scope variable x remains unchanged outside the function.
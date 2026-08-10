/* DataTypes,Variable and Operators_Assignment-5
PS: Const Behavior 
What will happen? 
const obj = { name: "Alice" }; 
obj.name = "Bob"; 
console.log(obj.name); 
obj = { name: "Charlie" }; // What happens here?

*/

const obj = { name: "Alice" };
obj.name = "Bob";
console.log(obj.name); // Output: Bob - The property of the object can be changed even though the object is declared with const.
obj = { name: "Charlie" }; // What happens here?
// Output: TypeError: Assignment to constant variable. - You cannot reassign a new object to a const variable.
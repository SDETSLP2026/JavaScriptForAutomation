/*
Objects_Assignment-6
PS: Create:
const user = {
name: "John",
role: "Tester",
city: "Pune"
};

Create a new object that:
• Contains all properties of user.
• Changes role to "Automation Engineer".
• Adds experience: 5.
The original object should remain unchanged.

*/

const user = {
    name: "John",
    role: "Tester",
    city: "Pune"
};

let newUser = {
    ...user, // Spread operator to copy properties from user
    role: "Automation Engineer", // Update role
    experience: 5 // Add new property
};

console.log("Original user object:");
console.log(user);

console.log("New user object:");
console.log(newUser);

/*
Original user object:
{ 
  name: 'John', 
  role: 'Tester', 
  city: 'Pune' 
}

New user object:
{
  name: 'John',
  role: 'Automation Engineer',
  city: 'Pune',
  experience: 5
}
*/
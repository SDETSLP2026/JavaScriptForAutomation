/*
Create a Javascript that checks whether the given username and password match the predefined login credentials using simple variables.

Instructions:  
1. Greate a new file named login.js.  
2. Inside the file, do the following:
Declare two variables for user input: 
let enteredUsername = "Priyanka"; // Keep changing  
let enteredPassword = "Nigade";//Keep changing (Change "some _ value" to simulate different test cases.)  
Declare two predefined credentials:  
const correctusername = "admin@emalil.com",  
const correctPassword = "admin@123";  
3. Use an if...else statement to compare: If both enteredusername and enteredPassword match the correct credentials, 
print: Login Successful 
Otherwise, print: Invalid credentials 
Run the script using: node login.js
*/

const correctusername = "admin@email.com";  
const correctPassword = "admin@123";

let enteredUsername = "admin@email.com";
let enteredPassword = "admin@123";

if(enteredUsername == correctusername && enteredPassword == correctPassword){
    console.log("Login Successful");
} else {
    console.log("Invalid credentials");
}
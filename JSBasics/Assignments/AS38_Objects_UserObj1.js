/*
Objects_Assignment-5
PS: Create a user object:
username, role, department, experience

Use Object.entries() to print:
username : standard_user
role : tester
department : QA
experience : 5
*/

let user = {
    username: "standard_user",
    role: "tester",
    department: "QA",
    experience: 5
};

console.log("Using Object.entries() to print key-value pairs:");
let entries = Object.entries(user);

for (let [key, value] of entries) {
    console.log(key + " : " + value);
}
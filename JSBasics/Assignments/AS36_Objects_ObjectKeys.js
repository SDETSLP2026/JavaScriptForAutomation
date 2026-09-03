/*
Objects_Assignment-3
PS: Create a testData object containing:
username, password, browser, environment, timeout

Use Object.keys() to:
1. Get all property names.
2. Count the number of properties.
3. Check whether username exists.
*/


let testData = {
    username: "tiger_scott",
    password: "secret123",
    browser: "Brave",
    environment: "QA",
    timeout: 30000
};

console.log("1. Get all property names.");
let propertyNames = Object.keys(testData);
console.log(propertyNames); // ['username', 'password', 'browser', 'environment', 'timeout']
console.log("--------------------------------------------------");
console.log("2. Count the number of properties.");
console.log(propertyNames.length); // 5
console.log("--------------------------------------------------");
console.log("3. Check whether username exists.");
console.log(propertyNames.includes("username")); // true

/*
1. Get all property names.
[ 'username', 'password', 'browser', 'environment', 'timeout' ]
--------------------------------------------------
2. Count the number of properties.
5
--------------------------------------------------
3. Check whether username exists.
true
*/
/*
Objects_Assignment-4
PS: Create an object containing test configuration:
browser: "chromium"
headless: true
timeout: 30000
retries: 2

Use Object.values() to:
1. Display all values.
2. Check whether "chromium" exists.
3. Count the number of configuration values.
*/

let browserConfig = {
    browser: "chromium",
    headless: true,
    timeout: 30000,
    retries: 2
};

console.log("1. Display all values.");
let configValues = Object.values(browserConfig);
console.log(configValues); // ['chromium', true, 30000, 2]
console.log("--------------------------------------------------");
console.log("2. Check whether 'chromium' exists.");
console.log(configValues.includes("chromium")); // true
console.log("--------------------------------------------------");
console.log("3. Count the number of configuration values.");
console.log(configValues.length); // 4

/*
1. Display all values.
[ 'chromium', true, 30000, 2 ]
--------------------------------------------------
2. Check whether 'chromium' exists.
true
--------------------------------------------------
3. Count the number of configuration values.
4
*/
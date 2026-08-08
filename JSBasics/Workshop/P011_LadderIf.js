// To validate multiple conditions we can use ladder if else

// Validate 3 numbers and find if they are equal OR greater

let num1 = 100, num2 = 200, num3 = 300;

if(num1 >= num2 && num1 >= num3) {
    console.log(num1 + " is the largest number");
} else if(num2 >= num1 && num2 >= num3) {
    console.log(num2 + " is the largest number");
} else if(num1 === num2 && num1 === num3) {
    console.log("All numbers are equal");
} else {
    console.log(num3 + " is the largest number");
}


// ===============================================================

/*
Validate browser scenario
--------------------------
To perform string equality check in JS we dont have any methods but we can use === strict equality operator.

"hello" === "hello" // true

To validate partial string: includes()
"Google Search"  ===> includes("Search") // true

To convert string into uppercase OR lowercase we can use toUpperCase() and toLowerCase() methods.

e.g.
let browserName = "chrome";
console.log(browserName); // "chrome"
console.log(browserName.toUpperCase()); // "CHROME"
console.log(browserName.toLowerCase()); // "chrome"

*/


let browserName = "EDGE".toLowerCase();

if(browserName === "chrome") {
    console.log("Test case will execute in Chrome browser");
} else if(browserName === "firefox") {
    console.log("Test case will execute in Firefox browser");
} else if(browserName === "edge") {
    console.log("Test case will execute in Edge browser");
} else {
    console.log("Wrong browser... so session started with default browser: Chrome");
}

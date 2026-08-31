/*
Functions
===================
1.Function declaration
2.Function Expression
    2.1.Anonymous function(function without name)
    2.2.Arrow function(short hand function)

*/

console.log("--------- Function Declaration without any parameter ---------");

// Define function
function test1(){ //No parameter
    console.log("Function declaration is calling.....");
}

// Call function
test1(); 
console.log(typeof test1); //function


console.log("--------- Function Declaration with parameters ---------");

/*
To make functions dynamic, we need function parameterization.

Whaht is parameter?
--------------------
- Parameter represents variable which store certain data.
- while defining function, we can declare parameters.

What is arguments?
-------------------
- Arguments are actual data which we pass to variables
- While calling a function, we can pass the arguments.

*/


/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 */
//Define function
function add(num1, num2){ //2 parameters - local variables
    console.log("Addition is: " + (num1 + num2));
}

//Call function
add(100,100); // 200
add(100,"Hi"); // 100Hi
add("Hi","hello"); // Hihello
add(78,88); // 166

console.log("-----Function Declaration with parameters and return keyword-------");

/*
return keyword
--------------
- To return value/result/data from a function, we use return keyword.
- return keyword should be the last statement of the function.
- Value will return to the calling function.
- In the calling function, the returned value should be captured using a variable or direct by the print statement.
*/

//Define function
function test2(msg){
    return msg;
}

//Call function
//Function will return data to a calling function. So either store the result into a variable or print it.
let result = test2("Welcome to learn Playwright");
console.log(result);

//OR

console.log(test2("Hello All"));

console.log("-----Real time use case------");

//Scenario: Launch browser --> Open application if & only if the browser is launched

function launchBrowser(bname){
     switch(bname.toLowerCase().trim()){
        case "chrome":
            console.log("Launching chrome browser");
            return true;
            break;
        case "edge":
            console.log("Launching edge browser");
            return true;
            break;
        case "firefox":
            console.log("Launching firefox browser");
            return true;
            break;
        default:
            console.log("Wrong browser");
            return false;
     }
}

if(launchBrowser("Edge")){
    console.log("Opening application in the current browser.");
} else {
    console.log("Browser is not yet opened.");
}
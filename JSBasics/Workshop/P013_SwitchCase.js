/**
 Switch case is used to validate multiple conditions.

key === value
- we don't use any relational operator.
- we can use break after every case value.

break statement
-----------------
- break we can use only in loop and switch case
- break will exit from switch body OR loop body

Syntax
-------

switch(key){
case value1: statement;
                break;
case value2: statement;
                break;
    default: statement;
                break;

}

*/

let color = "red";

switch(color){
    case "red" : 
                console.log("STOP");
                break;
    case "yellow":
                console.log("CAUTION");
                break;    
    case "green":
                console.log("GO");
                break;    
    default:
                console.log("Wrong Signal Color");
                break;    
}

//---------------------------------------------------------------

let browserName = "Edge".toLowerCase();

switch (browserName) {
    case "chrome":
        console.log("Test case will execute on the Chrome browser");
        break;
    case "edge":
        console.log("Test case will execute on the Edge browser");
        break;
    case "firefox":
        console.log("Test case will execute on the Firefox browser");
        break;
    default:
        console.log("Invalid Browser so session started with Chrome!!");
        break;
}
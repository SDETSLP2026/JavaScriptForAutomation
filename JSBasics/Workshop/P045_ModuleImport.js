// import { browserName,getData,Product} from "./P044_ModuleExport.js";

// console.log("The browser name is: " + browserName); //The browser name is: Chrome

// getData(); //This is getData() function, as an automation test data.

// let obj=new Product(101,'laptop');
// obj.getInfo(); //101 : laptop


//---------------------------------------------------------


//alise
//----------


import * as data from "./P044_ModuleExport.js";

console.log("The browser name is: " + data.browserName); //The browser name is: Chrome
data.getData(); // This is getData() function, as an automation test data.

let obj=new data.Product(101,'laptop');
obj.getInfo(); //101 : laptop
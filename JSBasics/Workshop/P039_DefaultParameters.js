// When no parameters are passed, we can send default parameters to avoid undefined in the output.

//Define function
function getTrainerName(tname = "Swapnil"){
    console.log("Trainer name is: " + tname);    
}

//Call function
getTrainerName("Priyanka");
getTrainerName(); //undefined 

// by giving (tname = "Swapnil") - we will get 'Swapnil' instead of 'undefined'

console.log("-----Real time use case------");

//Scenario: Launch browser --> Open application if & only if the browser is launched

function launchBrowser(bname = "chrome"){ //with default parameter
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

if(launchBrowser()){
    console.log("Opening application in the current browser.");
} else {
    console.log("Browser is not yet opened.");
}
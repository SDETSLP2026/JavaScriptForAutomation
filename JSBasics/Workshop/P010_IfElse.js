// If-else: validate true and false condition

//validate number if even or odd

let num = 13;
if(num % 2 === 0) {
    console.log(num + "Number is even");
} else {
    console.log(num + "Number is odd");
}

// API Status code validation
// post() ===> create resource 201

let statusCode = 201;

if(statusCode === 201) {
    console.log("POST call completed successfully");
} else {
    console.log("POST call failed");
}

//======================================================

let responseCode = 340;
//success code range - 200 - 299

if(responseCode >= 200 && responseCode <= 299) {
    console.log("This is success response code");
} else {
    console.log("This is failure response code");
}
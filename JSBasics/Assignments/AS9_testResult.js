/* ControlFlowStatements_Assignment-3
PS: Write a JS script that evaluates a test case result based on HTTP response status code.
The program should use Nested if..else statements to determine result message.  
Instructions:  
1.create a new file named testResult.js Inside the file declare variable to store status code Let responseCode=200;  
2.use if else Nested statements to evaluate response code and print status message  
3.Use the following logic for result evaluation:
If response Code is 100-199→print: Informational  
If response Code is 200-299→print: successful  
If response Code is 300-399→print: Redirectional  
If response Code is 400-499 →print: Client Error 
If response Code is 500-599→print: Server Error 
For any other code →print Unkown Status code  
4.Run script using node testResult.js
*/

let responseCode = 200;


if(responseCode >= 100 && responseCode <= 199){
    console.log("Informational");
} else if(responseCode >= 200 && responseCode <= 299){
    console.log("Successful");
} else if(responseCode >= 300 && responseCode <= 399){
    console.log("Redirectional");
} else if(responseCode >= 400 && responseCode <= 499){
    console.log("Client Error");
} else if(responseCode >= 500 && responseCode <= 599){
    console.log("Server Error");
} else {
    console.log("Unkown Status code"); 
}
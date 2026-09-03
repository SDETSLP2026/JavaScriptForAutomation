/*
In JS - String is an immutable object.
The value declared for the String won't be modified.
If you modifed the value - the string will change its reference.

String is a collection of characters.
String in JS is a primitive data types and dynamic objects.
*/

let s1 = "Hello";
console.log(s1);

let s2 = "Hello";
console.log(s2);

console.log(s1 === s2); //true

//-----------------------------------

s1=s1+"All";
console.log(s1); 

console.log(s1===s2);//false - it is matching reference(address of object)

//s1[0] = 'h' - //TypeError: Cannot assign to read only property '0' of string 'HelloAll'

console.log(s1); 

//String Methods
//-----------------------------------

//length property - This returns the length of a String object
let str1 = "Hello All";
console.log("Length of total characters: " + str1.length); //9

//String conversion: toLowerCase() & toUpperCase()
console.log(str1.toLowerCase()); //hello all
console.log(str1.toUpperCase()); //HELLO ALL

//for Equality test, use strict equality ==== sign and not any method
console.log("Google" === "Google"); //true

//for searching substring: includes()
let str2 = "Playwright is webui and api testing end to end framework";

console.log("Are you searching for webui?: " + str2.includes("webui")); //true

console.log("Are you searching for Automation Testing?: " + str2.includes("Automation Testing")); //false

//for search string prefix value - use startsWith("PrefixValue")
console.log("Is this sentence starts with Playwright?: "+str2.startsWith('Playwright'));//true
console.log("Is this sentence starts with Play?: "+str2.startsWith('Play'));//true
console.log("Is this sentence starts with P?: "+str2.startsWith('P'));//true
console.log("Is this sentence starts with wright?: "+str2.startsWith('wright'));//false

//for search string suffix value - use endsWith("SuffixValue")
console.log("Is this sentence ends with framework?: "+str2.endsWith('framework'));//true
console.log("Is this sentence ends with work?: "+str2.endsWith('work'));//true
console.log("Is this sentence ends with k?: "+str2.endsWith('k'));//true
console.log("Is this sentence ends with frame?: "+str2.endsWith('frame'));//false

//trim(): Removes the leading and trailing white spaces and line terminator characters from a string.
//To ignore white space before and after string use - trim()

let str3 = "     Welcome All      ";
console.log(str3); //     Welcome All       - with white spaces
console.log(str3.trim()); //Welcome All - after trimming white spaces
console.log(str3.trimStart()); //Welcome All        - after trimming white spaces at the start
console.log(str3.trimEnd()); //Welcome All       - after trimming white spaces at the end

//charAt(index): returns character/string for specific index
let str4 = "Hello All To learn String";
console.log(str4.length); //25 [0 to 24]

console.log("The character at the 8th index is: " + str4.charAt(8)); //l
console.log("The character at the 15th index is: " + str4.charAt(15)); //a

//String is not an array - so we get empty string and not undefined
console.log("The character at the 30th index is: " + str4.charAt(30)); // empty string


//indexOf() - Returns the position of the first occurrence of a substring, or -1 if it is not present.
console.log(str4.indexOf('A')); //6
console.log(str4.indexOf(6)); //6


//concat() -
let str5 = "hi";
let str6 = "how are you?"
console.log(str5.concat(" " + str6)); //hi how are you?
console.log(str5 +" "+str6); //hi how are you?

//replace() and replaceAll():Replaces text in a string, using a regular expression or search string.
let str7 = "Automation Testing is evoled with AI Automation Testing";
console.log(str7);
console.log(str7.replace("Testing", "*******"));// Replaces only 1 occurance
console.log(str7.replaceAll("Testing", "#########")); // Replaces all occurances


//convert this string 
// even position character into uppercase 
// and odd position character into lowercase
let result="";
let fname="Priyanka";
console.log(fname); //Priyanka

for(let i=0; i<fname.length; i++){
    if(i%2 === 0){
        //even
        result=result+fname.charAt(i).toUpperCase();
        
    } else {
        //odd
        result=result+fname.charAt(i).toLowerCase();
    }
}
console.log(result); //PrIyAnKa


console.log("==========");

for(let i in fname)
{
    console.log(i+" : value is: "+fname[i]);
    
}

//split(regular express) Array[String]
let tools = "Selenium,Cypress,Playwright,Appium,Postman,Jmeter";
console.log(tools);
console.log(typeof tools);// String

let allTools = tools.split(",");
console.log(allTools);

//extract single element 
console.log(allTools[2]); //Playwright

let apiTestTool = tools.split(",")[4];
console.log(apiTestTool); //Postman

console.log("--------------------------");

let date = "August 2026";
let month = date.split(" ")[0];
let year = date.split(" ")[1];

console.log("This is " + month + " of " + year); //This is August of 2026

console.log("--------------------------");

// Bill amount validation scenario

let bill = "Your total bill amount is 5000";
let data = bill.split(" ")[5];
console.log(data); //5000
console.log(typeof data); //string

//String to Number type casting/coercion
let amount = Number(data);
console.log("The amount is: " + amount); //The amount is: 5000
console.log(typeof amount); //number

if(amount < 10000){
    console.log("The amount is valid");
}


//---------------------------------------------------------------
//write logic for reverse string

let baseStr = "JavaScript";
let revStr = "";
for(let i=baseStr.length-1; i>=0; i--){
    revStr = revStr + baseStr.charAt(i);
}
console.log("Reverse String is: " + revStr); //Reverse String is: tpircSavaJ

//---------------------------------------------------------------
//For string we don't have direct reverse number

let testData = "This is test data for Playwright";
let totalWords = testData.split(" ").length;
console.log("Total words are: " + totalWords); //Total words are: 6


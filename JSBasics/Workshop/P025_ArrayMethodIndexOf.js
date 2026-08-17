/*
indexOf(searchElement, fromIndex) - returns index number

Returns the index of the first occurance of a value in an array.
OR Returns -1 if it is not present.
*/

let month=["Jan","Feb","Mar","Apr","May","Feb","Jun","Jul","Feb","Apr","Feb"];

console.log("Here is the complete month array: " + month);

console.log("The index of Aug: " + month.indexOf("Aug")); //-1

console.log("The index of May: " + month.indexOf("May")); //4

//index of Feb: firstOccurance
let febIndex1 = month.indexOf("Feb");
console.log("The first occurance index of Feb is at: " + febIndex1); //1

//index of Feb: secondOccurance
let febIndex2 = month.indexOf("Feb", febIndex1+1 );
console.log("The second occurance index of Feb is at: " + febIndex2); //5
// "Feb" - This is a search element
// febIndex1+1 - We already have the first index 

//index of Feb: thirdOccurance
let febIndex3 = month.indexOf("Feb", febIndex2+1 );
console.log("The third occurance index of Feb is at: " + febIndex3); //8

//give me last Feb index:lastIndexOf()
console.log("The last occurance index of Feb is at: " + month.lastIndexOf("Feb")); //10


//------------------------------------------------------


//get all the occurrences of Feb in one go, can we use for loop? - Yes

let indexes = [];
let searchMonth = "Feb";

for(let i in month){
    if(month[i] === searchMonth){
        indexes.push(i);
    }  
}

console.log(`The index values for month ${searchMonth} is: ` + indexes);

//whenever you are having special character inside the print statement use `` backticks

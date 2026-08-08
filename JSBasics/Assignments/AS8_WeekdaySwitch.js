/*
Print the day of the week based on number (1–7). 
What you will use here? If-else or switch case? - We will prefer to use switch case here as we know the data in Key = Value format.
*/

let weekDay = 4;

switch (weekDay) {
    case 1: console.log("Sunday"); break;
    case 2: console.log("Monday"); break;
    case 3: console.log("Tuesday"); break;
    case 4: console.log("Wednesday"); break;
    case 5: console.log("Thursday"); break;
    case 6: console.log("Friday"); break;
    case 7: console.log("Saturday"); break;
    default: console.log("Something went wrong"); break;
}
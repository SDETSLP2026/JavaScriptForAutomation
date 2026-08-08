/*
Write a script that suggests what clothing to wear based on the current temperature. 
The program should use if...else or if...else if statements to determine the suggestion.  
Instructions: 
1. Create a new file named weather.js. 
Inside the file, declare a variable to store the temperature,  
for example: let temperature = 28;  
2. Use if...else or if...else if statements to decide and print the clothing suggestion based on the temperature 
3. Use the following logic for clothing suggestion:  
If temperature is above 35°C Print: wear light cotton clothes  
If temperature is between 20°C and 35°C Pint: Normal casual wear  
If temperature is between 10°C and 19°C Print: Wear a jacket  
If temperature is below 10°C Print: stay indoors, it's too cold! Run the script using: node weather.js  
Test Cases to Try: • temperature = 40 • temperature = 28 . temperature- 15
*/

// let temperature = 40;
// let temperature = 28;
let temperature = -15;

if(temperature > 35){
    console.log("You can wear light cotton clothes.");
} else if(temperature >= 20 && temperature <= 35){
    console.log("You can wear normal casual wear clothes.");
} else if(temperature >= 10 && temperature <= 19){
    console.log("You can wear a jacket.");
} else if(temperature < 10){
    console.log("You should stay indoors, it's too cold!");
}
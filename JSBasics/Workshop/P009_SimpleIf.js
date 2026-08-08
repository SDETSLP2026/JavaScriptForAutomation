
/*
SimpleIf: this is applicable for validating single true condition

equality
=============
1.loose equality ==

3.strict equality ===
*/


//validate current year 2026

console.log("program started.....");

let cYear=2027;

if(cYear===2026)
{
console.log("Year matched....!");

}

console.log("program ends.....");


/*
Automation testing
--------------
1.url match
2.test url protocol
3.test url should not be null

*/

console.log("-------------");
let actUrl="https://www.amazon.in";
let expUrl="https://www.amazon.in";

if(actUrl===expUrl)
{
    console.log("Url is matched");
    
}

console.log("-------------");


//check for url with protocol:https
//partail data(string)validate includes()

if(actUrl.includes("https"))
{
console.log("Current url is valid!");

}

console.log("-------------");
//url should not be null

if(actUrl != null)
{
console.log("Url is not null");

}
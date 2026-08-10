/*
Arrays_Assignment-3
PS: Browser Tabs Automation 
Scenario: 
A browser automation framework tracks currently opened tabs. 
Question: 
Declare an array with "Google", "YouTube", "ChatGPT" and: 
1. Close the last opened tab  
2. Add "GitHub" as the first tab  
3. Display tabs in reverse order  
*/

let openTabsArr = ["Google", "YouTube", "ChatGPT"];
console.log("The current opened tabs:- ");
console.log(openTabsArr);

console.log("------------------------------------------------------------------------");

console.log("1. Close the last opened tab");
let lastOpenTab = openTabsArr.pop();
console.log("The last opened tab which is closed or removed is: " + lastOpenTab);
console.log("Now the remaining opened tabs are: " + openTabsArr);

console.log("------------------------------------------------------------------------");

console.log("2. Add GitHub as the first tab");
openTabsArr.unshift("GitHub");
console.log("Now the remaining opened tabs are: " + openTabsArr);

console.log("------------------------------------------------------------------------");

console.log("3. Display tabs in reverse order");
let revOpenTabsArr = openTabsArr.reverse()
console.log("Open tabs in reverse order: " + revOpenTabsArr);


/* Output:
The current opened tabs:- 
[ 'Google', 'YouTube', 'ChatGPT' ]
------------------------------------------------------------------------
1. Close the last opened tab
The last opened tab which is closed or removed is: ChatGPT
Now the remaining opened tabs are: Google,YouTube
------------------------------------------------------------------------
2. Add GitHub as the first tab
Now the remaining opened tabs are: GitHub,Google,YouTube
------------------------------------------------------------------------
3. Display tabs in reverse order
Open tabs in reverse order: YouTube,Google,GitHub
*/

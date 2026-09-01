/*
forEach(): Iteration and basic operations
map(): Transform the array elements
filter(): search element of array
reduce(): reduce array in one format
*/

console.log("------------ forEach() ------------");

let arr = [10,20,30,40];
console.log(arr);

for(let num of arr){
    console.log(num*num);
}

//Using forEach()

arr.forEach((num)=>{
    num*num*num;
})

console.log("------------ map() ------------");

let loc = ['Pune','Mumbai','Delhi','Nashik'];
console.log(loc); //[ 'Pune', 'Mumbai', 'Delhi', 'Nashik' ]

//print all the array elements in uppercase
//map(): Calls a defined callback function on each element of an array, and returns an array that contains the results.

let finalLoc = loc.map((city)=>city.toUpperCase()); // we can avoid curly brackets for a single sentence
console.log(finalLoc); //['PUNE', 'MUMBAI', 'DELHI', 'NASHIK']

//secnario : for footerlinks prefix the appname
let footerlinks = ['AboutUs','Help','Cart','PrivacyPolicy'];
console.log(footerlinks);

let resultArr = footerlinks.map(link=>"Amazon "+link);
console.log(resultArr); //['Amazon AboutUs',  'Amazon Help',  'Amazon Cart',  'Amazon PrivacyPolicy']

//3. filter(): search element of array
console.log("------------ filter() ------------");
let elements = [1,2,3,4,5,6,7,8,9,10];
console.log(elements);

//filter():Returns the elements of an array that meet the condition specified in a callback function.
//find even numbers abnd store/print it

let evenNumbers = elements.filter((num)=>num%2==0);
console.log(evenNumbers); //[ 2, 4, 6, 8, 10 ]

//------------------------------------

let product = ["Mobile", "Keyboard", "Mouse", "Monitor", "HardDrive"];

//search for mouse in the product array and return it

let expEle = product.filter((ele)=>{
    if(ele==="Mouse"){
        return ele;
    }
});

console.log("Expected element found: ", expEle); //['Mouse']

//4. reduce():  creating array in one form : sum of elements of array
console.log("------------ reduce() ------------");

let data = [10,20,30,40,50];

//sum of array elements using reduce()
let sum = 0;
for(let num of data){
    sum = sum +num;   
}

console.log("Sum of array elements: " + sum); //150

//using reduce()
//Syntax: reduce((prevvalue,currentvalue)=>,initialvalue)

let result = data.reduce((sum, num)=> sum + num, 0); //0 is the initial value of accumulator
console.log("Sum of array elements using reduce(): " + result); //150
/*
splice() - This method is used to insert or remove elements at any position of an array.

Syntax: splice(start_index, deleteCount, elementsToInsert)
start index - the index from where addition/deletion should start
deleteCount - how many elements should be deleted, write 0 if nothing.
elementsToInsert - write the elements which should be inserted.

Removes elements from an array and, 
if necessary, 
inserts new elements in their place, returning the deleted elements.

*/

let fruits=['Mango','Orange','Banana','Grapes',"Kiwi",'Apple'];
//index     0        1           2       3       4      5
console.log(fruits);//[ 'Mango', 'Orange', 'Banana', 'Grapes', 'Kiwi', 'Apple' ]

console.log("-------------------------------------"); 

//delete from array Banana:splice()

let deletedEntry1 = fruits.splice(2,1);
console.log(deletedEntry1); //[ 'Banana' ]
console.log(fruits); // [ 'Mango', 'Orange', 'Grapes', 'Kiwi', 'Apple' ]

//start with 1 and delete 2 entries
let deletedEntry2 = fruits.splice(1,2);
console.log(deletedEntry2); // [ 'Orange', 'Grapes' ]
console.log(fruits); //[ 'Mango', 'Kiwi', 'Apple' ]

//insert two fruits 'Orange', 'Grapes'  after kiwi
fruits.splice(2, 0, 'Orange', 'Greps' );
console.log(fruits);//[ 'Mango', 'Kiwi', 'Orange', 'Greps', 'Apple' ]

console.log("-------------------------------------");

//-ve index      -5     -4       -3      -2         -1
let products=['mobile','laptop','mouse','keyboard','monitor'];
//+ve index       0      1        2       3          4

console.log(products);//[ 'mobile', 'laptop', 'mouse', 'keyboard', 'monitor' ]

//delete laptop and insert printer
products.splice(1, 1, 'printer');
console.log(products); //[ 'mobile', 'printer', 'mouse', 'keyboard', 'monitor' ]

//-ve indexing
//starts with -2 index delete 1 and insert processor
let deletedEntry3 = products.splice(-2, 1, "processor");
console.log(deletedEntry3); // keyboard
console.log(products); // ['mobile', 'printer', 'mouse', 'processor', 'monitor']

console.log("-------------------------------------");

//delete printer use -ve index
let deletedEntry4 = products.splice(-4,1);
console.log(deletedEntry4); // printer
console.log(products); // ['mobile', 'mouse', 'processor', 'monitor']

console.log("-------------------------------------");

//can we insert multiple elements
products.splice(-4, 0, 'laptop','smartdevice','pendrive');
console.log(products);
/*
[
  'laptop',
  'smartdevice',
  'pendrive',
  'mobile',
  'mouse',
  'processor',
  'monitor'
]
*/
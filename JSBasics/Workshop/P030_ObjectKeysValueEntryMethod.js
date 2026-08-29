let product={
    pid:1010,
    pname:"Macbook pro",
    price:8799809,
    getData:()=>
    {
        console.log("Hello All");
        
    }
}

console.log(product);
product.getData();

//Iteration
/*
console.log("------for of loop-----");
//iterates over values applicable for array and string
for(let i of product)//TypeError: product is not iterable
{
    console.log(i);
    
}*/

console.log("--------for in loop-----");
//iterates over keys
for(let i in product){
    console.log(i);    
}

console.log("------------values------");
for(let i in product){
    console.log(product[i]);
}

let allKeys = Object.keys(product);
console.log(allKeys);

let allValues = Object.values(product);
console.log(allValues);

let allEntries = Object.entries(product);
console.log(allEntries);
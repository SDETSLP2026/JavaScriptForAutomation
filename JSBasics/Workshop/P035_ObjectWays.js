/*
Ways to declare objects:
-------------------------
1. Using Object Literal
2. Using Class Level (ES6)
3. Using constructor function (ES6)
4. Prototype based (Object interface)

*/

console.log("----------1. Using Object Literal-------------");

let user = {
    id:1010,
    fname:"Siyaa"
}

console.log(user); //{ id: 1010, fname: 'Siyaa' }
console.log(typeof user); // object


console.log("----------2. Using Class Level (ES6)-------------");

class Product{
    //global variables declaration
    pid;
    pname;
    price;

    constructor(pid,pname,price){ //local variables

        //Syntax - this.<global_var> = <local_var> mapping
        this.pid = pid;
        this.pname = pname;
        this.price = price;
    }

    getData(){
        console.log("ProductId: "+this.pid+"\nProductName is: "+this.pname+"\nPrice is: "+this.price);
    }
}

//object creation
let p1 = new Product(111,"MacBook Pro", 999999)
console.log(p1); //Product { pid: 111, pname: 'MacBook Pro', price: 999999 }
console.log(typeof p1); //object


console.log("----------3. Using constructor function (ES6)-------------");
/*
Constructor function
====================
1. It is used to create and initialize object
2. It is always declared with function keyword and start with capital letter
*/

function Employee(eid, ename, eaddress){
    this.eid = eid;
    this.ename = ename;
    this.eaddress = eaddress;
    
    //modern syntax method
    this.getData=()=> {
        console.log(this.eid+" : "+this.ename+" : "+this.eaddress);
    }
}

let e1 = new Employee(2020,"Sarang","Pune");
e1.getData(); // 2020 : Sarang : Pune

let e2 = new Employee(3030);
e2.getData(); // 3030 : undefined : undefined


console.log("----------4. Prototype based (Object interface)-------------");
/*
The object will be created based on the given structure.
Syntax: Object.create(object prototype)

prototype of literal object

*/

let student = {
    id:222,
    sname:"Amit",
    subject:"Testing",
    score:89
}

//To create object for same student prototype
//create(): Creates an object that has the specified prototype or that has null prototype.

let s1 = Object.create(student);
console.log(s1); //{}
console.log(typeof s1); //object

console.log(s1.id); // 222
console.log(s1.sname); // Amit
console.log(s1.subject); // Testing
console.log(s1.score); // 89
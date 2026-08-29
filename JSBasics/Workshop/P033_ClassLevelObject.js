/*
class
------------
-Class is template or blueprint where we can describe properties of the onject
- Class is collection of similar type of objects

-Object is instance of class
-In Js class level object we can able create using new keyword
-Class can have variables,methods,constructor,block


constructor
------------
-Constructor is special method which is used to initialized object
-constructor get called at the time of object creation
-In Js only one constructor allowed
 that is means costructor overloading not allowed...

this keyword
--------------
this keyword refers current class object(data+methods)

methods vs function
----------------------
methods are belongs to classes
In class you cannot design function

Functions can become method but methods can not become function

*/


class StudentData
{
    //public data
     id;
     fname;
     location;
     emailId;
     //private data
     #phno;

    //constructor: to initialize object
    constructor(id,fname,location,emailId)//local
    {
        this.id=id;//assigning local id to current class this.id
        this.fname=fname;
        this.emailId=emailId;
        this.location=location;
    }
//SyntaxError: A class may only have one constructor
    // constructor(id,fname)
    // {
    //     this.id=id;
    //     this.fname=fname;

    // }

    //method

    getData()
    {
        console.log("----Student details---");
        console.log("id is: "+this.id);
        console.log("name is: "+this.fname);
        
               
    }


}

//To call and access member of class we need to create object
//object will be create using new keyword

const s1=new StudentData(101,'Parag','Us','parag@gmail.com');

console.log(s1.id);
console.log(s1.fname);
console.log(s1.location);
console.log(s1.emailId);


console.log("------------");

const s2=new StudentData(201,"Pooja","India","pooja@gmail.com");

console.log(s2.id);
console.log(s2.fname);
console.log(s2.emailId);


console.log("------------");

const s3=new StudentData(301,"Amit");
console.log(s3.id);//301
console.log(s3.fname);//Amit
console.log(s3.location);//undefined
console.log(s3.emailId);//undefined

s3.getData();

console.log("----------------");

//no reference object: if object is not assigned to variable
new StudentData(401,"Kirti","Pune","kirti@gmail.com");

//null object
let s4=new StudentData(501,"Karan");
s4=null;
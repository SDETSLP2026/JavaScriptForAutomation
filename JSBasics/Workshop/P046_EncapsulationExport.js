/*
Encapsulation: Binding of data and functions together in single unit is called Encapsulation.

Purpose: To protect the data from outside access and modification. (Data Hiding/Security)

Example: Capsule, Password, ATMs (In JS, we can achieve encapsulation using class and constructor.)

In Automation Testing, we can use encapsulation to protect the test data from outside access and modification
by using page object model design pattern.

How to implement it
-----------------------
We can store data as private data and provide access to private data with public methods.

In JS, private data we can store using - #variablename
In JS, public methods we can design using - setters() - To set the data and getters() - To get the data.
 
*/

export class Employee{

    //public data
    id;
    ename;

    //private data
    #salary = 90000;

    constructor(id, ename){
        this.id = id;
        this.ename = ename;
    }        

    getData(){
        console.log("Employee ID: "+ this.id
            +" Employee Name: "+ this.ename
            +" Employee Salary: "+ this.#salary);
    }

    //public methods for private data
    //setters

    setSalary(newSalary){
        this.#salary = newSalary;
    }

    //getters
    getSalary(){
        return this.#salary;
    }

}


/*
//object
let e1=new Employee(101,"Jay");
console.log(e1.id);
console.log(e1.name);

e1.getData();
//Property '#salary' is not accessible outside class 'Employee' because it has a private identifier.
//console.log(e1.#salary);

//modify salary
e1.id=201;

e1.getData();
*/
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
In JS, public methods we can design using - getters() - To get the data and setters() - To set the data.
 
*/

import { Employee } from "./P046_EncapsulationExport.js";

let e1=new Employee(101,"Jay");
e1.getData(); //Employee ID: 101Employee Name: JayEmployee Salary: 90000

//e1.#salary=125000;

e1.setSalary(125000);

//console.log(e1.getSalary());


e1.getData(); //Employee ID: 101Employee Name: JayEmployee Salary: 125000
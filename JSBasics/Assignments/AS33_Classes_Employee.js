/*
Classes_Assignment-4
PS: Create an Employee class with name, salary, and department. Create a method that calculates a 10% bonus and displays the total salary.
*/

class Employee{
    name;
    salary;
    dept;

    constructor(name, salary, dept){
        this.name = name;
        this.salary = salary;
        this.dept = dept;
    }
    
    getData(){
        console.log("----Employee details---");
        console.log("Name: " + this.name);
        console.log("Salary: " + this.salary);
        console.log("Department: " + this.dept);
    }

    calculateBonus(){
        let bonus = this.salary * 0.10;
        let totalSalary = this.salary + bonus;
        console.log(`Bonus: ${bonus}. Total salary after bonus is ${totalSalary}.`);
    }
}

//Creating an object of Employee class
let emp1 = new Employee("Kshitija", 50000, "HR");
emp1.getData();
emp1.calculateBonus();

/*
----Employee details---
Name: Kshitija
Salary: 50000
Department: HR
Bonus: 5000. Total salary after bonus is 55000.
*/
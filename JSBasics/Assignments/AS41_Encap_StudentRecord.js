/*
Encapsulations_Assignment-1
PS: Student Record System - 
Create a Student class that uses encapsulation to protect its data. 
The class should have the following private fields:
    • name (String)
    • rollNumber (int)
    • grade (char)
Provide appropriate getter and setter methods to access and modify the values. 
Also, create method that:
    • Creates a new student object
    • Sets the data using setters
    • Displays the data using getters and test it in separate class
*/


class Student{
    sname;
    srollNo;
    sgrade;

    constructor(sname, srollNo, sgrade){
        this.sname = sname;
        this.srollNo = srollNo;
        this.sgrade = sgrade;
    }

    getData(){
        console.log("Student Name: " + this.sname
            + "\nStudent Roll No: " + this.srollNo
            + "\nStudent Grade: " + this.sgrade);
    }

    setStudentData(new_sgrade){
        this.sgrade = new_sgrade;
    }

    getStudentData(){
        return this.sgrade;
    }

}


let s1 = new Student("Swapnil", 101, "A");
s1.getData();

s1.setStudentData("A+");
s1.getData();
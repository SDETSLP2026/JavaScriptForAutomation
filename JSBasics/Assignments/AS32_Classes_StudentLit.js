/*
Classes_Assignment-3
PS: Create a student object with the properties name, age, course, and marks. Print all the details.
*/

class Student {
    name;
    age;
    course;
    marks;

    constructor(name, age, course, marks) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.marks = marks;
    }

    getData(){
        console.log("----Student details---");
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Course: " + this.course);
        console.log("Marks: " + this.marks);
    }

}

//Creating an object of Student class
let student1 = new Student("John Doe", 20, "Computer Science", 85);
student1.getData();

/*
----Student details---
Name: John Doe
Age: 20
Course: Computer Science
Marks: 85
*/
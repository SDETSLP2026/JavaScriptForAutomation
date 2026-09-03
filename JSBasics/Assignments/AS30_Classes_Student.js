/*
Classes_Assignment-1
PS: Create a Student class with properties name, age, and course. Create two objects and display their details.
*/

//Create a Student class with properties name, age, and course.
class Student{
    name;
    age;
    course;

    constructor(name,age,course){
        this.name = name;
        this.age = age;
        this.course = course;
    }

    getData(){
        console.log("----Student details---");
        console.log("name is: "+this.name);
        console.log("age is: "+this.age);
        console.log("course is: "+this.course);
    }
}

//Create two objects and display their details.
let s1 = new Student("Swapnil",25,"JavaScript");
s1.getData();

let s2 = new Student("Sinamika",22,"Python");
s2.getData();
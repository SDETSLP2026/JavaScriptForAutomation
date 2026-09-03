/*
Objects_Assignment-1
PS: Create a student object with the following properties:
• id • name • age • course • marks
Perform the following:
1. Print the complete object.
2. Print the student's name.
3. Print the student's marks.
4. Change the student's course.
5. Update the student's marks.
6. Add a new property city.
7. Delete the age property.
*/

let student = {
    id: 1,
    name: "Sachin",
    age: 20,
    course: "JavaScript",
    marks: 85
};

// 1. Print the complete object.
console.log(student); //{ id: 1, name: 'Sachin', age: 20, course: 'JavaScript', marks: 85 }

// 2. Print the student's name.
console.log(student.name); // Sachin

// 3. Print the student's marks.
console.log(student.marks); // 85

// 4. Change the student's course.
student.course = "Python";
console.log("----- After changing the course -----");
console.log(student); // { id: 1, name: 'Sachin', age: 20, course: 'Python', marks: 85 }

// 5. Update the student's marks.
student.marks = 90;
console.log("----- After updating the marks -----");
console.log(student); // { id: 1, name: 'Sachin', age: 20, course: 'Python', marks: 90 }

// 6. Add a new property city.
student.city = "New York";
console.log("----- After adding the city property -----");
console.log(student); // { id: 1, name: 'Sachin', age: 20, course: 'Python', marks: 90, city: 'New York' }

// 7. Delete the age property.
delete student.age;
console.log("----- After deleting the age property -----");
console.log(student); // { id: 1, name: 'Sachin', course: 'Python', marks: 90, city: 'New York' }
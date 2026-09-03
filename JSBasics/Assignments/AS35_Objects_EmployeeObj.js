/*
Objects_Assignment-2
PS: Create an employee object containing:
id, name, department, designation, salary

Perform:
1. Access each property using dot notation.
2. Access each property using bracket notation.
3. Update the salary.
4. Add a location property.
5. Delete the designation property.
*/

let employee = {
    id: 101,
    ename: "John Doe",
    department: "IT",
    designation: "Software Engineer",
    salary: 50000
};

console.log("1. Access each property using dot notation.");
console.log(employee.id); // 101
console.log(employee.ename); // John Doe
console.log(employee.department); // IT
console.log(employee.designation); // Software Engineer
console.log(employee.salary); // 50000
console.log("--------------------------------------------------");
console.log("2. Access each property using bracket notation.");
console.log(employee["id"]); // 101
console.log(employee["ename"]); // John Doe
console.log(employee["department"]); // IT
console.log(employee["designation"]); // Software Engineer
console.log(employee["salary"]); // 50000
console.log("--------------------------------------------------");
console.log("3. Update the salary.");
employee.salary = 60000;
console.log(employee); // { id: 101, ename: 'John Doe', department: 'IT', designation: 'Software Engineer', salary: 60000 }
console.log("--------------------------------------------------");
console.log("4. Add a location property.");
employee.location = "New York";
console.log(employee); // { id: 101, ename: 'John Doe', department: 'IT', designation: 'Software Engineer', salary: 60000, location: 'New York' }
console.log("--------------------------------------------------");
console.log("5. Delete the designation property.");
delete employee.designation;
console.log(employee); // { id: 101, ename: 'John Doe', department: 'IT', salary: 60000, location: 'New York' }

// Array
// const fruits = ["Apple", "Grapes", "Oranges"];

// console.log(fruits[0]);
// const fruit1 = fruits[0];
// const fruit2 = fruits[1];
// const fruit3 = fruits[2];
// console.log(fruit3);
// const [fruit1, fruit2, fruit3] = fruits;
// console.log(fruit2, fruit1, fruit3);


// Object
const employee = {
    name : "Ali",
    email : "ali@gmail.com",
    age : 22
}

// const emp_name = employee.name;
// console.log(emp_name);

const {name: fullName, email} = employee;
console.log(fullName, email);
//Destructuring

// Question 1: Khai báo date có dạng như sau:
//var date: number[] = [2020,12,08];
//Hãy lấy ra year, month, day của date và in ra
var date: number[] = [2020, 12, 08];
var [year, month, day] = date;
console.log(year);
console.log(month);
console.log(day);

// Question 2:
// Khai báo fullname có dạng như sau
// const person = {
// firstName: "nguyen",
// lastName: "a",
// age: 20
// };
// Hãy lấy ra firstName, lastName, age của persn và in ra

const person = {
firstName: "nguyen",
lastName: "a",
age: 20
};
var {firstName: f, lastName: l, age: a} = person;
console.log(f);
console.log(l);
console.log(a);

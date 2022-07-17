import { Student } from "./Student";

var student = new Student("Nam", "rocket 05");
student.printInformation();     // ID: 1
                                // Name: Nam       
                                //  Class: rocket 05

console.log(student.add("a","b"));  // ab
console.log(student.add(1,2));  // 3
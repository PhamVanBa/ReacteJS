import { Person } from "./Person";

let student1 = new Person<number, string>(1, "nam");
let student2 = new Person<string, string>("MSV13020073", "nam");

printName(student1);    // Person { id: 1, name: 'nam' }

function printName<T extends Person<number, string>> (person: T): void {
    console.log(person);    
}  



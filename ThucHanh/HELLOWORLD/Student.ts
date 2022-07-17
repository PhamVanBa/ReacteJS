import { Person } from "./Person";

export class Student extends Person {

    private clazz: string;

    constructor(name: string, clazz: string) {
        super(name);
        this.clazz = clazz;
    }

    public getClazz(): string {
        return this.clazz;
    }

    public setClazz(value: string) {
        this.clazz = value;
    }

    public printInformation(){
        super.printInformation();
        console.log("Class: " + this.clazz);
    }

    public add(a: any, b:any): any {  
        return a + b;  
    }
}


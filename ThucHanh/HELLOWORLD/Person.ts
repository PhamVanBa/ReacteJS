import { IWork } from "./IWork";

export class Person implements IWork {

    private static counter: number = 0;

    private id: number;
    private name: string;
    language: String;

    constructor(name: string) {
        this.id = ++Person.counter;
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setName(value: string) {
        this.name = value;
    }

    public printInformation() {
        console.log("ID: " + this.id);
        console.log("Name: " + this.name);
    }

    rollup(): void {
        console.log(this.id + " Rollup");
    }
}





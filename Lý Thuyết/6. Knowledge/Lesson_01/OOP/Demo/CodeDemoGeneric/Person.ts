export class Person<T, U> {

    private id: T;
	private name: U;
	
	constructor(id : T, name : U){
		this.id = id;
		this.name = name;
	}

	public getId(): T {
		return this.id;
	}

	public getName(): U {
		return this.name;
	}

	public setId(value: T) {
		this.id = value;
	}

	public setName(value: U) {
		this.name = value;
	}
}

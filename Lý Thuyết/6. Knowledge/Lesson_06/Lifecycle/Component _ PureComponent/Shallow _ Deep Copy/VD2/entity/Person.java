package entity;

public class Person {

	private Address address;
	private Name name;

	public Person(Address address, Name name) {
		this.address = address;
		this.name = name;
	}

	public Person(Person otherPerson) {
		address = otherPerson.address;
		name = otherPerson.name;
	}

	public Address getAddress() {
		return address;
	}

	public Name getName() {
		return name;
	}

	@Override
	public String toString() {
		return name.toString() + address.toString();
	}
}


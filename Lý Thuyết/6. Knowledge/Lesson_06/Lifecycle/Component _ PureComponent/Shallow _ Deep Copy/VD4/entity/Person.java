package entity;

public class Person {

	private Address address;
	private Name name;

	public Person(Address address, Name name) {
		this.address = address;
		this.name = name;
	}

	public Person(Person otherPerson) {
		this.address = new Address(otherPerson.getAddress());
		this.name = new Name(otherPerson.getName());
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

package frontend;

import entity.Address;
import entity.Name;
import entity.Person;

public class Program {
	public static void main(String[] args) {
		Name name = new Name("Nguyen", "A");
		Address address = new Address("Street1", "Nam Dinh");

		Person person1 = new Person(address, name);

		Person person2 = new Person(person1);

		// change data
		person2.getAddress().setCity("Ha Noi");

		// print infor
		System.out.println("Person 1: ");
		System.out.println(person1);

		System.out.println("\nPerson 2: ");
		System.out.println(person2);
	}
}

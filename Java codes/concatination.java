package proj;
import java.util.*;
public class concatination {
	public static void main (String args[]) {
		Scanner sc = new Scanner (System.in);
		System.out.print("First Name: ");
		String firstname = sc.nextLine();
		System.out.print("Middel Name: ");
		String middelname = sc.nextLine();
		System.out.print("Last Name: ");
		String lastname =sc.nextLine();
		String fullname = firstname +" "+ middelname +" "+ lastname;
		System.out.print("My name is: " + fullname);
	}

}

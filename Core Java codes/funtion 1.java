package projectjava;
import java.util.*;
public class Funtions {
	public static int calculatMult(int a, int b) {
		return a*b;
	}
public static void main(String args[]) {
	Scanner sc = new Scanner (System.in);
	//int a = sc.nextInt();
	System.out.print("1st no: ");
	int a = sc.nextInt();
	System.out.print("2nd no: ");
	int b = sc.nextInt();
//	int mult = a*b;
	System.out.println("Product of two no is: "+calculatMult(a, b));
}
}

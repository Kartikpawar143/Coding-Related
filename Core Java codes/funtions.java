package java;
import java.util.*;
public class funtions {
	public static void printfactorial(int x) {
		//loop 
		if (x<0) {
			System.out.println("invalid");
		}
		int factorial =1;
		for (int i=x; i>=1; i--) {
			factorial = factorial*i;
			}
			System.out.println(factorial);
			return;
		
	}
	
	public  static void main(String args[]) {
	Scanner sc = new Scanner (System.in);
	int x = sc.nextInt();
//	System.out.println(x);
	printfactorial(x);
}
}




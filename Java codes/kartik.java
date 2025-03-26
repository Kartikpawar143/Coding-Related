package ksdj;
import java.util.*;
public class kartik {

	public static void main(String args[]) {
		Scanner sc = new Scanner (System.in);
		System.out.print("A = ");
		int a = sc.nextInt();
		System.out.print("B = ");
		int b = sc.nextInt();
		System.out.print("Opration Number = ");
		int operation= sc.nextInt();
		switch(operation) {
		case 1: System.out.println (a+b);
		System.out.print("Output");
		break;
		case 2: System.out.println(a-b);
		break;
		case 3: System.out.println(a*b);
		break;
		case 4: if (b==0) {
			System.out.println("invalid");
		}else {
			System.out.println(a/b);
			}
		break;
		case 5: if (b==0) {
			System.out.println("invalid");
		} else {
			System.out.println(a%b);
		}
		break;
		default: System.out.println("invalid data");
		}
		
	}
}

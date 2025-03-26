package ifselse3;
import java.util.*;
public class Greeting {
public static void main (String[]args) {
	Scanner sc = new Scanner (System.in);
	int x = sc.nextInt();
	if (x==1) {
		System.out.println("Hello");
	}
	else{
		if(x==2) {
			System.out.println("Namaste");
		}
		else {
			if(x==3) {
				System.out.println("Bounjour");
			}
		}
		
	}
}
}

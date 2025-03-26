package javaproj;

public class triangle {
public static void main(String args[]) {
//	outer loop
	for(int i=1; i<=5; i++) {
		for (int j=1; j<=i; j++) {
			int sum = i+j;
			if (sum % 2 == 0 ) {
				System.out.print("1 ");
			}else {
				System.out.print("0 ");
			}
		}System.out.println();
	}  //System.out.println();
}
}

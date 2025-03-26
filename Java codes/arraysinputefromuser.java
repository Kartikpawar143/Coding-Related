package javap;
import java.util.*;
public class arrays {
	public static void main (String args[]) {
		Scanner sc =new Scanner (System.in);
		int x =sc.nextInt();
		int [] marks = new int[x];
		// input 
		for (int i=0; i<x; i++) {
		marks[i]=sc.nextInt();
		}
	
		for (int i=0; i<x; i++) {
			System.out.println(marks[i]);
		}
		
	}

}

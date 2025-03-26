package pro;
import java.util.*;
public class twodarray {
	public static void main(String args[]) {
	Scanner sc = new Scanner(System.in);
	int rows = sc.nextInt();
	int colm =sc.nextInt();
	int[][] number = new int[rows][colm]; {
		//input
		//rows
		for(int i=0; i<rows; i++) {
		//coloum
			for (int j=0; j<colm; j++) {
				number[i][j] = sc.nextInt();
			
			}
		}
		
		//output
		for (int i=0; i<rows; i++) {
			for (int j=0; j<colm; j++) {
				System.out.print(number[i][j] +" ");
			}
			System.out.println(" ");
		}
	}

	}
}

import java.util.*;
public class TDXArray{
	public static void main(String args[]){
		Scanner sc = new Scanner (System.in);
		System.out.print("Enter Row: ");
		int rows = sc.nextInt();
		System.out.print("Enter cols: ");
		int cols = sc.nextInt();
		int[][] numbers = new int[rows][cols];

		//input
		for (int i=0 ; i<rows ; i++ ) {
			for (int j=0 ; j<cols ; j++ ) {
				numbers[i][j] = sc.nextInt();
			}
			
		}

		//find index of x
		System.out.println("Enter the x: ");
		int x = sc.nextInt();

		for (int i=0 ; i<rows ; i++ ) {
			for (int j=0 ; j<cols ; j++ ) {
				if (numbers[i][j] == x) {
					System.out.println("x found on index " + "(" + i + "," + j + ")");
				}
				
			}
		}
	}
}
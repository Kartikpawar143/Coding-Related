import java.util.*;
public class twodArray{
	public static void main(String args[]){
		Scanner sc = new Scanner (System.in);
		System.out.print("Enter Rows: ");
		int rows = sc.nextInt();
		System.out.print("Enter column: ");
		int cols = sc.nextInt();
		int[][] numbers = new int[rows][cols];
		System.out.println("Enetr Elements");

		for (int i=0; i<rows ; i++ ) {
			for (int j=0; j<cols ; j++ ) {
				numbers[i][j] = sc.nextInt();
			}
		}



		for (int i=0; i<rows ;i++ ) {
			for (int j=0; j<cols ; j++ ) {
				System.out.print(numbers[i][j]);
			}
			System.out.println();
			
		}
	}
}
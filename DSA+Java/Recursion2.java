import java.util.*;
public class Recursion2{
	public  static void printSum(int i, int n, int sum){
		if (i == n) {
			sum += i;
			System.out.println(sum);
			return;
		}
		sum += i;
		printSum(i+1, n, sum);
	}
	public static void main(String args[]){
		Scanner sc = new Scanner (System.in);
		System.out.print("Enter the value of i: ");
		int i = sc.nextInt();
		System.out.print("  the value of n: ");
		int n = sc.nextInt();
		System.out.print("Enter the value of sum: ");
		int sum = sc.nextInt();
		printSum(i, n, sum);
	}
}
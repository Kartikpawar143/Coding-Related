import java.util.*;
public class Recursion5{

	public static int calcPower(int x, int n){
		if (x == 0) {
			return 0;
		}
		if (n == 0) {
			return 1;
		}
		int xpownm1 = calcPower(x, n-1);
		int xpown = x * xpownm1;
		return xpown;
	}

	
	public static void main(String args[]){
		int x = 2 , n =5;
		int ans = calcPower(x, n);
		System.out.println(ans);
	}
}
package kartik;
import java.util.*;
public class updatebit {

	public static void main(String args[]) {
		Scanner sc = new Scanner (System.in);
		int operation = sc.nextInt();
		// oper : 1= set , 0 = clear
		int  n = 5;
		int pos =1;
		int bitMask = 1<<pos;
		if(operation == 1) {
			int newNum = (bitMask | n);
			System.out.println(newNum);
		}else {
			int notbitMask = ~(bitMask);
			int newNum = notbitMask & n;
			System.out.println(newNum);
		}
	}
}

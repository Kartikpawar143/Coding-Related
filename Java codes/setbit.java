package kartik;
import java .util.*;
public class setbit {

	public static void main(String args[]) {
		int a = 5;//0101
		int pos = 1;
		int bitMask = 1<<pos;
		int newNumber = bitMask | a;
		System.out.println(newNumber);
		
	}
}

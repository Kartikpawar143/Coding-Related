package spawar;
import java.util.*;
public class StringBuidler {
	public static void main (String args[]) {
		// DECLARATION
		StringBuilder sb = new StringBuilder("KartikPawar");
		System.out.println(sb);
		
		// GET A CHAR
		System.out.println(sb.charAt(6));
		
		//SET A CHAR
		sb.setCharAt(0 , 'T');
		System.out.println(sb);
		
		//INSERT A CHAR AT SOME INDEX
		sb.insert(6 , " Ashok ");
		System.out.println(sb);
		
		//SET CHAR
		sb.setCharAt(0 , 'K');
		System.out.println(sb);
		
		//DELETE CHAR AT INDEX
		sb.delete(9, 10);
		System.out.println(sb);
		
		//APPEND A CHAR
		StringBuilder st = new StringBuilder("Tonny");
		st.append("Stark");
		st.append("RDJ");
		System.out.println(st);
		
	}
}

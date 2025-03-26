package java2;

public class stringbuilder {
	public static void main(String args[]) {
		StringBuilder sb =new StringBuilder("kartik");
		System.out.println(sb);
		
		//char at index 0
		System.out.println(sb.charAt(0));
		
		//set char at index 0
		sb.setCharAt(0,'p');
		System.out.println(sb);
		
		// insert char at index 0
		sb.insert(0, 'S');
		System.out.println(sb);
		
	}
	

}

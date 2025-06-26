class BuzzNo 
{
	public static void main(String[] args) 
	{
		int num=45;
		int rem=num%10;
		if (rem==7 || num%7==0)
		{
			System.out.println(num+ " Is a Buzz No.");
		}
		else 
			System.out.println(num+ " Is Not a Buzz No.");
	}
}

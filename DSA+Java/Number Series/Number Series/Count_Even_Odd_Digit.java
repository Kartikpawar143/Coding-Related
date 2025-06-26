class Count_Even_Odd_Digit
{
	public static void main(String[] args) 
	{
		int num=23456;
		int counteven=0;
		int countodd=0;

		while (num>0)
		{
			int rem=num%10;
			if (rem%2==0)
			{
				counteven++;
			}
			else
				countodd++;
			num/=10;
		}
		System.out.println("The Even Count Is " +counteven); 
		System.out.println("The Odd Count Is " +countodd); 
	}
}

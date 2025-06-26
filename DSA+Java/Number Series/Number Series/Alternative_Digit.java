class Alternative_Digit 
{
	public static void main(String[] args) 
	{
		int num=42537;
		int count=0;

		while (num>0)
		{
			int rem=num%10;
			count++;
			if (count%2==0)
			{
				System.out.println(rem);
			}
			num/=10;

		}
	}
}

class odd_no_addition 
{
	public static void main(String[] args) 
	{
		int num = 87654;
		int sum = 0;
		while (num > 0)
		{
			int rem =num%10;
			if (num%2!=0)
			{
				sum =sum +rem;
			}
			num =num/10;
		}
		System.out.println(sum);
	}
}

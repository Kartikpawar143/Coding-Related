class SumOfOddDigit 
{
	public static void main(String[] args) 
	{
		int num=2354;
		int sum=0;
		while (num>0)
		{
			int rem=num%10;
			if (rem%2!=0)
			{
				sum=sum+rem;
			}
			num/=10;
		}
		System.out.println(sum);
	}
}

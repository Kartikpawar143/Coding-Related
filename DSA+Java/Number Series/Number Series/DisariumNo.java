class DisariumNo 
{
	public static void main(String[] args) 
	{
		int num=153;
		int count=0;
		int res=num;
		int sum=0;


		while (num>0)
		{
			count++;
			num/=10;
		}
		num=res;

		while (num>0)
		{
			int rem=num%10;
			int mul=1;
			for (int i=1;i<=count;i++)
			{
				mul=mul*rem;
			}
			sum+=mul;
			num/=10;
			count--;
		}
			if (sum==res)
			{
				System.out.println(res+ " Is A Disarium No.");
			}
			else 
				System.out.println(res + " Is Not a Disarium No.");
			
	}
}

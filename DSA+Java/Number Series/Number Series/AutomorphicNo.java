class AutomorphicNo 
{
	public static void main(String[] args) 
	{
		int num=76;
		int count=0;
		int res=num;

		while (num>0)
		{
			count++;
			num/=10;
		}
		num=res;
		int square=num*num;
		int den=1;
		for (int i=1;i<=count;i++ )
		{
			den=den*10;
		}
		int rem=square%den;
		System.out.println(rem);
	}
}

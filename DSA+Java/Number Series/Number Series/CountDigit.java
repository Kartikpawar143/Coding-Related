class CountDigit 
{
	public static void main(String[] args) 
	{
		int num=3456;
		int count=0;
		while (num>0)
		{
			count++;
			num/=10;
		}
		System.out.println(count);
	}
}

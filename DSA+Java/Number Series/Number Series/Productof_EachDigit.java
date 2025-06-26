class Productof_EachDigit 
{
	public static void main(String[] args) 
	{
		int num=456;
		int mul=1;
		
		while (num>0)
		{
			int rem=num%10;
			mul=mul*rem;
			num=num/10;

		}
		System.out.println(mul);
	}
}

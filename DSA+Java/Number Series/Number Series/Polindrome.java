class Polindrome 
{
	public static void main(String[] args) 
	{
		int num=1861;
		int rev=0;
		int num1=num;

		while (num>0)
		{
			int rem=num%10;
			rev=rev*10+rem;
			num=num/10;
		}
		if (rev==num1)
		{
			System.out.println(num1+ " Is Polindrome Number");
		}
		else 
			System.out.println(num1+ " Is Not Polindrome Number"); 
	}
}

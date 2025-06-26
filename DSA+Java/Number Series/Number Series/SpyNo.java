class SpyNo 
{
	public static void main(String[] args) 
	{
		int num=1234;
		int sum=0;   //to store the sum value
		int mul=1;  //to store the mul value
		int num1 = num;  //This Is for print the statement

		while (num>0)
		{
			int rem=num%10;    //to get the last digit
			mul=mul*rem;
			sum=sum+rem;
			num=num/10;        //to delete the last digit
		}
		if (sum==mul)
		{
			System.out.println(num1 +" Is Spy No.");
		}
		else 
			System.out.println(num1 + " Is Not a Spy No.");
	}
}

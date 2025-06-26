class PositionWiseMul 
{
	public static void main(String[] args) 
	{
		int num=345;
		int count=0;
		int res=num;
        
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
		  System.out.println(mul);
		  num/=10;
		  count--;
		  
		}
		

	}
}

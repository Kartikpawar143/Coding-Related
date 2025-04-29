class Check_Count_EvenOdd 
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
		
		 if (count%2==0)
		 {
			 System.out.println(" The Count Is Even");
		 }
		 else
			 System.out.println(" The Count Is Odd");
	}
}

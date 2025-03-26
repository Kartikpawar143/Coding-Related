package javaproje;

public class halfpyramid
{
	public static void main(String args[])
	{
		int x=4;
		//outer loop
		for (int i=1; i<=x; i++) 
		{
		
			//inner loop
			for (int j=1; j<=i; j++)
			{
		
				//cell-> (i,j)
				if(i==1 || j==1 || i==x || j==x) 
				{
					System.out.print("*");
				}
				else
				{
					System.out.print("*");
				}
	
			}
		System.out.println();
		}		
	}	//System.out.println();		
//	System.out.println();
}
		
	


class PerfectSquare 
{
	public static void main(String[] args) 
	{
		int num=49;
		boolean flag=false;

		for (int i=1;i<=num;i++ )
		{
			if (i*i==num)
			{
				flag=true;
				break;
			}
		}
			if (flag)
			{
				System.out.println(num+ " It is Perfect Square");
			}
			else
				System.out.println(num+ " It Is Not Perfect Square");
		}
	
}

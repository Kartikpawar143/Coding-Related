class count_total_digit 
{
	public static void main(String[] i) 
	{
		int num=65434;
		int count = 0;

		while (num>0)
		{
			count++;
			num = num /10;
		}
		System.out.println(count);
	}
}

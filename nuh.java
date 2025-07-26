package proj1;
import java.util.Scanner;
public class nuh {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.print("Enter a number:\t");
		int a=sc.nextInt();
		int b=0;
		for(int i=1;i<a;i++)
		{
			if(a%i==0)
			{
			b=b+i;
			}
		}
		if(b==a) {
		System.out.print("It is a perfect number");
		}
		else
		{
			System.out.print("It is not a perfect number");
		}
	}

}

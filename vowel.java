package proj1;
import java.util.Scanner;
public class vowel {
	public static void main(String[] args) {
		Scanner vow=new Scanner(System.in);
		System.out.print("Enter an alphabet:");
		char a=vow.next().charAt(0);
		if(a=='a'||a=='A'||a=='e'||a=='E'||a=='i'||a=='I'||a=='o'||a=='O'||a=='u'||a=='U')
		{
			System.out.print("It is a vowel");
		}
		else
		{
			System.out.print("It is not a vowel");
		}
	}
}

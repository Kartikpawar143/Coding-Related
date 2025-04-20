import java.util.*;
public class Funtions_Methods {
    public static void main(String[] args) {
        sum();
    }
    static void sum() {
        Scanner sc = new Scanner (System.in);
        System.out.print("Enter the first no.: ");
        int a = sc.nextInt();
        System.out.print("Enter the second no.: ");
        int b = sc.nextInt();
        int c = a + b;
        System.out.print("Addition of two no. is: " + c);

    }
}
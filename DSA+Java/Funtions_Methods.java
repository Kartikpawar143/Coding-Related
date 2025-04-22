import java.util.*;
public class Funtions_Methods {
    public static void main(String[] args) {
        //sum();

    //     int result = sum2();
    //     System.out.println("The sum is: " + result);

    //     int result = sum3();
    //     System.out.println(result);

        //example();
        {
        int a = 10;
        int b = 20;
        int c = a+b;
        System.out.println("The sum is: " + c);

        { // here we are using block scope
            // this is a block scope
            // here values r changeing
            a = 20;
            b = 30;
            c = a+b;
            System.out.println("The sum is: " + c);
        }
        }

    }


    // static int sum2(){
    //     Scanner sc = new Scanner (System.in);
    //     System.out.println("Enter the first no.: ");
    //     int a = sc.nextInt();
    //     System.out.println("Enter the second no.: ");
    //     int b = sc.nextInt();
    //     int c = a + b;
    //     return c;
    // }



    // static void sum() {
    //     Scanner sc = new Scanner (System.in);
    //     System.out.print("Enter the first no.: ");
    //     int a = sc.nextInt();
    //     System.out.print("Enter the second no.: ");
    //     int b = sc.nextInt();
    //     int c = a + b;
    //     System.out.print("Addition of two no. is: " + c);

    // }



    //  static int sum3() {
    //     Scanner sc = new Scanner (System.in);
    //     System.out.println("Enter first no.: ");
    //     int a = sc.nextInt(); 
    //     System.out.println("Enter second no.: ");
    //     int b = sc.nextInt();
    //     int c = a + b;
    //     return c;
    //  }



    // static void example(){
    //     Scanner sc = new Scanner (System.in);
    //     System.out.print("enter fruit: ");
    //     String Fruit = sc.next();

    //     switch (Fruit){
    //         case "Apple":
    //             System.out.println("Sweet");
    //             break;
    //         case "Watermelon":
    //             System.out.println("big");
    //             break;
    //         case "Mango":
    //             System.out.println("tasty");
    //             break;
    //         default:
    //             System.out.println("not valid");
    //     }
    //}




}
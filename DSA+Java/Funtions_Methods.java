import java.util.*;
public class Funtions_Methods {
    public static void main(String[] args) {
        //sum();

    //     int result = sum2();
    //     System.out.println("The sum is: " + result);

    //     int result = sum3();
    //     System.out.println(result);

    //SwitchCase.main(args);

    //BlockScope.main(args);

    //shadowing.main(args);


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


    // static class SwitchCase {
    //     public static void main(String[] args) {
            
    //         Scanner sc = new Scanner(System.in);
    //         System.out.print("Enter a number: ");
    //         int num = sc.nextInt();

    //         switch (num) {
    //             case 1:
    //                 System.out.println("You entered one.");
    //                 break;
    //             case 2:
    //                 System.out.println("You entered two.");
    //                 break;
    //             case 3:
    //                 System.out.println("You entered three.");
    //                 break;
    //             default:
    //                 System.out.println("Invalid input.");
    //         }

    //     int result = sum3();
    //     System.out.println(result);
    //     }

    //          static int sum3() {
    //             Scanner sc = new Scanner (System.in);
    //             System.out.println("Enter first no.: ");
    //             int a = sc.nextInt(); 
    //             System.out.println("Enter second no.: ");
    //             int b = sc.nextInt();
    //             int c = a + b;
    //             return c;
             
    //     }
    // }




    // static class BlockScope {
    //     public static void main(String[] args) {
    //         int a = 10;
    //         int b = 20;
    //         int c = a + b;
    //         System.out.println("The sum is: " + c);

    //         { // here we are using block scope
    //             // this is a block scope
    //             // here values r changeing
    //             a = 20;
    //             b = 30;
    //             c = a + b;
    //             System.out.println("The sum is: " + c);
    //         }
    //     }
    // }




    // static class shadowing{
    //     static int x=90; //The static keyword means that the variable x belongs to the class, not to any specific object of the class.
    //             public static void main(String[] args) {
         
    //             System.out.println(x);
    //             int x=10;
    //             System.out.println("The value of x is: " + x);
    //             display();
    
    //     }
    //     static void display(){
    //         System.out.println("The value of x is: " + x);
    //     }
    // }




    // static class Varargs {
    //     public static void main (String args[]){
    //        // fun(2,4,32,2,12,323,2,12);
    //        //multiple(2,4,"kartik","pawar");
            
    //     }
    //     // static void fun(int...v){
    //     //     System.out.println(Arrays.toString(v));
    //     // }
        
    //     static void multiple(Object...v) { //for multiple data types we can use Object
    //         System.out.println(Arrays.toString(v));
        
    //     }
    // }


    // static class overloading{
    //     public static void main(String[] args) {
            
    //         int result = sum(10, 20);
    //         System.out.println("The sum is: " + result);

    //         Scanner sc = new Scanner (System.in);
    //         int a = sc.nextInt();
    //         int b = sc.nextInt();
    //         int c = sc.nextInt();

    //         sum(a,b,c); // this will call the second method

    //         fun("Sanket");

    //         fun(3,2,4);

    //         fun("Kartik", "Pawar");

               
       // }

    //     static int sum( int a , int b){
    //         return a+b;
    //     }

    //     static void sum(int a, int b, int c){
    //         System.out.println(a+b+c);
    //     }

    //     static void fun(int...v){
    //         System.out.println(Arrays.toString(v));
    //     }

    //     static void fun(String...x){
    //         System.out.println(Arrays.toString(x));
    //     }
           

        //}
    
    

}
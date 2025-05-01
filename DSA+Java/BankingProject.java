import java.util.*;

public class BankingProject {
    public static void main(String[] args) {
        String name = null;
        String contact = null;
        int pin = 0;
        double bal = 0.0;

        Scanner sc = new Scanner(System.in);
        {
            System.out.println();
            System.out.println("=========================================");
            System.out.println();
            System.out.println(" WELCOME TO THE AAPLI BANKING SYSTEM ");
            System.out.println();
            System.out.println("=========================================");
            System.out.println();
            System.out.println( "*** CHOOSE YOUR OPTION *** "); 
            System.out.println("1. Create Account ");
            System.out.println("2. Existing User ");
            System.out.println("3. Exit ");
            System.out.println();
        }
        {
            System.out.print("ENTER YOUR OPTION: ");
            int option = sc.nextInt();
            
            switch(option){

                case 1: 
                System.out.println();
                System.out.println(" ----------- CREATE ACCOUNT ------------ ");
                System.out.println();
                System.out.print(">> Enter Username: ");
                name = sc.next();
                System.out.print(">> Enter Email: ");
                String email = sc.next();
                System.out.print(">> Enter Address: ");
                String address = sc.next();
                System.out.print(">> Enter Adhar Number: ");
                long adhar = sc.nextLong();
                System.out.print(">> Enter Pan Card: ");
                String panCard = sc.next();
                System.out.print(">> Enter Contact Number: ");
                contact = sc.next();
                System.out.print(">> Enter Pin: ");
                pin = sc.nextInt();
                System.out.print(">> Enter an Amount(Deposit): ");
                bal = sc.nextDouble();
                System.out.println();
                System.out.println("ACCOUNT CREATED SUCCESSFULLY");
                break;
                

                case 2:
                
                System.out.println();
                System.out.println(" ----------- EXISTING USER ------------ ");
                System.out.println();
                System.out.println("**LOGIN TO YOUR ACCOUNT**");
                System.out.println();
                System.out.print(">> Enter Username / Phone no. : ");
                String loginCrid = sc.next();
                System.out.print(">> Enter Pin:");
                int loginpin = sc.nextInt();
                // if ( loginCrid.equals(name) || loginCrid.equals(contact) && loginpin == (pin) ) {
                //     System.out.println();
                //     System.out.println("LOGIN SUCCESSFULLY");
                //     System.out.println("WELCOME " + name);
                //     System.out.println("YOUR BALANCE IS: " + bal);
                //     System.out.println();
                //     System.out.println("**CHOOSE YOUR OPTION**");
                //     System.out.println("1. Withdraw Amount ");
                //     System.out.println("2. Deposit Amount ");
                //     System.out.println("3. Transfer Amount ");
                //     System.out.println("4. Mini Statement ");
                // }
                // else{
                //     for (int i = 1; i <=3 ; i++){
                //         System.out.println("LOGIN FAILED");
                //         System.out.println("Attempts left:" + i);
                //     }
                // }
                
                }


            }
        }


        


    }

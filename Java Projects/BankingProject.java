import java.util.*;

public class BankingProject {
    public static void main(String[] args) {
        String name = null;
        String contact = null;
        String email = null;
        String address = null;
        Long adhar = null;
        String panCard = null;
        int pin = 0;
        double bal = 0.0;
        Long accountNumber= 1234_1234_1234l;
	    String ifscCode= "LCF0009211";


        Scanner sc = new Scanner(System.in);
        for (;;) {
            
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
                email = sc.next();
                System.out.print(">> Enter Address: ");
                address = sc.next();
                System.out.print(">> Enter Adhar Number: ");
                adhar = sc.nextLong();
                System.out.print(">> Enter Pan Card: ");
                panCard = sc.next();
                System.out.print(">> Enter Contact Number: ");
                contact = sc.next();
                System.out.print(">> Enter Pin: ");
                pin = sc.nextInt();
                System.out.print(">> Enter an Amount(Deposit): ");
                bal = sc.nextDouble();
                System.out.println("Account Number: " + accountNumber);
                System.out.println("IFSC Code: " + ifscCode);

                System.out.println();
                System.out.println("ACCOUNT CREATED SUCCESSFULLY");
                break;
                

                case 2:
                
                for (int i = 3; i >=1; i--) {
                    System.out.println();
                    System.out.println(" ----------- EXISTING USER ------------ ");
                    System.out.println();
                    System.out.println("**LOGIN TO YOUR ACCOUNT**");
                    System.out.println();
                    System.out.print(">> Enter Username / Phone no. : ");
                    String loginCrid = sc.next();
                    System.out.print(">> Enter Pin:");
                    int loginpin = sc.nextInt();
                    if (loginCrid.equals(name) || loginCrid.equals(contact) && loginpin == pin) {
                        for (;;) {
                            System.out.println();
                            System.out.println("=========================================");
                            System.out.println();
                            System.out.println(" WELCOME TO THE AAPLI BANKING SYSTEM ");
                            System.out.println();
                            System.out.println("=========================================");
                            System.out.println();
                            System.out.println( "*** CHOOSE YOUR OPTION *** "); 
                            System.out.println("1. Deposit ");
                            System.out.println("2. Withdraw ");
                            System.out.println("3. Balance Enquiry ");
                            System.out.println("4. Mini Statement ");
                            System.out.println("5. Loan");
                            System.out.println("6. Profile ");
                            System.out.println("7. Logout ");
                            System.out.println();
                            System.out.print("ENTER YOUR OPTION: ");
                            int opt = new Scanner(System.in).nextInt();
                            switch (opt) {
                                case 1: 
                                    System.out.println();
                                    System.out.println(" ----------- DEPOSIT ------------ ");
                                    System.out.print("Enter Amount to Deposit: ");
                                    double deposite = sc.nextDouble();
                                    bal += deposite;
                                    System.out.println("Amount Deposited: " + deposite + "rs");
                                    System.out.println("Current Balance: " + bal + "rs");
                                    

                                case 2: 
                                    System.out.println();
                                    System.out.println(" ----------- WITHDRAW ------------ ");
                                    System.out.print("Enter Amount to Withdraw: ");
                                    double withdraw = sc.nextDouble();
                                    if (withdraw > bal) {
                                        System.out.println("Insufficient Balance");
                                    } else {
                                        bal -= withdraw;
                                        System.out.println("Amount Withdrawn: " + withdraw + "rs");
                                        System.out.println("Remaining Balance: " + bal + "rs");
                                    }

                                case 3:
                                    System.out.println();
                                    System.out.println(" ----------- BALANCE ENQUIRY ------------ ");
                                    System.out.println("Current Balance: " + bal + "rs");

                                case 4:
                                    System.out.println();
                                    System.out.println(" ----------- MINI STATEMENT ------------ ");
                                    System.out.println("No transactions available yet.");
                                    System.out.println("Current Balance: " + bal + "rs");

                                case 5:
                                    System.out.println();
                                    System.out.println(" ----------- LOAN ------------ ");
                                    System.out.println("Loan Module is under construction.");
                                    System.out.println("Current Balance: " + bal + "rs");

                                case 6:
                                    System.out.println();
                                    System.out.println(" ----------- PROFILE ------------ ");
                                    System.out.println("Name: " + name);
                                    System.out.println("Email: " + email);
                                    System.out.println("Address: " + address);
                                    System.out.println("Adhar Number: " + adhar);
                                    System.out.println("Pan Card: " + panCard);
                                    System.out.println("Contact Number: " + contact);
                                    System.out.println("Account Number: " + accountNumber);
                                    System.out.println("IFSC Code: " + ifscCode);
                                    System.out.println("Current Balance: " + bal + "rs");
                                    System.out.println();
                                    System.out.println("Want to update your profile? (yes/no)");
                                    String updateProfile = sc.next();
                                    if (updateProfile.equalsIgnoreCase("yes")) {
                                        System.out.print(">> Enter New Username: ");
                                        name = sc.next();
                                        System.out.print(">> Enter New Email: ");
                                        email = sc.next();
                                        System.out.print(">> Enter New Address: ");
                                        address = sc.next();
                                        System.out.print(">> Enter New Adhar Number: ");
                                        adhar = sc.nextLong();
                                        System.out.print(">> Enter New Pan Card: ");
                                        panCard = sc.next();
                                        System.out.print(">> Enter New Contact Number: ");
                                        contact = sc.next();
                                        System.out.print(">> Enter New Pin: ");
                                        pin = sc.nextInt();
                                        System.out.println("Profile updated successfully.");
                                    }

                                case 7:
                                    System.out.println();
                                    System.out.println(" ----------- LOGOUT ------------ ");
                                    System.out.println("You have been logged out successfully.");
                                    System.out.println("Thank you for using Aapli Banking System.");
                                    System.out.println("Have a great day!");
                                    break;
                                    
                                default:
                                    System.out.println("Invalid option. Please try again.");
                                    break;
                            }
                        
                        }
                    }
                    
                
                    else {
                        System.out.println("INVALID CREDENTIALS");
                        System.out.println(" REMAINING ATTEMPTS : " + (i-1));
                        if (i == 1) {
                            System.out.println();
                            System.out.println("ACCOUNT LOCKED DUE TO MULTIPLE FAILED ATTEMPTS");
                            break;
                        }
                        
                    }
                }
                
                
                }


            }
        }


        


    }
}
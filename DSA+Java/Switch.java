import java.util.*;

public class Switch {
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // String fruit = sc.next();

        // if (fruit.equals("mango")) {
        //     System.out.println("King of friut");
        // }

        //SWITCH STATEMENTS

        // switch (fruit) {
        //     case "mango":
        //         System.out.println("sweet");
        //         break;
        //     case "banana":
        //         System.out.println("long");
        //         break;
        //     case "orange":
        //         System.out.println("circle");
        //         break;
        
        //     default:
        //         System.out.println("non of these");
        //         break;
        // }

        int day = sc.nextInt();
        // switch (day){
        // case 1 -> System.out.println("Monday");
        // case 2 -> System.out.println("Tuesday");
        // case 3 -> System.out.println("Wednesday");
        // case 4 -> System.out.println("Thursday");
        // case 5 -> System.out.println("Friday");
        // case 6 -> System.out.println("Saturday");
        // case 7 -> System.out.println("Sunday");
        // }
         

        switch (day) {
            case 1, 2, 3, 4, 5 -> System.out.println("Weekday");
            case 6, 7 -> System.out.println("Weekend");
        }
    }
}
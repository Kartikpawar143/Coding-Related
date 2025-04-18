import java.util.*;

public class Switch {
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String fruit = sc.next();

        // if (fruit.equals("mango")) {
        //     System.out.println("King of friut");
        // }

        //Switch

        switch (fruit) {
            case "mango":
                System.out.println("sweet");
                break;
            case "banana":
                System.out.println("long");
                break;
            case "orange":
                System.out.println("circle");
                break;
        
            default:
                break;
        }
    }
}

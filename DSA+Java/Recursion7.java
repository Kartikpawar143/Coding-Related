import java.util.*;

// Class name
public class Recursion7 {

    // Recursive method to print a string in reverse order
    public static void printRev(String str, int idx) {
        // Base case: when index reaches 0, print the first character and return
        if (idx == 0) {
            System.out.println(str.charAt(idx)); // print character at index 0
            return; // end recursion
        }

        // Print current character at index
        System.out.println(str.charAt(idx));

        // Recursive call with previous index
        printRev(str, idx - 1);
    }

    // Main method - program starts here
    public static void main(String args[]) {
        // Input string
        String str = "abcd";

        /*
         * str.length() returns 4 for "abcd"
         * str.length() - 1 = 3, which is the index of the last character 'd'
         * So we start recursion from index 3 (the end of the string)
         */
        printRev(str, str.length() - 1);
    }
}

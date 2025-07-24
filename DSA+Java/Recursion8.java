import java.util.*;

// ==============================
// Topics Covered in this Code:
// 1. Recursion
// 2. Static Variables
// 3. Character Traversal in a String
// 4. Finding First and Last Occurrence of a Character
// 5. Base Case and Recursive Case
// ==============================

public class Recursion8 {

    // Static variables to store the first and last occurrence index
    public static int first = -1;
    public static int last = -1;

    // Recursive function to find first and last occurrence of a character
    public static void findOccurance(String str, int idx, char element) {
        // Base case: if index reaches the end of the string
        if (idx == str.length()) {
            System.out.println(first);
            System.out.println(last);
            return;
        }

        // Current character at index
        char currChar = str.charAt(idx);

        // If the current character matches the target element
        if (currChar == element) {
            if (first == -1) {
                // Set first occurrence if it's not already set
                first = idx;
            } else {
                // Set/update last occurrence
                last = idx;
            }
        }

        // Recursive call to process the next index
        findOccurance(str, idx + 1, element);
    }

    public static void main(String args[]) {
        String str = "abaacdaefaahh"; // Input string
        findOccurance(str, 0, 'a');   // Find first and last occurrence of 'a'
    }
}

/*
Short Notes:
------------

1. Recursion:
   - A method calling itself to solve smaller sub-problems.
   - Useful for tasks involving repetitive or nested processing (like string traversal).

2. Static Variables:
   - Declared with the `static` keyword, they retain their values across all method calls.
   - Used here to store `first` and `last` index without passing them in recursive calls.

3. Character Traversal in a String:
   - Looping through each character using indexing (`str.charAt(idx)`).
   - Helps in analyzing or comparing individual characters.

4. Finding First and Last Occurrence:
   - The first time the character is found, store its index in `first`.
   - Subsequent matches update the `last` index.

5. Base Case and Recursive Case:
   - Base Case: Stops the recursion when end of string is reached (`idx == str.length()`).
   - Recursive Case: Continues checking the next character (`idx + 1`).

*/

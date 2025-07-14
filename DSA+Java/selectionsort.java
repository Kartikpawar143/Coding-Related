import java.util.*;

public class selectionsort {
    public static void printArray(int arr[]) {
        for (int i = 0; i < arr.length; i++) { // fixed condition
            System.out.print(arr[i] + " ");   // changed println to print for same-line output
        }
        System.out.println();
    }

    public static void main(String args[]) {
        int arr[] = {2, 4, 3, 5, 1};

        for (int i = 0; i < arr.length - 1; i++) {
            int smallest = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[smallest] > arr[j]) {
                    smallest = j;
                }
            }
            // Swap
            int temp = arr[smallest];
            arr[smallest] = arr[i];
            arr[i] = temp;
        }

        printArray(arr);
    }
}

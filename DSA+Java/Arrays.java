import java.util.*;
public class Arrays {
    public static void main(String[] args) {
        Scanner sc = new Scanner (System.in);
        System.out.print("Enter the length of the array: ");
        int size = sc.nextInt();
        int[] arr = new int[size];
        
        // Fill the array with user input
        System.out.println("Enter the elements of the array: ");
        for(int i=0; i<size; i++){
            arr[i] = sc.nextInt();    
        }
        
        System.out.print("Enter the element to be searched: ");
        int x = sc.nextInt();

        // Search for the element in the array
        for(int i=0; i<arr.length; i++){
            if(arr[i] == x){
                System.out.println("Element found at index: " + i);
                
            }  
        }

        }

    }


    
    
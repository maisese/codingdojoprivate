import java.util.ArrayList;

public class PuzzleJavaMain {
    public static void main(String[] args) {
        PuzzleJava bubbles = new PuzzleJava();
        
        // // ===1 Create an array with the following values: 3,5,1,2,7,9,8,13,25,32. Print the sum of all numbers in the array. Also have the function return an array that only includes numbers that are greater than 10 (e.g. when you pass the array above, it should return an array with the values of 13,25,32)
        int[] arr = { 3,5,1,2,7,9,8,13,25,32 };
        bubbles.intGreaterThan10(arr);

        //2 Create an array with the following values: Nancy, Jinichi, Fujibayashi, Momochi, Ishikawa. Shuffle the array and print the name of each person. Have the method also return an array with names that are longer than 5 characters.
        bubbles.shuffleAndPrintGreaterthan5();

        //3 Create an array that contains all 26 letters of the alphabet (this array must have 26 values). Shuffle the array and, after shuffling, display the last letter from the array. Have it also display the first letter of the array. If the first letter in the array is a vowel, have it display a message. To shuffle a collection, you can use the shuffle method of the Collections class. Collections Class documentation
        bubbles.shufflethealphabet();

        //4 Generate and return an array with 10 random numbers between 55-100. To get a random integer, you can use the nextInt method of the Random class. Random Class documentation

        bubbles.random10();

        //5 Create a random string that is 5 characters long.
        bubbles.randomSTR5();

        //6 Generate an array with 10 random strings that are each 5 characters long.

        bubbles.random10with5char();


    
        

    }
}

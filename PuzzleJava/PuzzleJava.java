import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Random;

public class PuzzleJava {

    public void intGreaterThan10(int[] arr) {
        int total = 0;
        ArrayList<Integer> honey = new ArrayList<Integer>();
        for (int x = 0; x < arr.length; x++) {
            total += arr[x];
            if (arr[x] > 10) {
                honey.add(arr[x]);
            } else {
                continue;
            }
        }
        System.out.println(total);
        System.out.println(honey);
    }

    public void shuffleAndPrintGreaterthan5() {
        ArrayList<String> names = new ArrayList<String>();
        names.add("Nancy");
        names.add("Jinichi");
        names.add("Fujibayashi");
        names.add("Momochi");
        names.add("Ishikawa");

        // Shuffle list elements
        Collections.shuffle(names);
        System.out.println(names);

        ArrayList<String> fiveLen = new ArrayList<String>();
        // System.out.println(names.get(x));
        for (int x = 0; x < names.size(); x++) {
            if ((names.get(x).length()) > 5) {
                fiveLen.add(names.get(x));
            }
        }
        System.out.println(fiveLen);
    }

    public void shufflethealphabet() {
        ArrayList<String> alpha = new ArrayList<String>();
        alpha.add("a");
        alpha.add("b");
        alpha.add("c");
        alpha.add("d");
        alpha.add("e");
        alpha.add("f");
        alpha.add("g");
        alpha.add("h");
        alpha.add("i");
        alpha.add("j");
        alpha.add("k");
        alpha.add("l");
        alpha.add("m");
        alpha.add("o");
        alpha.add("p");
        alpha.add("q");
        alpha.add("r");
        alpha.add("s");
        alpha.add("t");
        alpha.add("u");
        alpha.add("v");
        alpha.add("w");
        alpha.add("x");
        alpha.add("y");
        alpha.add("z");
        System.out.println(alpha);

        Collections.shuffle(alpha);
        System.out.println(alpha);

        String lastletter = (alpha.get(alpha.size() - 1));
        String firstletter = (alpha.get(0));
        System.out.println(lastletter);
        System.out.println(firstletter);

        if ((alpha.get(0)) == "a") {
            System.out.println("the first letter is a vowel");
        } else if ((alpha.get(0)) == "e") {
            System.out.println("the first letter is a vowel");
        } else if ((alpha.get(0)) == "i") {
            System.out.println("the first letter is a vowel");
        } else if ((alpha.get(0)) == "o") {
            System.out.println("the first letter is a vowel");
        } else if ((alpha.get(0)) == "u") {
            System.out.println("the first letter is a vowel");
        }
    }

    public void random10() {
        Random ran = new Random();
        for (int x = 0; x < 10; x++) {
            int nxt = ran.nextInt(100 - 55) + 55;
            // max-min min
            System.out.println("Random number between 55 and 100 is : " + nxt);
        }
    }


    // source: https://www.mkyong.com/java/java-generate-random-integers-in-a-range/

    public void randomSTR5() {
        int leftLimit = 97; // letter 'a'
        int rightLimit = 122; // letter 'z'
        int targetStringLength = 5;
        Random random = new Random();
        StringBuilder buffer = new StringBuilder(targetStringLength);
        for (int i = 0; i < targetStringLength; i++) {
            int randomLimitedInt = leftLimit + (int) (random.nextFloat() * (rightLimit - leftLimit + 1));
            buffer.append((char) randomLimitedInt);
        }
        String generatedString = buffer.toString();
        System.out.println(generatedString);
    }

    public void random10with5char() {
        ArrayList<String> randostrings = new ArrayList<String>();
        int leftLimit = 97; // letter 'a'
        int rightLimit = 122; // letter 'z'
        int targetStringLength = 5;
        Random random = new Random();
        for (int x = 0; x < 10; x++) {
            StringBuilder buffer = new StringBuilder(targetStringLength);
            for (int i = 0; i < targetStringLength; i++) {
                int randomLimitedInt = leftLimit + (int) (random.nextFloat() * (rightLimit - leftLimit + 1));
                buffer.append((char) randomLimitedInt);
            }
            String generatedString = buffer.toString();
            randostrings.add(generatedString);
            
        }
        System.out.println(randostrings);
    }
}

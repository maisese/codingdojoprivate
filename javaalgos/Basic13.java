import java.util.ArrayList;
import java.util.List;

public class Basic13 {
    public void printTo255() {
        for (int x = 1; x <= 255; x++) {
            System.out.println(x);
        }
    }

    public void printOddsto255() {
        for (int x = 1; x <= 255; x += 2) {
            System.out.println(x);
        }
    }

    public void printIntsandSum() {
        int sum = 0;
        for (int x = 1; x <= 255; x += 2) {
            System.out.println(x);
            sum += x;
            System.out.println(sum);
        }
    }

    public void iterateandPrintArray(Integer[] arr) {
        for (int x = 0; x < arr.length; x++) {
            System.out.println(arr[x]);
        }
    }

    public void findMax(Integer[] arr) {
        int max = 0;
        for (int x = 1; x < arr.length; x++) {
            if (arr[x] >= max) {
                max = arr[x];
            }
        }
        System.out.println(max);
    }

    public void getPrintAVG(int[] arr) {
        double sum = 0;
        double avg = 0;
        for (int x = 0; x < arr.length; x++) {
            sum += arr[x];
        }
        avg = sum / arr.length;
        System.out.println(avg);
    }

    public void printOdds() {
        List<Integer> honey = new ArrayList<>();
        for (int x = 1; x <= 255; x += 2) {
            honey.add(x);
        }
        System.out.println(honey);
    }

    public void printSQR(int[] arr) {
        List<Integer> honey = new ArrayList<>();
        for (int x = 0; x < arr.length; x++) {
            honey.add(arr[x] * arr[x]);
        }
        System.out.println(honey);
    }

    public void greatThanY(int[] arr, int Y) {
        int count = 0;
        for (int x = 0; x < arr.length; x++) {
            if (arr[x] > Y) {
                count += 1;
            }
        }
        System.out.println(count);
    }

    // if you are returning something, make sure to remove void and in place, put
    // return type, in this case, an array with integers

    public int[] ZeroOutNegs(int[] arr) {
        for (int x = 0; x < arr.length; x++) {
            if (arr[x] < 0) {
                arr[x] = 0;
            }
        }
        return arr;
    }

    public void maxMinAverage(int[] arr) {
        int max = 0;
        int min = arr[0];
        double sum = 0;
        double avg = 0;
        for (int x = 1; x < arr.length; x++) {
            if (arr[x] >= max) {
                max = arr[x];
            }
            if (arr[x] <= min) {
                min = arr[x];
            } else {
                sum += arr[x];
                avg = sum / arr.length;
            }
        }
        System.out.println(max);
        System.out.println(min);
        System.out.println(avg);
    }

    public void shiftArrayVales(int[] arr) {
        for (int x = 1 ; x < arr.length; x++){
            arr[x-1] = arr[x];
        }
        arr[arr.length-1] = 0;
        
    }

    public String[] swapStringForArrayNegs(int[] arr) {
        String [] honey = new String [arr.length];
        for (int x = 0; x < arr.length; x++) {
            if (arr[x] < 0) {
                honey[x] = "Dojo";
            }
            else{
                honey[x]=String.valueOf(arr[x]);
            }
        }
        return honey;
    } 



}
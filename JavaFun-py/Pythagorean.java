public class Pythagorean {
    public double calculateHypotenuse(int legA, int legB) {
        int sqrA = legA * legA;
        int sqrB = legB * legB;

        double sum = sqrA + sqrB;

        double squareRoot = Math.sqrt(sum);
        System.out.println(squareRoot);
        return squareRoot;
    }
    
}
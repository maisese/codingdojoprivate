import java.util.ArrayList;

public class ListsofExceptions {
    public static void main(String[] args) {
        ArrayList<Object> myList = new ArrayList<Object>();
        myList.add("13");
        myList.add("hello world");
        myList.add(48);
        myList.add("Goodbye World");
        System.out.println(myList);

        //make sure to wrap your try around where the error could occur
        for (int i = 0; i < myList.size(); i++){
            Integer castedValue;
            try{
                // System.out.println("Entered try statement");
                castedValue= (Integer) myList.get(i);
                System.out.println("This is an Int");
            }
            catch (Exception e){ 
                int location = i;
                System.out.println("This is not an int, this was found at index " + location + ", with the value of " + (myList.get(i)) + ".");
            }
        }
        
    }
}

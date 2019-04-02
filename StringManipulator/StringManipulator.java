public class StringManipulator {

    public String trimAndConcat(String string1, String string2) {
        string1 = string1.trim();
        string2 = string2.trim();
        String string3 = string1.concat(string2);

        return string3;
    }

// watch for capitalization or watch for types and naming conventions. 

    public Integer getIndexOrNull(String string, char char1 ) {
        int index = string.indexOf(char1);
        if (index != -1){
            System.out.println(index);
            return index;
        }
        else {
            System.out.println("Null");
            return null;
        }
    }

    public Integer getIndexOrNull(String string, String string2 ) {
        int index = string.indexOf(string2);
        if (index != -1){
            // System.out.println(index);
            return index;
        }
        else {
            // System.out.println("Null");
            return null;
        }
    }

    public String concatSubstring(String string1, int int1, int int2, String string2) {
        String printletter = string1.substring(int1, int2);
        String word = printletter.concat(string2);
        return word;

    }
}

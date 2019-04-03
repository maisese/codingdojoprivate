import java.util.HashMap;
import java.util.*; 

public class Hashmatique {
    public static void main(String[] args) {
        HashMap<String, String> trackList = new HashMap<String, String>();
        trackList.put("Three weeks to go", "Hope you had the best weeks of your life.");
        trackList.put("Twist", "Lets Twist again, like we did last summer");
        trackList.put("Family is family", "Family is family, in church or in prision");
        trackList.put("Ghostbusters", "Who are you going to call?");
        // get the keys by using the keySet method
        
        String lyrics = trackList.get("Twist");
        System.out.println(lyrics);

        Set<String> keys = trackList.keySet();
        for (String key : keys) {
            System.out.println(key + " : " + trackList.get(key));
            // System.out.println(trackList.get(key));
        }
    }
}
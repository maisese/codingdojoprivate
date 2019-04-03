
public class Gorilla extends Mammal {
    
    public int throwSomething(){
        this.energyLevel = this.energyLevel - 5;
    	System.out.println("The Gorilla threw something at the humans. Energy level is now: " + this.energyLevel);
    	return this.energyLevel;
    }
    
    public int eatBananas(){
    	this.energyLevel = this.energyLevel + 10 ;
    	System.out.println("Yum. Gorillas love eating bananans. Energy level is now: " + this.energyLevel);
    	return this.energyLevel;
    }
    
    public int climb(){
    	this.energyLevel = this.energyLevel - 10 ;
    	System.out.println("Climb on Gorilla. Energy level is now: " + this.energyLevel);
    	return this.energyLevel;
    }
}


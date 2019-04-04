
public class Bat extends Mammal {
		
	public Bat(){
		this.energyLevel = 300;
	}
		
	public int printEnergy() {
	System.out.println("The Bat has Energy level is now: " + this.displayEnergy());
	return this.energyLevel;
	}
	
	public int fly(){
    	this.energyLevel = this.energyLevel - 50 ;
    	System.out.println("Bats love to fly. Energy level is now: " + this.displayEnergy());
    	return this.energyLevel;
    }
	
	public int eatHumans(){
    	this.energyLevel = this.energyLevel + 25 ;
    	System.out.println("Humans are yummy. Energy level is now: " + this.displayEnergy());
    	return this.energyLevel;
    }
	
	public int attackTown(){
    	this.energyLevel = this.energyLevel - 100 ;
    	System.out.println("Bats may have set the town on fire. Energy level is now: " + this.displayEnergy());
    	return this.energyLevel;
    }

}

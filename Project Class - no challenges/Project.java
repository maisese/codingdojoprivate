
public class Project {
    // You have been asked by a serial entrepreneur to create a class that she can
    // use to create projects easily. She asks that each project has a name and a
    // description. She needs to be able to create empty projects that she can add a
    // name and description to later; projects with just a name; and projects with
    // both. Every single project should be able to get and set both properties.

    // She also needs each project to be able to give an elevator pitch that will
    // return the name and description separated by a colon.

    protected String name;
    protected String description;
    protected double initialCost; 

    // getters
    public String name() {
        return this.name;
    }

    public String description() {
        return this.description;
    }

    public String initialCost() {
        return this.initialCost;
    }
    //////////////


    public void elevatorPitch() {
        System.out.println(this.name + " : " + this.description);
        // System.out.println("this is working");
    }

    public Project() {
    }

    public Project(String name) {
        this.name = name;
        //setter = argument
        
    }


    public Project(String name, String description) {
        this.name = name;
        this.description = description;
    }

}

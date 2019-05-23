class Human {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName(){
        console.log(this.firstName + " " + this.lastName)
    }
}
var person1 = new Human("Ghino", "Punzalan");
person1.fullName(); // Ghino Punzalan

class Pet extends Human{
    constructor(){
        super("Ghino","Punzalan");
    }
    getPetName(){
        console.log("Bitch");
    }
}

var myPet = new Pet();
myPet.getPetName(); // Bitch
myPet.fullName(); //Ghino Punzalan
console.log(myPet);
class geo{
    constructor(){
        this.lat = 41.11;
        this.long = 43.23;
    }
}

class language1 extends geo{
    constructor(name,country){
        super()
        this.name = name;
        this.country = country;
    }

    greet = () => {
        return  `Say hi to ${this.name}`
    }
}
let french = new language1('French','Frannce')
//The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
// The extends keyword is used in class declarations or class expressions to create a class that is a child of another class.
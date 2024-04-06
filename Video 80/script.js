// let obj = {
//     a: 1,
//     b: "Unique"
// }

// console.log(obj);

// let animal = {
//     eat: true
// };

// let rabbit = {
//     jumb: true
// };

// rabbit._protype_ = animal; // sets rabbit.[[Prototype]] = animal


class Animal{  // Animal is object 
    constructor(name){
        this.name = name
        console.log("Object is created...");
        
    }

    eats(){  // methods
        console.log("kha rha hoon");
        
    }

    jumps(){
        console.log("Kood rha hoon");
        
    }
}
 
class Lion extends Animal{ // class
    constructor(name){
        super(name)
        console.log("Object is created and he is a Lion...");
     }
     eats(){  
        super.eats()
        console.log("kha rha hoon roar");
        
    }
}

let a = new Animal("Bunny"); // function 
console.log(a);

let l = new Lion("Shera")
console.log(l);

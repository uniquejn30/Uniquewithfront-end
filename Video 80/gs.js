class User {
    constructor(name){
        // invoke thr setter
        this.name = name;
    }
    get name() {
        return this._name;
    }

    set name(value){
        if (value.length < 4){
        console.log("Name is too short.");
            return;
        }
        this._name = value;
    }
}

let user = new User("John");
console.log(user.name); //John

user.name = "Unique"; // Name is too short.
console.log(user.name);

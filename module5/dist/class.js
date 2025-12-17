// class Animal{
//     name: string;
//     species: string;
//     sound: string;
//     constructor (name:string, species:string, sound:string ){
//         this.name = name;
//         this.species = species
//         this.sound = sound;
//     }
//     makeSound(){
//         console.log(`the animal making sound ${this.sound}`)
//     }
// }
// with parmeter properties
var Animal = /** @class */ (function () {
    function Animal(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    Animal.prototype.makeSound = function () {
        console.log("the animal making sound: ".concat(this.sound));
    };
    return Animal;
}());
var dog = new Animal("doog", "three", "ghew");
// console.log(dog.name)
dog.makeSound();
// const cat  = new Animal("cfft", "ffe", "mew")
// console.log(cat)
// cat.makeSound()

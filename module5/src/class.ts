

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

class Animal{
    

    constructor (public name:string, public species:string, public sound:string ){

        

    }

    makeSound(){
        console.log(`the animal making sound: ${this.sound}`)
    }

}

const dog  = new Animal("doog", "three", "ghew")
// console.log(dog.name)

dog.makeSound()

// const cat  = new Animal("cfft", "ffe", "mew")
// console.log(cat)

// cat.makeSound()
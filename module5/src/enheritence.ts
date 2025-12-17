
class Parent {

    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number,
         address: string) {

            this.name = name;
            this.age = age;
            this.address = address;

    }

    getSleep(numberOfhours: number){
        console.log(`${this.name} ${numberOfhours} ghonta ghumay`)
    }


}


// notun kicu add na hole evabei thakebe
// class Student extends Parent { }


// add hole obosssi super call hobe
class Student extends Parent { 
      rollNo: number;  //own property
      constructor(name:string, age:number, address:string, rollNo: number){
        super(name, age, address)
        this.rollNo = rollNo;
      }

      owninfo(){
        console.log(`his roll is ${this.rollNo}`)
      }
}

const ali = new Student('Ali', 20, 'feni', 1)
ali.getSleep(2)
ali.owninfo()



// teacher

class teacher extends Parent {
    
    designation: string;   //own property

    constructor(name: string, age: number,
         address: string, designation:string) {
         

            super(name, age, address)
            
            this.designation = designation;

    }

    
    // own method
    takeClass(numberOfclass:number){
        console.log(`${this.name } ${numberOfclass} class naei`)
    }


}

const Teacher = new  teacher("Halim", 6, "Dhake", "Senior")

Teacher.getSleep(2)
Teacher.takeClass(10)
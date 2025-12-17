//oop: instance of typegourd or type narrowing

class Person {
     
    name:string;
     
     constructor(name:string){
         this.name = name;
     }

     getSleep(numberofsleep: number){
            console.log(`${this.name} doinik ${numberofsleep} ghonta ghumay`)
     }

}

class Student extends Person{
     
    constructor(name:string){
        super(name)
    }

    toStudy(numofHrs:number){
        console.log(`${this.name} doinik ${numofHrs} ghonta study kore`)     

    }

}




class Teacher extends Person {

    constructor(name:string){
        super(name)
    }
    
    classTake(numofHrs:number){
        console.log(`${this.name} doinik ${numofHrs} ghonta class kore`)     

    }

}

// another option of (user instanceof Teacher)]
const isTeacher = (user:Person)=>{
    return user instanceof Teacher;  //user is teacher
}

const getUserInfo =(user:Person)=>{
  
    if(user instanceof Student){
        user.toStudy(6)
    } else if(isTeacher(user)){
        user.classTake(8)
    }
    else{
        user.getSleep(12)
    }
  
}

const student1 = new Student("Mr, St")
const teacher1 = new Teacher("Mr. Teachr")

const prson = new Person("Adil")

getUserInfo(prson)
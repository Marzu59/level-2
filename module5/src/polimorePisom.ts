//polymorepisom

// class Person {

//     getSleep(){
//         console.log('normal 12 ghonte')
//     }
// }

// class Student extends Person {

//     getSleep(){
//         console.log('6 ghonta gumay student')
        
//     }
// }

// class NextLevlDev extends Person {

//     getSleep(){
//         console.log('rat e gumanor somoy pay na ')
//     }
// }

//  const getSleepingHours = (param: Person)=>{
//     param.getSleep();
//  }

// const instance1 = new Person()
// const instance2  = new Student();
// const instance3 = new NextLevlDev();

// getSleepingHours(instance3)


//another example 

class  Shape {

    getArea(): number{
        return 0;
    }
}



class Circle extends Shape{
  
    radious:number;
    constructor(radious:number){
        super()
           this.radious = radious;
    }

     
     getArea(): number {
          return Math.PI * this.radious * this.radious;
     }
}

class Rectengle extends  Shape{
     height: number;
     weidth: number;
     constructor(height: number,
     weidth: number){
        super()
        this.height = height;
        this.weidth = weidth;
     }
    getArea(): number {
          return this.height * this.weidth;
    }
}

const area = (param: Shape)=>{
    console.log(param.getArea())  
}

const shap1 = new Shape()
const shap2 = new Circle(10)
const shap3 = new Rectengle(10, 20)

area(shap3)
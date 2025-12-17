
// const creartCounter =()=>{
//     let c = 0;
//     return (amount)=>{
//           c = c + amount
//           return c
//     }
// }
// const counter = creartCounter()
 
// console.log(counter(3))
// console.log(counter(5))



class Counter {
    constructor(count){
        this.count = count;
    }
    add(amount){
        this.count = this.count +  amount;
    }
    
    print() {
        console.log(this.count)
    }
    

}

const counter1 = new Counter(10)


counter1.add(15)

counter1.print()
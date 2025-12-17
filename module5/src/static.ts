

class Counter {
  
  static  count: number = 0;

   static increase(){
       return Counter.count = Counter.count +1;
    }

   static decrease(){
      return  Counter.count = Counter.count - 1;
    }
}

// const instance1 = new Counter(); //ekta memory

// console.log(instance1.increase())
// console.log(instance1.increase())


// const instance2 = new Counter(); //different memory  but after given static then both are same memory

// console.log(instance2.increase())
// console.log(instance2.increase())

// other way for static
console.log(Counter.increase())
console.log(Counter.increase())
console.log(Counter.increase())
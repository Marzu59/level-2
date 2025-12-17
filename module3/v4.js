

class Queue{
    constructor(){
        this.items = [];
    }

    // O(1)
    enque(value){
        this.items.push(value);

    }
    // O(n)
    deque(){
        if(this.isEmpty()){
            return undefined;
        }

        return this.items.shift()
    }
    // o(1)
    pick(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[0]
    }

    isEmpty(){
        return this.items.length === 0;
    }
    print(){
        console.log("start->", this.items.join("->"),  "end")
    }

}

const queue = new Queue()
queue.enque(10)
queue.enque(20)
queue.enque(30)
queue.deque()
console.log(queue.pick())
queue.print()

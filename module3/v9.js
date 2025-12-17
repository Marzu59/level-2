class Node {
    constructor (value){
        this.value = value;
        this.next = null;

    }
}

class LinkList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;

         
    }
    append(value){
        const newNode = new Node(value)
        // If the linked list is empty
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode

        }
        else{
            this.tail.next= newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

     prepend(value) {
        const newNode = new Node(value)
            if(this.head === null  ){
                this.head = newNode;
                this.tail = newNode
            }
            else{
                newNode.next  = this.head;
                this.head = newNode;
            }
            this.length++;
            return this
     }

  insert(index, value) {
    if(index < 0 ||index > this.length){
               console.error("❌ Index out of bound!");
      return undefined;
    }
    if(index === 0){
        return this.prepend(value)
    }
    if(index ===  this.length){
        return this.append(value)
    }
    // 

    const leadingNode  = this._treverseIndex(index - 1)
    // console.log(leadingNode)
    const holdingNode = leadingNode.next;
    //    console.log(holdingNode)
    const newNode = new Node(value)
     leadingNode.next = newNode;
       newNode.next = holdingNode;
      
  }

  remove() {}


// private helper method
   _treverseIndex(index){

     let count = 0;
    let currentNode = this.head;
    while( count !== index){
        currentNode = currentNode.next;
        count++
    }
    return currentNode

   }




  print(){
    const arr = []
    let currentNode = this.head;
    
    while(currentNode !== null){
        arr.push(currentNode.value)
        // console.log(currentNode.value)
        currentNode = currentNode.next;
        
        
  }
  console.log(arr.join(" ->"), " ->null")
        
        
    }
    



}

const linklist = new LinkList()
linklist.append(1)
linklist.append(2)
linklist.prepend(5)
linklist.prepend(6)
linklist.insert(0, 50)
linklist.insert(2, 100)

linklist.print()


class Stack {
    constructor(){
   this.items = [];
    }

    push(value){
        this.items.push(value);

    }
    pop(value){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items.pop(value)
    }

    pop(){
        if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop()

    }
    peek(){
        if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
    }
    

    isEmpty(){
        return this.items.length === 0;
    }


}



const bracketCheker =(ster)=>{
    const stack = new Stack()
    const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

    for(let i = 0; i <ster.length; i++){
        const char =  ster[i]
        // console.log(char)

        if(char === "(" || char === "{" || char === "["){
              stack.push(char);
        } else if(char === ")" || char === "}" || char === "]"){
            
            if(stack.isEmpty() || stack.pop() !== bracketMap[char]  ){
                return false
            }
        }
        


    } 
    //  console.log(stack)
    return stack.isEmpty();
}

// console.log(bracketCheker("([{}])"))
console.log(bracketCheker("])"))




// 

// import Stack from "./Stack.js";

// // Problem Statement

// // Given a string s containing just the characters "(", ")", "{", "}", "[" and "]",
// // determine if the input string is valid.
// // An input string is valid if:
// //     Open brackets must be closed by the same type of brackets.
// //     Open brackets must be closed in the correct order.
// //     Every close bracket has a corresponding open bracket of the same type.

// //? Input and Output
// //? "()[]{}" -> true
// //? "([{}])" -> true
// //? "(]" -> false
// //? "(()" -> false

// const bracketChecker = (str) => {
//   const stack = new Stack();

//   const bracketMap = {
//     ")": "(",
//     "}": "{",
//     "]": "[",
//   };

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     if (char === "(" || char === "{" || char === "[") {
//       stack.push(char);
//     } else if (char === ")" || char === "}" || char === "]") {
//       if (stack.isEmpty()) {
//         return false;
//       }

//       const expected = bracketMap[char];
//       const got = stack.pop();

//       console.log("Expected: ", expected, "Got: ", got);

//       if (got !== expected) {
//         return false;
//       }
//     }
//   }

//   return stack.isEmpty();
// };

// console.log(bracketChecker("([{}])"));
// console.log("-----------------------");
// console.log(bracketChecker(")([{}])"));
// console.log("-----------------------");
// console.log(bracketChecker("([{})"));



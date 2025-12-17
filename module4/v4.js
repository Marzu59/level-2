

const toSum =  (arr, target)=>{
    const numMap  = new  Map();
      

     for(let i = 0; i< arr.length; i++){
        
         const  currentNumber = arr[i];
         const complement = target - currentNumber;

          console.log("current:", currentNumber)
          console.log("compliment:", complement)
 
         if(numMap.has(complement)){
            return [numMap.get(complement), i];
         }

          numMap.set(currentNumber, i)
          
        console.log(numMap)
            
     }
     

     return undefined;

    


}

console.log(toSum([2, 11, 7, 15], 9))
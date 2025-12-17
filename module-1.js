const arr = ["apple", "mango", "banana", "tomato",  "apple"]

// brute force
 
// const rdArr =  (arr)=>{
//    const newArray = [];

//   arr.forEach((element)=>{
//     if(!newArray.includes(element)){
//         newArray.push(element)
//     }
//   })

//   return newArray

// }
// console.log(rdArr(arr))

const nea=(arr)=>{
  const set = new Set(arr)
  
  return Array.from(set)
  
}
console.log(nea(arr))
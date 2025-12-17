

const numbers =[1, 1, 3, 7, 5]
const hasEvenNumber =  numbers.some((number)=> number % 2 === 0)
// console.log(hasEvenNumber)




// some
// const currentRoles = ["user", "editor", "admin"];
// const futureAccessRoles = ["admin", "manager"];

// const canAcccess =  currentRoles.some((role)=> futureAccessRoles.includes(role))
// console.log(canAcccess)



// array

//  const  arrayy =  Array.from({length: 5}).fill(0)
//  const  arrayy =  Array.from({length: 5}, ((_, i)=> i))
//  const  arrayy =  Array.from([1, 3, 5, 6], ((value, i)=> value))


//  console.log(arrayy) 



// const range =(start, stop, step)=>
//     Array.from({length: Math.ceil((stop - start) / step)}, 
//    (_, i)=> start + i * step
// )
// console.log(range(0, 11, 1))
const range = (start, stop, step)=>
    Array.from({length: Math.ceil((stop - start) / step)},
    ((_, i)=> start + i * step )
     )
// console.log(range(1, 11, 1))


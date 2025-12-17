const firstArray = []
const secondArray = []

for(let i= 0 ; i<600000; i++){
    if(i < 300000){
        firstArray.push(i)
    }
    
    
        secondArray.push(i)
    
}

// console.log("first aray", firstArray.length)
// console.log('second Array ', secondArray.length)


console.time("map1")
const firstUser = firstArray.map(number=>({userId: number}))
console.timeEnd("map1")

console.time("map2")
const senconUsr = secondArray.map(number=>({userId: number}))
console.timeEnd("map2")


console.time("find")
const user = senconUsr.find(usr=> usr.userId ===  300000)
console.timeEnd("find")
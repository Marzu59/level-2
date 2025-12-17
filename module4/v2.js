
// const userCount = 50000;

// const userA = [];
// const userB =[] ;

// const createUser = (id)=>({id: `user_${id}`, name: `user ${id}`})

// for(let i = 0; i < userCount; i++){
//     userA.push(createUser(i))
//     userB.push(createUser(i + 25000))
// }

// // console.log(userA)
// // console.log(userB)

// const commonSlowfriends =(userA, userB)=>{
//     const starttime = performance.now()

//     const commonfriends = [];
//     //* o(n) +o(n) total o(n^2)
//     userA.forEach(singleA=>{
//         userB.forEach(singleB=>{
//             if(singleA.id === singleB.id){
//                 commonfriends.push(singleB)
//             }
//         })
//     })


//     const endTime = performance.now()
//     return {count: commonfriends.length, avgtime: endTime - starttime }
// }

// console.log(commonSlowfriends(userA, userB))





const userCount = 50000;

const userA = [];
const userB =[] ;

const createUser = (id)=>({id: `user_${id}`, name: `user ${id}`})

for(let i = 0; i < userCount; i++){
    userA.push(createUser(i))
    userB.push(createUser(i + 25000))
}

// console.log(userA)
// console.log(userB)

const commonSlowfriends =(userA, userB)=>{
    const starttime = performance.now()

    const commonfriends = [];
    //* o(n)
    const idListA = new Set(userA.map(singleuser=> singleuser.id))
    // console.log(idListA)
  
      userB.forEach(singuserB=>{
        // lookup o(1)
           if(idListA.has(singuserB.id)){
            commonfriends.push(singuserB)
           }
      })

    const endTime = performance.now()
    return {count: commonfriends.length, avgtime: endTime - starttime }
}

console.log(commonSlowfriends(userA, userB))
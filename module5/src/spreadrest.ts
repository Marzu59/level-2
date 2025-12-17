
const friends = ["korim", "mahir", ]
const friendsSchool = ["Sk", "MR,hiru", ]

friends.push(...friendsSchool)
// console.log(friends)


// object


// const publicl = {
//     name: "hiru", 
//     agef: "20",
// }

// const work = {
//     name: "hiru",
//     profession: "Driver",
// }

// const fullAdd = {...publicl, ...work}
// console.log(fullAdd)


// rest operator

const sendInvite =(...friends: string[])=>{

    friends.forEach((friend: string)=> console.log(`sent invitation ${friend}`))

}


sendInvite("Mezbah", "Abdul Alim")
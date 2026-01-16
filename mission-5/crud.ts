import { prisma } from "./lib/prisma";


async function run(){
  
    // const createUser = await prisma.user.create({
    //     data: {
    //         name: "Jhanker",
    //         email: "jhanker@gmail.com"
    //     }
    // })

    
//    const createPost = await prisma.post.create({

//     data:  {
//         title: "this is tite",
//         content: "new",
//         authorId: 1
//     }
//    })
//    console.log(createPost)

// const createProfile = await prisma.profile.create({
//     data:{
//         bio: "Jni na",
//         userId: 1
//     }
// })
// console.log(createProfile)

//retrive
// const users = await prisma.user.findMany({
//     include:{
//         posts:true,
//         profile:true
//     }
// })
//  console.dir(users, {depth: Infinity})    



//update
//   const updateUser  = await prisma.profile.update({
//     where:{
//         userId: 1
//     },
//     data: {
//         bio: "UpdatedBio"
//     },
//     select: {
//         id:true,
//         bio:true,
//         user: { 
//             select: {
//                 name: true,
//                 email:true
//             }
//          }
//     }
//   })
// console.log(updateUser)

//delete
// const deleteUsr = await prisma.user.delete({
//     where: {
//         id: 3
//     }
// })
// console.log(deleteUsr)



//find unique 
// const getuser = await prisma.user.findUnique({
//       where: {
//         id: 3
//       },
//       include:{
//       posts:true,
//       profile:true
//       }
// })
// console.log(getuser)


//upsert 

const upsertUsr = await prisma.user.upsert({
     where: {
        email: "dd@gmail.com"
     },
      
       update: {
        name: "unknown",
        
     },
     create: {
        name:"unknown2",
        email: "dd@gmail.com"
     }
})
 console.log(upsertUsr)
}

run()
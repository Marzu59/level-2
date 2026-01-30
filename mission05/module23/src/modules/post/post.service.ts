import { Post, PostStatus } from "../../../generated/prisma/client";
import { PostWhereInput } from "../../../generated/prisma/models";
import { prisma } from "../../lib/prisma";


const createPostinDB = async (data:Omit< Post, 'id' |'createdAt'| 'updatedAt'| 'authorId' >, userId:string )=>{
              
    const result = await prisma.post.create({
        data: {
            ...data,
        authorId: userId
        }
    })

    return result;


}


  const getAllpostsFromDB = async(payload:string | undefined, tags:string[] | [], isFeatured:boolean | undefined, status:PostStatus | undefined, page:number, limit:number,skip:number,
    sortBy:string , sortOrder:string 
  )=>{

     const andConditons: PostWhereInput[] = [];

      if(payload){
        andConditons.push({
                OR: [
                {
                    title: {
                contains: payload as string,
                mode: 'insensitive'
            }
                },
                {
                    content: {
                        contains: payload as string,
                        mode: 'insensitive'
                    }
                },
                {
                     tags: {
                        has: payload as string,

                     }
                }
            ]
            })
      }

      if(tags.length > 0){andConditons.push(
                 {
                tags:{
                hasEvery: tags as string[]
            }
            }
      )}

       if(typeof isFeatured === 'boolean'){
        andConditons.push({isFeatured})
       }

       if( status ){
      andConditons.push({
        status
      })
       }
        
      const result = await prisma.post.findMany({
           take: limit,
           skip: skip,
    
   

        where: {

            AND: andConditons
            
            
        },
        orderBy:  {
            [sortBy] : sortOrder
        }
     });
     const total =  await prisma.post.count({
             where: {
                AND: andConditons
             }

     });

    return {
        data: result,
        pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit)
        }
        
    }

  }

  

  const getPostByIDintoDB = async(id:string)=>{

   const result = await prisma.$transaction(async(tx)=>{


        await tx.post.update({
        where: {
            id:id
        },
        data: {
            views: {increment: 1}
        }
    })

    const postData = await tx.post.findUnique({
        where: {
            id: id
        }

    }) 
    return postData;


   })

   return result;
       
    

  }

export const postDB = {
    createPostinDB,
    getAllpostsFromDB,
    getPostByIDintoDB
}
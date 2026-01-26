import { Post } from "../../../generated/prisma/client";
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


  const getAllpostsFromDB = async(payload:string | undefined, tags:string[] | [])=>{

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
        
      const result = await prisma.post.findMany({
         
    
   

        where: {

            AND: andConditons
            
            
        }
     });
    return result;

  }



export const postDB = {
    createPostinDB,
    getAllpostsFromDB,
}
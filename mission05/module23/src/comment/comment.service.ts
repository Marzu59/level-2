import { ComentStatus } from "../../generated/prisma/enums";
import { prisma } from "../lib/prisma";


const createCommentIntoDB = async(payload:{
     content: string;
     authorId: string;
     postId:string;
     parentId?: string;
      })=>{

         await prisma.post.findUniqueOrThrow({
            where: {
                id: payload.postId
            }
        })
         
          if(payload.parentId){
            await prisma.comment.findUniqueOrThrow({
                  where: {
                    id: payload.parentId 
                  }
            })
          }

        const result = await prisma.comment.create({
            data: payload
        })
      
  return result;


}


const getCommentDB = async(id:string)=>{

      const result = await prisma.comment.findUnique({
        where: {
            id: id
        }, 
        include: {
            post: {
                select: {
                    title:true,
                    views:true
                }
            }
        }
      })
      return result;

}


const getAuthorIntoDB = async(authorId:string)=>{
   
     const result = await prisma.comment.findMany({
      where: {
        authorId: authorId
      },
      orderBy: {createdAt: 'desc'},
      include: {
        post: {
          select: {
            title:true,
            id: true
          }
        }
      }

     })

 return result
}





const deleteCommnetIntoDB = async(authorId:string, commentId:string)=>{
  
             const commentData = await prisma.comment.findFirst({
              where: {

                      id: commentId,
                      authorId

              }
             })

             if(!commentData){
              throw new Error("comment not found ")
             }

             return await prisma.comment.delete({
              where:{
                 id: commentData.id
              }
             })
   
}

const updateCommentService = async(commentId:string, data:{content?:string, status?:ComentStatus}, authorId:string)=>{

        
      const result = await prisma.comment.findFirst({
                                  
         where: {
          id:commentId,
          authorId:authorId
         }
        
      });

       if(!result){
        throw new Error ("comment not found")
       }

     return  await prisma.comment.update({
        where: {
          id:commentId,
          authorId
        },
        data
       })


};

const commentModerate = async(commentId:string, data: {status: ComentStatus})=>{
 
        const commentData = await prisma.comment.findUniqueOrThrow({
          where: {
            id:commentId
          },
        
        });

        if(commentData.status === data.status){
          throw new Error(`Your provided status already ${data.status}`)
        }

        return await prisma.comment.update({
          where: {
            id:commentId
          },
          data: {
            status: data.status
          },
          select: {
            id: true,
            status:true,
            content: true
          }
        });
   
  
};



export const  commentService = {
        createCommentIntoDB,
        getCommentDB,
        getAuthorIntoDB,
        deleteCommnetIntoDB,
        updateCommentService,
        commentModerate,
}
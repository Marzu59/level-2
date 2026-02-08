import { ComentStatus, Post, PostStatus } from "../../../generated/prisma/client";
import { PostWhereInput } from "../../../generated/prisma/models";
import { prisma } from "../../lib/prisma";
import { UserRole } from "./post.router";


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
        },
        include : {
            _count: {
                select: {comments: true}
            }
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
        },
        include: 
        {
            comments: {
            where: {
                parentId:null
            },
             orderBy: {createdAt: "desc"}
            , include: {
                replies: {
                    include: {
                        replies:{
                            where: {status: ComentStatus.APPROVED},
                            orderBy: {createdAt: 'asc'}
                        }
                        
                    
                    },
                    orderBy: {createdAt:'asc'}
                    
                },
                
                
                 
                
            }
        },
        _count: {
            select: {comments: true}
        }

    }
        

    }) 
    return postData;


   })

   return result;
       
    

  };

  const getmyPostsFromDB = async(id:string)=>{
    
           await prisma.user.findUniqueOrThrow({
            where: {
                id: id,
                "status": "INACTIVE"
            },
            select: {
                id:true
            }
          })

      const result = await prisma.post.findMany({
        where: {
            authorId: id 
        },
        orderBy: {
            createdAt:"desc"
        },
        include: {
            _count: {select:{
                comments: true
            }}
        }
      })

    //   const total = await prisma.post.count({
    //     where: {
    //         authorId: id,
    //     }
    //   })
    // const total = await prisma.post.aggregate({
    //     _count: {
    //         id:true
    //     },
    //     where: {
    //         authorId: id
    //     }
    // })
        
      return result;
     

  }


   const updateOwnPostIntoDB = async(postId:string, authorId:string, data:Partial<Post>, isAmdin:boolean )=>{
            
       
       const postData = await prisma.post.findUniqueOrThrow({
          where: {
            id: postId
          },
          select: {
            id: true,
            authorId:true,
            
          }
       })

       if(!isAmdin && (authorId !== postData.authorId)){
        throw new Error("you are not owner of this post! Get out haramjada")
       };
       if(!isAmdin){
        delete data.isFeatured
       }

       const updatePost = await prisma.post.update({
        where:{
            id: postId
        },
        data
       });

       return updatePost;




   }

const deleteOwnpostFromDB  = async( postId:string, authorId:string, isAmdin:boolean )=>{
     
   const postdata = await prisma.post.findUniqueOrThrow({
    where: {
        id:postId
    }, 
    select: {
        id:true,
        authorId:true
    }
   })

      if(!isAmdin && (postdata.authorId !== authorId)){
        throw new Error("you are not owner of this post or you are not admin")
      }

    return  await prisma.post.delete({
        where: {
            id: postId
        }
      });

      
    

};

const getstatsFromDB = async()=>{
   
    return await prisma.$transaction(async(tx)=>{
               const [totalPost, PUBLISHEDPost, comments, totalViews] = 
                 await Promise.all([
                  
                     await tx.post.count(),
                     await tx.post.count({ where: {status: PostStatus.PUBLISHED}}),
                     await tx.comment.count(),
                     await tx.post.aggregate({_sum:{views: true}})


                 ])
         
           
            
          return {
            totalPost,
            PUBLISHEDPost, 
            comments,
            totalViews: totalViews._sum.views
          }
         
    })


}


export const postDB = {
    createPostinDB,
    getAllpostsFromDB,
    getPostByIDintoDB,
    getmyPostsFromDB,
    updateOwnPostIntoDB,
    deleteOwnpostFromDB,
    getstatsFromDB
}
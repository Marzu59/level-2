import e, { NextFunction, Request, Response } from "express";
import { postDB } from "./post.service";
import { PostStatus } from "../../../generated/prisma/enums";
import paginationSotingHelper from "../../helpers/paginationSortingHelpers";
import { UserRole } from "./post.router";


const  createPost = async(req:Request, res:Response, next:NextFunction)=>{

     try{
          if(!req.user?.id){
            return res.status(401).json({
                success: false,
                message: 'you are not authorized'
            })
          }
          console.log(req.user)
          const result = await postDB.createPostinDB(req.body, req.user.id as string);
           
           res.status(200).json({
              data: result
           })

     }

     catch(eror:any){
              //  res.status(404).json({
              //   message: eror.message
              //  })
              next(eror)
     }
    // console.log(req.body)
}


const getAllposts = async(req:Request, res:Response)=>{

      try{
            const {search} = req.query;
              const tags = req.query.tags;
              const tagsAryORarray = tags ? (tags as string).split(",") : [];
              const isFeatured = req.query.isFeatured;
                const handleIsFeatured = isFeatured ?
                 isFeatured === 'true' ? true 
                  : isFeatured==='false'? false
                  : undefined : undefined;
                
                  const status = req.query.status as PostStatus;
                  const handleStatus = status ? status ==='ARCHIVED' ? status :
                    status === 'DRAFT' ? status :
                    status === 'PUBLISHED'? status : undefined
                   : undefined;

                  //  const page = Number(req.query.page ?? 1);
                  //  const limit = Number(req.query.limit ?? 10)
                  //  const skip = (page - 1) * limit;

                  //  const sortBy = req.query.sortBy as string  | undefined;
                  //  const sortOrder= req.query.sortOrder as string | undefined;

                 const   { page,  limit,  skip,  sortBy, sortOrder} = paginationSotingHelper(req.query)
                    

                     const searchString  = typeof search == 'string' ? search : undefined;
               const result = await postDB.getAllpostsFromDB(searchString, tagsAryORarray, handleIsFeatured, handleStatus, page, limit,skip, sortBy, sortOrder);

               res.status(200).json(result);


      }
      catch(err:any){
               res.status(404).json({
                message: err.message
               })
     }


    
}


  const getPostByID = async(req:Request, res:Response)=>{

   try{

    const id= req.params.id as string ;
        
     if(!id){
      throw new Error("Post id  required.")
     }


     const result = await postDB.getPostByIDintoDB(id)

     res.status(200).json(result)

   }

   catch(error:any){
    res.status(401).json({
       message: error.message
    })
   }



  };

  const getmyPosts = async(req:Request, res:Response)=>{
      
         try{
               const user = req.user;
                if(!user){
                  throw new Error("usr not found")
                }
                  
            const result = await postDB.getmyPostsFromDB(req.user?.id as string);
            res.status(200).json(result)

         }
         
         catch(e:any){
            res.status(401).json({
              message: e.message
            })
           
         }
     

  };

  const updateOwnPost = async(req:Request, res:Response, next:NextFunction)=>{
            
      try{

         const user = req.user;
        //  console.log(user)
          const {postId} = req.params;
          if(!user){
            throw new Error("user not fount")
          }

          const isAmdin = user.role === UserRole.ADMIN
            
           const result = await postDB.updateOwnPostIntoDB(postId as string, user.id, req.body, isAmdin);
           res.status(200).json(result)



      }

      catch(e){
         next(e)
    // const errrorMessage = (e instanceof Error) ? e.message : "post update failed"
    // res.status(400).json({
    //     error: errrorMessage,
    //     details: e
    // })
}

  };



  const deleteOwnpost = async(req:Request, res:Response)=>{


    try{
      const user = req.user;
      const {postId} = req.params;
      if(!user){
        throw new Error("user not found")
      };
      const isAdmin = user?.role === UserRole.ADMIN
       const result = await postDB.deleteOwnpostFromDB(postId as string,  user.id, isAdmin)
        

       
       res.status(200).json({
          message: "deleted successfully",
          data: result
       })
         

    }

    catch(e){
      const errrorMessage = (e instanceof Error) ? e.message : "comment delete failed"
      res.status(400).json({
        error: errrorMessage,
        details: e
      })
    };
  };


  const getStats = async (req:Request, res:Response)=>{
      
       
    try{
      

       const result = await postDB.getstatsFromDB()

        res.status(200).json(result)


    }

    catch(e){
      const errrorMessage = (e instanceof  Error) ? e.message : "stats get failed"

       res.status(400).json({
        error: errrorMessage,
        details: e
       })
    }
        
    

  }







export const postcontroll = {
    createPost,
    getAllposts,
    getPostByID,
    getmyPosts,
    updateOwnPost,
    deleteOwnpost,
    getStats
};
import { Request, Response } from "express";
import { postDB } from "./post.service";
import { PostStatus } from "../../../generated/prisma/enums";


const  createPost = async(req:Request, res:Response)=>{

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
               res.status(404).json({
                message: eror.message
               })
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

                   const page = Number(req.query.page ?? 1);
                   const limit = Number(req.query.limit ?? 10)

                     const searchString  = typeof search == 'string' ? search : undefined;
               const result = await postDB.getAllpostsFromDB(searchString, tagsAryORarray, handleIsFeatured, handleStatus, page, limit);

               res.status(200).json(result);


      }
      catch(err:any){
               res.status(404).json({
                message: err.message
               })
     }


    
}

export const postcontroll = {
    createPost,
    getAllposts,
};
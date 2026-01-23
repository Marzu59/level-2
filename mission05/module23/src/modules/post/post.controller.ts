import { Request, Response } from "express";
import { postDB } from "./post.service";


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

export const postcontroll = {
    createPost
};
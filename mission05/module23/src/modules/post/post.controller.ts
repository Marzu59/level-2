import { Request, Response } from "express";
import { postDB } from "./post.service";


const  createPost = async(req:Request, res:Response)=>{

     try{

          const result = await postDB.createPostinDB(req.body);
           
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
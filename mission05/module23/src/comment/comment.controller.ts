import { Request, Response } from "express"
import { commentService } from "./comment.service"

const createComment = async(req:Request, res:Response)=>{

         

    try{
           const user = req.user;
           req.body.authorId = user?.id;

            const result = await commentService.createCommentIntoDB(req.body)

    
             res.status(200).json(result)

    }

    catch(er:any){

        res.status(400).json({
            error: "comment creation fail",
            details: er.message
        })
    }


}


const getComment = async(req:Request, res:Response)=>{
  
        try{
            const {commentId} = req.params;
             
            const result =  await commentService.getCommentDB(commentId as string)

            res.status(200).json(result)

        }

        catch(er:any){

        res.status(400).json({
            error: "comment fetch fail",
            details: er.message
        })
    }

}





const getauthor = async(req:Request, res:Response)=>{
  
        try{
            const {authorId} = req.params
             
            const result =  await commentService.getAuthorIntoDB(authorId as string)

            res.status(200).json(result)

        }

        catch(er:any){

        res.status(400).json({
            error: "author fetch fail",
            details: er.message
        })
    }

}





const deleteCommnet = async(req:Request, res:Response)=>{
  
        try{
            const {commentId} = req.params;
            const user = req.user;
             
            const result =  await commentService.deleteCommnetIntoDB(user?.id as string , commentId as string)

            res.status(200).json(result)

        }

        catch(er:any){

        res.status(400).json({
            error: "comment delete  fail",
            details: er.message
        })
    }

}

const commentUpdate = async(req:Request, res:Response)=>{
  
        try{
            const {commentId} = req.params;

            const user = req.user;
             
            const result =  await commentService.updateCommentService ( commentId as string , req.body , user?.id as string )

            res.status(200).json(result)

        }

        catch(er:any){

        res.status(400).json({
            error: "comment update  fail",
            details: er.message
        })
    }

};




const moderateComment= async(req:Request, res:Response)=>{
  
   try{
           const {commentId} = req.params;

            
          const result = await  commentService.commentModerate(commentId as string, req.body);
            res.status(200).json(result);


   }

//    catch(error:any){
//     res.status(400).json({
//         error: 'comment update failed',
//         details: error.message
//     })
//    }

//another way

catch(e){
    const errrorMessage = (e instanceof Error) ? e.message : "comment update failed"
    res.status(400).json({
        error: errrorMessage,
        details: e
    })
}

};

export const  commnentControll = {
  createComment,
  getComment,
  getauthor,
  deleteCommnet,
  commentUpdate,
  moderateComment
}
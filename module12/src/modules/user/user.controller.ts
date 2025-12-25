import { Request, Response } from "express";
import { pool } from "../../config/db";
import { userService } from "./user.service";

const createUser = async(req:Request, res:Response) => {
    // console.log(req.body)

    // const {name, email} = req.body;
    
 
     try{
         const result = await userService.userQuery(req.body)

        
         res.status(201).json ({
            success: true,
            message: "data inserted successfully",
            data: result.rows[0]
         })
         
     }

     catch(error:any){
        res.status(500).json({
            success: false,
            message: error.message
        })
     }

    
}
//for get
const getuser = async(req: Request, res: Response)=>{

     try{
            const result = await userService.getuserQuery()
            
            res.status(200).json({
                success: true,
                message: "user retrived successfully",
                data: result.rows
            })

     }

     catch(error:any ){
         res.status(500).json({
            success: false,
            message: error.message,
            details: error,

         })
     }
}


const singleUser = async(req:Request, res:Response)=>{
    // console.log(req.params.id)
    // res.status(200).json({
    //     message: "id"
    // })

    

     try{
         const result =await userService.querySigleUser(req.params.id as string )
    //  console.log(result)

        if(result.rows.length === 0){
            res.status(404).json({
                success: false,
                message: "no rows found"
            })
            
        }
        else{
                res.status(200).json({
                    message: true,
                    data: result.rows[0]
                })
            }
     }

     catch(err: any){
        res.status(401).json({
            success: false,
           data:  err.message
        })

     }

}

const updateUSer = async(req:Request, res:Response)=>{
      const {name, email} = req.body;
    
      

      try{
        const  result = await userService.queryUpdataUsr(name, email, req.params.id!) 


        if(result.rows.length === 0){
            res.status(401).json({
                success: false,
                  message: "user not found"
            })
        }
        else{
            res.status(200).json({
                success: true,
                message: "user updated",
                data: result.rows[0]
            })

        }
      }
      catch(err:any){
        res.status(401).json({
            succes:false,
            message: "data not found",
            data: err.message,
        })
      }


}

const deleteUser = async(req: Request, res:Response)=>{
     
    


     try{
           const result = await userService.queryDelete(req.params.id!)
         

        if(result.rowCount === 0){
            res.status(401).json({
                success: false,
                  message: "not deleted"
            })
        }
        else{
            res.status(200).json({
                success: true,
                message: "user Successfully deleted",
                data: result.rows
            })

        }
      }
      catch(err:any){
        res.status(401).json({
            succes:false,
            message: "data not found",
            data: err.message,
        })
      }

}


export  const controllers = {
    createUser,
    getuser,
    singleUser,
    updateUSer,
    deleteUser,
}
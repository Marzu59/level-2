import { Request, Response } from "express";
import { pool } from "../../config/db";
import { userService } from "./user.service";

const createUser = async(req:Request, res:Response) => {
    // console.log(req.body)

    const {name, email} = req.body;
    
 
     try{
         const result = await userService.userQuery(name, email)

        
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

export  const controllers = {
    createUser,
}
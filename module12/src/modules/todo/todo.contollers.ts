import { Request, Response } from "express";
import { todoServices } from "./todo.service";




const todoPost = async(req:Request,  res: Response )=>{
    

    try{
        const result = await todoServices.todoQuerey(req.body)
        res.status(201).json({
            success: true,
            message: "todo  data created",
            data: result.rows[0]
        })
    }

    catch(err: any){
        res.status(404).json({success: false,
            message: "not found data of todo",
        data: err.message})
         
    }

     

}





export const todoControllers = {
    todoPost,

}
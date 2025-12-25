// higher order function return korbe function k
import jwt, { JwtPayload } from "jsonwebtoken"

import { NextFunction, Request, Response } from "express"
import config from "../config";


const auth = ()=>{
    return async(req:Request, res:Response, next:NextFunction)=>{

        try{

            const token = req.headers.authorization;
        console.log(token)

        if(!token){
            return res.status(401).json({message:"you are not allowed" }) 
        }
        const decoded = jwt.verify(token, config.jwt_secret as string)
      
        console.log(decoded)
       req.user = decoded as JwtPayload;


        next()

        }
        catch(err:any){
            res.status(500).json({
                success:false,
                message: err.message
            })
        }
    }
           
}

export default auth;
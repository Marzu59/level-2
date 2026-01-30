import express, { NextFunction, Request, Response } from "express";
import { postcontroll } from "./post.controller";
import { auth } from "../../lib/auth";

declare global {
    namespace Express{
        interface Request {
            user?:{
                id: string;
                email: string;
                name:string;
                emailVerified:boolean;

            }
        }
    }
}

 export enum UserRole {
                USER = "USER",
                ADMIN = "ADMIN"
 }

const router = express.Router()

const midddleware = (...roles:UserRole[])=>{
    return async (req:Request, res:Response, next:NextFunction)=>{
         const session = await auth.api.getSession({
            headers: req.headers as any
         })
         if(!session){
            return res.status(401).json({
                success: false,
                message: 'you are not authorized'
            })

         }
         if(!session.user.emailVerified){
            return res.status(401).json({
                success: false,
                message: 'verify your email'
            })
            
         }

         req.user = {
            id: session.user.id,
            email:session.user.email,
            name: session.user.name,
            emailVerified: session.user.emailVerified
         }

         if(roles.length && !roles.includes(session.user.role as UserRole)){
             return res.status(401).json({
                success: false,
                message: 'you are not allow to permission to enter here.maybe your role is wrong'
            })
         }

         next()



    }
}


router.get('/', postcontroll.getAllposts )


router.get('/:id', postcontroll.getPostByID);

router.post('/', midddleware(UserRole.USER), postcontroll.createPost);



export  const  postRouter  = router;
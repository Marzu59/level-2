import { NextFunction, Request, Response } from "express"
import { Prisma } from "../../generated/prisma/client";

function errorHandler (err:any, req:Request, res:Response, next:NextFunction) {
//   if (res.headersSent) {
//     return next(err)
//   }

  let statusCode = 500;
  let errrorMessage = "internal server error";
  let errorDetails = err;

  if(err instanceof Prisma.PrismaClientValidationError){
     
      statusCode = 400;
      errrorMessage = "you provided missig field or incorrect field ";
       
  }
    else if(err instanceof Prisma.PrismaClientKnownRequestError){
           
         if(err.code === "P2025"){
            statusCode = 400;
            errrorMessage = "An operation failed because it depends on one or more records that were required but not found"
         }

         else if(err.code === "P2002"){
            statusCode = 400;
            errrorMessage = "Unique constraint failed on the {constraint}"
         }
         
    }
    else if(err instanceof Prisma.PrismaClientUnknownRequestError){
           
         statusCode = 500;
         errrorMessage = "errror  occoured durin query excution"
         
    } else if(err instanceof Prisma.PrismaClientRustPanicError){
          statusCode = 500;
          errrorMessage = " the underlying engine crashes and exits with a non-zero exit code"
    } else if(err instanceof Prisma.PrismaClientInitializationError){
        if(err.errorCode === "P1000 "){
            statusCode = 401;
            errrorMessage = "Authentiation failed"
        }
    }



  res.status(500)
  res.json({
    message: errrorMessage,
    error: errorDetails
  })
}

export default errorHandler;
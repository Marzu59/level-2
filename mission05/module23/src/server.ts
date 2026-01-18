import app from "./app";
import { prisma } from "./lib/prisma";
  
const port = process.env.PORT || 3000;
async function main (){
   
    try{

         await prisma.$connect();
         console.log("connected to database now")

         app.listen(port,()=>{
                   console.log("server running")
         })
    }
    catch(error){
         
        console.log("An error happend", error);
        await prisma.$disconnect();
        process.exit(1);
    }

    
}

main()
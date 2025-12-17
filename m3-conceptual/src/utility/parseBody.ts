import { IncomingMessage } from "node:http";

const parsebody =(req:IncomingMessage): Promise<any> =>{

    return new Promise((resolve, rejected)=>{
        let body = "";
        req.on("data", (chunk)=>{
            body += chunk;

        });
        req.on("end", ()=>{
            try{
                resolve(JSON.parse(body))
            } catch (error){
                  rejected(error);
            }
        })
    })


}
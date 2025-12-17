import { IncomingMessage, ServerResponse } from "node:http";
import { productController } from "../controller/products.control";

export const productRoute = (req:IncomingMessage, res:ServerResponse)=>{
    // console.log(req.url)

    const url = req.url;
    const method = req.method;

    if(url === '/' && method === 'GET'){
        
        res.writeHead(200, {"content-type": "application/json"})
        res.end(JSON.stringify({message: "Aita to root url"}))

}
else if(url?.startsWith('/products')){
    // console.log('vai agula to products')
    productController(req, res)
    
}
 else{

    res.writeHead(200, {"content-type": "application/json"})
        res.end(JSON.stringify({message: "vhai erokom kono route to nai"}))
 }

};
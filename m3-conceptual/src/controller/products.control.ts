import { IncomingMessage, ServerResponse } from "node:http";
import { readProduct } from "../services/products.service";
import { Iproduct } from "../types/product.interface";

export const productController = (req: IncomingMessage, res: ServerResponse)=>{
        
    const url = req.url;
    const urlPart = url?.split('/')
    // console.log(urlPart)
    const id = urlPart && urlPart[1]=== "products" ?  Number(urlPart[2]) : null;
    const method = req.method;

    if(url === "/products" && method === "GET"){
      const products =  readProduct()
      console.log(products, typeof products)
        res.writeHead(200, {"content-type": "application/json"})
        res.end(JSON.stringify({message: "Are vai ata product route", data: products}))
    }  else if(method === "GET" && id  !== null){
        const products = readProduct();
        const product = products.find((p:Iproduct)=> p.id === id);
        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify({message:"aita object", data: product}))

      }

}
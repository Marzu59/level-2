import  path from "path"
import  fs from "fs"
import { Iproduct } from "../types/product.interface"
const filePath = path.join(process.cwd(),'./src/database/database.json')
export const readProduct=()=>{
    // console.log(filePath)
    const data = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(data)
    // console.log(data.toString())
    // console.log(data)
}

readProduct()
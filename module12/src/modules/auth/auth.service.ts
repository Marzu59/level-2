import { pool } from "../../config/db"
import bcrypt from "bcryptjs"

import jwt from "jsonwebtoken"
import config from "../../config"


const userLogin = async(email:string, password:string)=>{
console.log(email)
const result = await pool.query(`SELECT * FROM users WHERE email=$1 `, [email]);

if(result.rows.length === 0){
    return null;
};

const user =  result.rows[0];

const matchh = await bcrypt.compare(password , user.password)
console.log({matchh})
 if(!matchh){
    return false;
 }
  const sectet = config.jwt_secret;
 const token = jwt.sign({name: user.name, email: user.email}, sectet as string, {
    expiresIn: "7d",
 });
 console.log(token)
 return {token, user}




}




export const authServices = {
    
    userLogin,


}
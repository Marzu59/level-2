import { pool } from "../../config/db"
import bcrypt from "bcryptjs";

const userQuery =async(payload:Record<string, unknown>)=>{
const {name, email, password} = payload;

  const passwordHash = await bcrypt.hash(password as string, 10)

    const result = await pool.query(
            `INSERT INTO    users(name, email, password) VALUES($1, $2, $3) RETURNING * `,
            [name, email, passwordHash]
        )
        return result
}


const getuserQuery = async()=>{
  const resut =   await pool.query(`SELECT  * FROM USERS`);

  return resut;
}

const querySigleUser = async (id:string)=>{
    const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [id])
    return result;
}

const queryUpdataUsr = async (name: string, email:string, id:string)=>{

  const result =  await pool.query(`UPDATE users SET  name=$1, email=$2  WHERE id=$3 RETURNING *`, [name, email, id]);

  return result
}


const queryDelete = async(id:string)=>{
    const result =  await pool.query(`DELETE FROM  USERS WHERE  id=$1`, [id])

    return result;
}

export const userService = {
    userQuery,
    getuserQuery,
    querySigleUser,
    queryUpdataUsr, 
    queryDelete,   
}
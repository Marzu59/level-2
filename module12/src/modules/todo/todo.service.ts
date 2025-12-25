import { pool } from "../../config/db";




const todoQuerey = async(payload:Record<string, unknown>)=>{
    const {user_id, title} = payload;
    const result =  await pool.query(`INSERT INTO todos(user_id, title) VALUES($1, $2) RETURNING *`, [user_id,  title]);
   return result;
}

//todoQuery another approch
/*
const todoQuery = async (payload: Record<string, unknown>) => {
  const { user_id, title } = payload as {
    user_id?: number;
    title?: string;
  };

  if (!user_id || !title) {
    throw new Error("user_id and title are required");
  }

  const result = await pool.query(
    `INSERT INTO todos (user_id, title)
     VALUES ($1, $2)
     RETURNING *`,
    [user_id, title]
  );

  return result.rows[0];
};

*/



export const  todoServices = {
    todoQuerey,

}
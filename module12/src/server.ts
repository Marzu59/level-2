import express, { json, NextFunction, Request, response, Response } from "express"
import { Pool } from "pg"
import dotenv from "dotenv"
import path from "path"

dotenv.config({path: path.join(process.cwd(), ".env")})

const app = express()
const port = 5000;
app.use(express.json())


const pool = new Pool({connectionString: `${process.env.CONNECTION_STR}`});


    const initDB = async ()=>{
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users(
             id SERIAL PRIMARY KEY,
             name VARCHAR(100) NOT NULL,
             email VARCHAR(150) UNIQUE NOT NULL,
             age INT,
             phone VARCHAR(15),
             address TEXT,
             created_at TIMESTAMP DEFAULT NOW(),
             updated_at  TIMESTAMP DEFAULT NOW()

            )
            `)

            await pool.query(`
                CREATE TABLE IF NOT EXISTS todos(
                id SERIAL PRIMARY KEY,
                user_id INT REFERENCES users(id) ON DELETE CASCADE,
                description TEXT ,
                 completed BOOLEAN DEFAULT false,
                 due_date DATE,
                created_date TIMESTAMP DEFAULT NOW(),
                updated_at TIMESTAMP DEFAULT NOW()
                )
                `)
                await pool.query(`
                        ALTER TABLE  todos ADD IF NOT EXISTS title text ;`)
    }

    initDB()

  const looger = (req: Request, res:Response, next:NextFunction)=>{
      console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}\n`)
      next();
  }

app.get('/', looger, (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.post('/users', async(req, res) => {
    // console.log(req.body)

    const {name, email} = req.body;
    
 
     try{
        const result = await pool.query(
            `INSERT INTO    users(name, email) VALUES($1, $2) RETURNING * `,
            [name, email]
        )

        
         res.status(201).json ({
            success: true,
            message: "data inserted successfully",
            data: result.rows[0]
         })
         
     }

     catch(error:any){
        res.status(500).json({
            success: false,
            message: error.message
        })
     }

    
})

app.get('/users', async(req: Request, res: Response)=>{

     try{
            const result = await pool.query(`SELECT  * FROM USERS`);
            
            res.status(200).json({
                success: true,
                message: "user retrived successfully",
                data: result.rows
            })

     }

     catch(error:any ){
         res.status(500).json({
            success: false,
            message: error.message,
            details: error,

         })
     }
})

app.get('/users/:id', async(req:Request, res:Response)=>{
    // console.log(req.params.id)
    // res.status(200).json({
    //     message: "id"
    // })

    

     try{
         const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [req.params.id])
    //  console.log(result)

        if(result.rows.length === 0){
            res.status(404).json({
                success: false,
                message: "no rows found"
            })
            
        }
        else{
                res.status(200).json({
                    message: true,
                    data: result.rows[0]
                })
            }
     }

     catch(err: any){
        res.status(401).json({
            success: false,
           data:  err.message
        })

     }




})



app.put('/users/:id',async(req:Request, res:Response)=>{
      const {name, email} = req.body;
    
      

      try{
        const  result =  await pool.query(`UPDATE users SET  name=$1, email=$2  WHERE id=$3 RETURNING *`, [name, email, req.params.id]);


        if(result.rows.length === 0){
            res.status(401).json({
                success: false,
                  message: "user not found"
            })
        }
        else{
            res.status(200).json({
                success: true,
                message: "user updated",
                data: result.rows[0]
            })

        }
      }
      catch(err:any){
        res.status(401).json({
            succes:false,
            message: "data not found",
            data: err.message,
        })
      }


})

app.delete('/users/:id', async(req: Request, res:Response)=>{
     
    


     try{
           const result = await pool.query(`DELETE FROM  USERS WHERE  id=$1`, [req.params.id]) 
         

        if(result.rowCount === 0){
            res.status(401).json({
                success: false,
                  message: "not deleted"
            })
        }
        else{
            res.status(200).json({
                success: true,
                message: "user Successfully deleted",
                data: result.rows
            })

        }
      }
      catch(err:any){
        res.status(401).json({
            succes:false,
            message: "data not found",
            data: err.message,
        })
      }

})

// todos crud

app.post('/todos', async(req:Request,  res: Response )=>{
       const {user_id, title} = req.body;

    try{
        const result = await pool.query(`INSERT INTO todos(user_id, title) VALUES($1, $2) RETURNING *`, [user_id,  title]);
        res.status(201).json({
            success: true,
            message: "todo  data created",
            data: result.rows[0]
        })
    }

    catch(err: any){
        res.status(404).json({success: false,
            message: "not found data of todo",
        data: err.message})
         
    }

     

})

app.use((req:Request, res: Response)=>{
    res.status(404).json({
        success:  false,
        message: "route not found",
        path: req.path,
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

import express, { json, NextFunction, Request, response, Response } from "express"
import initDB, { pool } from "./config/db";
import config from "./config";
import looger from "./config/middleware";
import { usrRoutes } from "./modules/user/usr.route";
import { todoROutes } from "./modules/todo/todo.route";
import { autRoutes } from "./modules/auth/auth.router";

// import { Pool } from "pg"
// import config from "./config"
// import dotenv from "dotenv"
// import path from "path"




const app = express()
const port = config.port;
app.use(express.json())

//db initialize


    initDB()

  

app.get('/', looger, (req: Request, res: Response) => {
    res.send('Hello World!')
})


app.use('/users', usrRoutes);

// app.post('/users', async(req, res) => {
//     // console.log(req.body)

//     const {name, email} = req.body;
    
 
//      try{
//         const result = await pool.query(
//             `INSERT INTO    users(name, email) VALUES($1, $2) RETURNING * `,
//             [name, email]
//         )

        
//          res.status(201).json ({
//             success: true,
//             message: "data inserted successfully",
//             data: result.rows[0]
//          })
         
//      }

//      catch(error:any){
//         res.status(500).json({
//             success: false,
//             message: error.message
//         })
//      }

    
// })

// app.get('/users', async(req: Request, res: Response)=>{

//      try{
//             const result = await pool.query(`SELECT  * FROM USERS`);
            
//             res.status(200).json({
//                 success: true,
//                 message: "user retrived successfully",
//                 data: result.rows
//             })

//      }

//      catch(error:any ){
//          res.status(500).json({
//             success: false,
//             message: error.message,
//             details: error,

//          })
//      }
// })

//



// app.get('/users/:id', )



// app.put('/users/:id',)

// app.delete('/users/:id', )

// todos crud
 
app.use('/todos', todoROutes)

// app.post('/todos', )

app.use('/auth', autRoutes);


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

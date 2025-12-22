import express, {Request, Response} from "express"
import { pool } from "../../config/db";
import { controllers } from "./user.controller";
const router = express.Router();


router.post('/', controllers.createUser)

router.get('/', async(req: Request, res: Response)=>{

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




export  const usrRoutes = router;
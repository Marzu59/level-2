import express, {Request, Response} from "express"
import { pool } from "../../config/db";
import { controllers } from "./user.controller";
import looger from "../../config/middleware";
import auth from "../../middleware/auth.middleware";
const router = express.Router();


router.post('/', controllers.createUser)

router.get('/',looger, auth("admin"), controllers.getuser)


router.get('/:id', controllers.singleUser)

router.put('/:id', controllers.updateUSer)

router.delete('/:id', controllers.deleteUser)

export  const usrRoutes = router;
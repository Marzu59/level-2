import express from "express"
import { todoControllers } from "./todo.contollers"

const router = express.Router()


router.post('/', todoControllers.todoPost);



export const todoROutes =  router;
   

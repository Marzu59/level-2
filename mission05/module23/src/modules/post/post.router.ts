import express from "express";
import { postcontroll } from "./post.controller";

const router = express.Router()

router.post('/', postcontroll.createPost);



export  const  postRouter  = router;
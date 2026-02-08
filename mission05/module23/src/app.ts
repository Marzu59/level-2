import  express from "express";
import { postRouter } from "./modules/post/post.router";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from 'cors'
import { commentRouter } from "./comment/comment.route";
import errorHandler from "./middlewaare/globalerrorhandleer";
import { notFound } from "./middlewaare/notFound";

const app = express();

app.use(cors({
    origin: process.env.APP_URL,
    credentials: true
}))

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json())



app.use('/posts', postRouter);

app.use('/comments', commentRouter);

app.get('/', (req, res)=>{
    res.send("server ok")
})
app.use(notFound)
app.use(errorHandler)



export default app;
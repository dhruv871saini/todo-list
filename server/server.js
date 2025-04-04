import express from "express"
import "dotenv/config"
import db from "./config/db.js"
import authRoutes from './routes/authRoute.js'
import taskRoutes from './routes/taskRoutes.js';
import cors from "cors";
import path from 'path'
const _dirname =path.resolve()

const app = express();
app.use(express.json());
const corsOption={
    origin:"https://todo-list-onl4.onrender.com",
    credentials:true
}
app.use(cors(corsOption));

app.use('/api/auth', authRoutes);
app.use('/api', taskRoutes);
const port = process.env.PORT


app.use(express.static(path.join(_dirname, "/client/build")))
app.get("*",(req,res)=>{
  // res.sendFile(path.join(_dirname, "/frontend/dist/index.html"))
  res.sendFile(path.join(_dirname, "client","build","index.html"))
})


app.listen(port,async()=>{
    try {
        await db();
        console.log(`http://localhost:${port}`)

    } catch (error) {
        console.log("SERVER CRASHED :",error)
    }
})

import express from "express"
import "dotenv/config"
import db from "./config/db.js"
import authRoutes from './routes/authRoute.js'
import taskRoutes from './routes/taskRoutes.js';
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api', taskRoutes);
const port = process.env.PORT

app.listen(port,async()=>{
    try {
        await db();
        console.log(`http://localhost:${port}`)

    } catch (error) {
        console.log("SERVER CRASHED :",error)
    }
})

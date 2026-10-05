import express from 'express'
import cors from 'cors'
import 'dotenv/config';
import { connectDB } from './config/db.js';

const app = express();

const PORT = 4000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//db
connectDB();


//routesf
app.get('/',(req,res)=>{
    res.send("API Working");
})

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
})
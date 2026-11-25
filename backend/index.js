import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;


// middleware
app.use(express.json());
app.use(cors());


// routes
app.get("/", (req, res)=>{
    res.send("server is running!")
})


// mongodb connection 
connectDB();


// server start
app.listen(PORT, ()=>{
    console.log(`server is running : ${PORT}`)
})
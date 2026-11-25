import cors from "cors";
import dotenv from "dotenv";
import express from "express";

const PORT = process.env.PORT || 4000;

dotenv.config();
const app = express();


// middleware
app.use(express.json());
app.use(cors());


// routes
app.get("/", (req, res)=>{
    res.send("server is running!")
})


// server start
app.listen(PORT, ()=>{
    console.log(`server is running : ${PORT}`)
})
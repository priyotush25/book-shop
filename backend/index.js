import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
const app = express();
dotenv.config();

import authRoute from "./routes/authRoutes.js";

const PORT = process.env.PORT || 4000;


// middleware
app.use(express.json());
app.use(cors());


// routes
app.get("/", (req, res)=>{
    res.send("server is running!")
})


// Endpoint
app.use("/api/auth", authRoute)




// mongodb connection 
connectDB();


// server start
app.listen(PORT, ()=>{
    console.log(`server is running : ${PORT}`)
})
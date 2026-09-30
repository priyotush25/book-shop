const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();
const authRoutes = require("./routes/authRoutes")
const PORT = process.env.PORT || 4000

const app = express();

app.use(express.json())
app.use(cors())

// MongoDB 
connectDB();

// Route
app.use("api/auth", authRoutes)

// route route
app.get("/", (req, res)=>{
    res.send("Sever is running")
})

app.listen(PORT, ()=>{
    console.log(`server running http://localhost:${PORT}`)
})




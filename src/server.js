const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 4000

const app = express();

app.use(express.json())
app.use(cors())


// route route
app.get("/", (req, res)=>{
    res.send("Sever is running")
})

app.listen(PORT, ()=>{
    console.log(`server running http://localhost:${PORT}`)
})




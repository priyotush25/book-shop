const express = require('express');
const { addBook } = require('../controller/bookController');
const authMiddleware = require("../middleware/authMiddleware")

const router = express.Router();


router.post("/add", authMiddleware, addBook);



module.exports = router;
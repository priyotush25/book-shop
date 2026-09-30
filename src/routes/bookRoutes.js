const express = require('express');
const { addBook, getAllBooks } = require('../controller/bookController');
const authMiddleware = require("../middleware/authMiddleware")

const router = express.Router();

// book add
router.post("/add", authMiddleware, addBook);

// get all books
router.get("/", getAllBooks);



module.exports = router;
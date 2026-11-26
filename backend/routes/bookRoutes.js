import express from 'express';
import {addBook, getAllBooks} from "../controllers/bookController.js";


const router = express.Router();

// Add book endpoint
router.post("/add", addBook);

// Get all books endpoint
router.get("/", getAllBooks);

export default router;
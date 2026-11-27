import express from 'express';
import {addBook, getAllBooks, getBookByAuthor, getBookByCategory, getBookById} from "../controllers/bookController.js";


const router = express.Router();

// Add book endpoint
router.post("/add", addBook);

// Get all books endpoint
router.get("/", getAllBooks);

// Get book by ID endpoint
router.get("/:id", getBookById);

// Get book by category endpoint
router.get("/category/:category", getBookByCategory);

// Get book by author endpoint
router.get("/author/:author", getBookByAuthor);










export default router;

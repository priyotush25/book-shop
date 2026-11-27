import express from 'express';
import {addBook, deleteBook, getAllBooks, getBookByAuthor, getBookByCategory, getBookById, updateBook} from "../controllers/bookController.js";


const router = express.Router();

// Add book endpoint
router.post("/add", addBook);

// Get all books endpoint
router.get("/", getAllBooks);

// Get book by ID endpoint
router.get("/:id", getBookById);

// Update Book endpoint
router.put("/:id", updateBook);

// Delete Book
router.delete("/:id", deleteBook);


// Get book by category endpoint
router.get("/category/:category", getBookByCategory);

// Get book by author endpoint
router.get("/author/:author", getBookByAuthor);

//








export default router;









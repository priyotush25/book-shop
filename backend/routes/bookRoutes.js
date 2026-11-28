import express from 'express';
import { addBook, deleteBook, getAllBooks, getBookByAuthor, getBookByCategory, getBookById, getBookByTitle, getBooksByISBN, getBooksByPrice, getBooksByPublisher, sortBooks, updateBook } from "../controllers/bookController.js";


const router = express.Router();

// Add book endpoint
router.post("/add", addBook);

// Get all books endpoint
router.get("/", getAllBooks);

// sortBooks
router.get("/sort", sortBooks)

// Get book by Price
router.get("/price", getBooksByPrice)


// Get book by category endpoint
router.get("/category/:category", getBookByCategory);

// Get book by author endpoint
router.get("/author/:author", getBookByAuthor);

//Get book by title endpoint
router.get("/title/:title", getBookByTitle);

// Get book by publisher endpoint
router.get("/publisher/:publisher", getBooksByPublisher);


// Get book by ISBN endpoint
router.get("/isbn/:isbn", getBooksByISBN)


// Get book by ID endpoint
router.get("/:id", getBookById);

// Update Book endpoint
router.put("/:id", updateBook);

// Delete Book
router.delete("/:id", deleteBook);





export default router;









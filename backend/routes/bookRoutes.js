import express from "express";

import {
  addBook,
  deleteBook,
  getAllBooks,
  getBookByAuthor,
  getBookByCategory,
  getBookById,
  getBookByTitle,
  getBooksByISBN,
  getBooksByPrice,
  getBooksByPublisher,
  searchBooks,
  sortBooks,
  updateBook,
} from "../controllers/bookController.js";

const router = express.Router();

// Add Book
router.post("/add", addBook);

// Get All Books
router.get("/", getAllBooks);

// Sorting
router.get("/sort", sortBooks);

// Price Filter
router.get("/price", getBooksByPrice);

// Advanced Search
router.get("/search", searchBooks);


// Get Book by Author
router.get("/author/:author", getBookByAuthor);

// Get Book by Title
router.get("/title/:title", getBookByTitle);

// Get Book by Publisher
router.get("/publisher/:publisher", getBooksByPublisher);

// Get Book by ISBN
router.get("/isbn/:isbn", getBooksByISBN);

// Get Book by ID
router.get("/:id", getBookById);

// Update Book
router.put("/:id", updateBook);

// Delete Book
router.delete("/:id", deleteBook);

export default router;

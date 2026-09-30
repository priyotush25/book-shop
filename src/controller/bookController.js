const Book = require("../models/bookModel");


const addBook = async (req, res)=>{
    try{

        const {title, author, price, category, description, image, stock} = req.body;

        if(!title || !author || !price || !category || !image){
            return res.status(400).json({
                message: "Fields ar require"
            })
        }

        
        // create book
        const book = await Book.create({
            title, author, price, category, description, image, stock
        })
        res.status(201).json({
            message: "Add book",
            book,
        })

    }catch(error){
        res.status(500).json({
            message: "Failed to add book",
            error: error.message,
        })
    }

};


// Get all books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();

        res.status(200).json({
            message: "Books fetched successfully",
            count: books.length,
            books: books
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch books"
        });
    }
};




module.exports = {
    addBook,
    getAllBooks,
};
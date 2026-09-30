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

}

module.exports = {
    addBook,
};
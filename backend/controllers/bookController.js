
import Book from "../models/Book.js";


// add book controller
export const addBook = async(req, res)=>{
    try{
        const {title, author, description, price, category, image, ISBN, publisher} = req.body;

        // require
        if(!title || !author || !description || !price || !category || !image || !ISBN || !publisher){
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        // create book
        const book = await Book.create({
            title,
            author,
            description,
            price,
            category,
            image,
            ISBN,
            publisher
        });

        res.status(201).json({
            success: true,
            message: "Book added successfully",
            book
        });



    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// get all books controller
export const getAllBooks = async(req, res) =>{
    try{

        const books = await Book.find();

        if(books.length === 0){
            return res.status(404).json({
                success: false,
                message: "No books found"
            })
        }


        res.status(200).json({
            success: true,
            message: "All books fetched successfully",
            books
        })


    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


// get book by id controller
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Book fetched successfully",
      book
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })

  }
}


// get book by category controller
export const getBookByCategory = async(req, res) => {
  try {
    const {category} = await req.params;

    const book = await Book.find({category});

    if (!book || book.length === 0) {
      res.status(404).json({
        success: false,
        message: "Book not found"
      })
    }

    res.status(200).json({
      success: true,
      message: "Book fetched successfully",
      book
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

// get book by author controller
export const getBookByAuthor = async (req, res) => {
  try {
    const { author } = await req.params;
    const book = await Book.find({ author });

    if (!book || book.length == 0) {
      res.status(404).json({
        success: false,
        message: "Book not found"
      })
    }

    res.status(200).json({
      success: true,
      message: "Book fatech successfully",
      book
    })


  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }

}

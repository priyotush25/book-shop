
import Book from "../models/Book.js";


//Book CRUD Endpoints

// Add Book controller
export const addBook = async (req, res) => {
  try {
    const { title, author, description, price, category, image, ISBN, publisher } = req.body;

    // require
    if (!title || !author || !description || !price || !category || !image || !ISBN || !publisher) {
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

    return res.status(201).json({
      success: true,
      message: "Book added successfully",
      book
    });



  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

// Get all books controller
export const getAllBooks = async (req, res) => {
  try {

    const books = await Book.find();

    if (books.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No books found"
      })
    }


    return res.status(200).json({
      success: true,
      message: "All books fetched successfully",
      books
    })


  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

// Get book by ID controller
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found"
      });
    }

    return res.status(200).json({
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

//Update book controller
export const updateBook = async (req, res) => {
  try {

    const id = await req.params.id;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "book not found"
      })
    }

    for (const key in req.body) {
      if (req.body.hasOwnProperty(key)) {
        book[key] = req.body[key];
      }
    }

    await book.save();

    return res.status(200).json({
      success: true,
      message: "Book update successfully",
      book
    })


  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

// Delete book controller
export const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndDelete(id)

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found"
      })
    }

    return res.status(200).json({
      success: true,
      message: "Book delete successfully"
    })



  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}






// Search & Filter Endpoints//

// Get book by category controller
export const getBookByCategory = async (req, res) => {
  try {
    const { category } = await req.params;

    const book = await Book.find({ category });

    if (!book || book.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Book not found"
      })
    }

    return res.status(200).json({
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
      return res.status(404).json({
        success: false,
        message: "Book not found"
      })
    }

    return res.status(200).json({
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


// Search Books by Title
export const getBookByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const book = await Book.find({ title });

    if (!book || book.length === 0) {
      return res.status(404).json(
        {
          success: false,
          message: "Book not found"
        }
      )
    }

    return res.status(200).json({
      success: true,
      message: "book found successfully",
      book
    })



  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}


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
    const book = await Book.find({
      title: {
        $regex: title,
        $option: "i"
      }
    });

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

// Get Books by Publisher
export const getBooksByPublisher = async (req, res) => {
  try {

    const { publisher } = req.params;
    const book = await Book.find({
      publisher: {
        $regex: publisher,
        $options: "i"
      }
    })

    if (!book || book.length === 0) {
      return res.status(404).json({
        success: false,
        message: "book not found"
      })
    }

    return res.status(200).json({
      success: true,
      message: "get book successfully",
      book
    })



  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}


// Get Book by ISBN
export const getBooksByISBN = async (req, res) => {
  try {
    const { isbn } = req.params;
    const book = await Book.find({ ISBN: isbn });

    if (!book || book.length === 0) {
      return res.status(404).json({
        success: false,
        message: "book not found"
      })
    }

    res.status(200).json({
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


// Get Books by Price Range
export const getBooksByPrice = async (req, res) => {
  try {
    const { minPrice, maxPrice } = req.body;

    // Convert String to Number
    const min = Number(minPrice);
    const max = Number(maxPrice);

    // Validation
    if (
      minPrice === undefined ||
      maxPrice === undefined ||
      !Number.isFinite(min) ||
      !Number.isFinite(max) ||
      min < 0 ||
      max < min
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid price range"
      });
    }

    // Find Books
    const books = await Book.find({
      price: {
        $gte: min,
        $lte: max
      }
    });

    // Check Books
    if (books.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No books found in this price range"
      });
    }

    // Success Response
    return res.status(200).json({
      success: true,
      message: "Books found successfully",
      totalBooks: books.length,
      books
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

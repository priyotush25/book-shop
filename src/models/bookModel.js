const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        author: {
            type: String,
            required: true,
            trim: true,
        },

        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },

        description: {
            type: String,
        },
        image: {
            type: String,
        },

        stock: {
            type: Number,
            default: 0,
        },

    },

    {
        timestamps: true,
    }
)


const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
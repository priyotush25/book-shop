import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
   description: {
    type: String,
    
   },
   price: {
    type: Number,
    required: true, 
   },
   category: {
    type: String,
    required: true,
   },
   image: {
    type: String,
    required: true,
   },
   ISBN: {
    type: String,
    required: true,
   },
   publisher: {
    type: String,
    required: true, 
   }

}, { 
    timestamps: true
 });

const Book = mongoose.model("Book", bookSchema);
export default Book;
// Import the Mongoose module
const mongoose = require('mongoose');

// Define the Book schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        enum: ['novel', 'mystery', 'thriller'],
        required: true
    },
    year_published: {
        type: Number,
        required: true
    }
});

// Create the Book model from the schema
const Book = mongoose.model('Book', bookSchema);

// Export the Book model
module.exports = Book;

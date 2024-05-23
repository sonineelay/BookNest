// Import the Mongoose module
const mongoose = require('mongoose');

// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/bookNest';

// Connect to MongoDB using the URL
mongoose.connect(mongoURL);

// Store the connection in a variable
const db = mongoose.connection;

// Export the connection
module.exports = db;

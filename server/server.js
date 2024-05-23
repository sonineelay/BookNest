// Import Express and create an Express application
const express = require('express');
const app = express();

// Import the database connection
const db = require('./db');

// Import body-parser and configure middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Import and use the book routes as middleware
const bookRoutes = require('./routes/bookRoutes');
app.use('/books', bookRoutes);

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
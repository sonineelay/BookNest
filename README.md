# BookNest - Book Management System

BookNest is a web application for managing books using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## Features

- Add, view, update, and delete books
- Search and filter books by title, author, genre, and year published
- Responsive design for mobile and desktop devices

## Installation

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB Atlas account (or local MongoDB server) for database storage

### Setup Instructions

1. Clone the repository:

   ```
   git clone https://github.com/sonineelay/BookNest.git
   ```

2. Navigate to the project directory:

   ```
   cd BookNest
   ```

3. Install server dependencies:

   ```
   cd server
   npm install
   ```

4. Install client dependencies:

   ```
   cd ..
   cd interface
   npm install
   ```

5. Run the server:

   ```
   cd ..
   cd server
   npm run start
   ```

6. Run the client:

   ```
   cd ..
   cd interface
   npm run dev
   ```

7. Open your web browser and navigate to `http://localhost:3000` to access the BookNest API.
8. Open your web browser and navigate to `http://localhost:5173/` to access the BookNest WebApp.

## Usage

- To add a book, click on the "Add Book" button and fill in the required details.
- To view, update, or delete a book, click on the respective buttons next to the book entry.
- Going From Light Mode To Dark Mode Clicking a Single Button

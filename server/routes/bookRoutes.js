// Import Express and create router 
const express = require('express');
const router = express.Router();

// Import the Book Model 
const Book = require('../models/book')

// Getting List of all the books
router.get('/',async (req,res)=>{
     try{
          
          const data = await Book.find();

          res.status(200).json(data);
     }
     catch(err){
          console.log(err);
          res.status(500).json({error: 'Internal Server Error'});
     }
})

// Getting Specific books Details
router.get('/:id',async (req,res)=>{
     try{
          const bookId = req.params.id;

          const book = await Book.findById(bookId);

          res.status(200).json(book);
     }
     catch(err){
          console.log(err);
          res.status(500).json({error: 'Internal Server Error'});
     }
})

// Adding New Book
router.post('/',async (req,res)=>{
     try{
      
          const data = req.body;
      
          const newBook = new Book(data);

          const response = await newBook.save();

          res.status(200).json({success: 'book added successfully'})

     }catch(err){
          console.log(err);
          res.status(500).json({error: 'Internal Server Error'});
     }
})

// Updating Book By ID
router.put('/:id',async (req,res)=>{
     try{
          const bookId = req.params.id
          const updatedData = req.body;
      
          const updatedBook = await Book.findByIdAndUpdate(bookId,updatedData,{
               new : true, 
               runValidators : true,
          });

          if (!updatedBook){
               res.status(404).json({error: 'book not found'})
          }

          res.status(200).json({success: 'book updated successfully'})

     }catch(err){
          console.log(err);
          res.status(500).json({error: 'Internal Server Error'});
     }
})

// Deleting Book By ID
router.delete('/:id',async (req,res)=>{
     try{
          const bookId = req.params.id
      
          const deletedBook = await Book.findByIdAndDelete(bookId);

          if (!deletedBook){
               res.status(404).json({error: 'book not found'})
          }

          res.status(200).json({success: 'book deleted successfully'})

     }catch(err){
          console.log(err);
          res.status(500).json({error: 'Internal Server Error'});
     }
})

// Exporting Router
module.exports = router
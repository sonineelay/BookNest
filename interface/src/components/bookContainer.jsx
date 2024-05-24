import React, { useState, useEffect } from "react";
import BookCard from "./book";
import $ from "jquery";

import notFound from "../assets/no_items.gif";

function NotFOUND() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center ">
      <img src={notFound} alt="Not Found" width="300" />
    </div>
  );
}

function BooksContainer({ book_list }) {
  const [_id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [verificationTitle, setVerificationTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [yearPublished, setYearPublished] = useState("");

  //Fetching Existing Book Data
  const updateBook = (_id) => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/books/" + _id);
        if (!response.ok) {
          throw new Error("Failed to fetch book ");
        }
        const data = await response.json();
        setId(data._id);
        setTitle(data.title);
        setAuthor(data.author);
        setGenre(data.genre);
        setYearPublished(data.year_published);
      } catch (err) {
        console.error("Error fetching books:", err);
      }
    };

    fetchData();
  };

  const deleteBook = (_id) => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/books/" + _id);
        if (!response.ok) {
          throw new Error("Failed to fetch book ");
        }
        const data = await response.json();
        setId(data._id);
        setTitle(data.title);
        setAuthor(data.author);
        setGenre(data.genre);
        setYearPublished(data.year_published);
      } catch (err) {
        console.error("Error fetching books:", err);
      }
    };

    fetchData();
  };
  //Updating Book Data
  const handleUpdateBook = async (event) => {
    event.preventDefault();

    const updatedBookData = {
      title,
      author,
      genre,
      year_published: yearPublished,
    };

    try {
      const response = await fetch(`http://localhost:3000/books/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBookData),
      });

      if (response.ok) {
        // Handle successful response
        console.log("Book updated successfully!");
        // Optionally, close the modal
        $("#updateClosingBTN").click();
      } else {
        // Handle errors
        console.error("Failed to update book.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDeleteBook = async (event) => {
    event.preventDefault();
    if (verificationTitle === title) {
      try {
        const response = await fetch(`http://localhost:3000/books/${_id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          // Handle successful response
          console.log("Book deleted successfully successfully!");
          // Optionally, close the modal
          $("#deleteClosingBtn").click();
        } else {
          // Handle errors
          console.error("Failed to update book.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.log("Please Enter Same Title");
    }
  };
  return (
    <>
      <div className="container-fluid main-screen pt-2">
      {book_list.length === 0 && <NotFOUND />}
        <div className="row">
          {book_list.map((book) => (
            <BookCard
              key={book._id}
              bookData={book}
              updateBook={() => {
                updateBook(book._id);
              }}
              deleteBook={() => {
                deleteBook(book._id);
              }}
            />
          ))}
        </div>
      </div>

      {/* Update Modal */}
      <div
        className="modal fade"
        id="updateModal"
        tabIndex="-1"
        aria-labelledby="updateModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="updateModalLabel">
                Update Book
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="updateClosingBTN"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleUpdateBook}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter book title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="author" className="form-label">
                    Author
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    placeholder="Enter author name"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="genre" className="form-label">
                    Genre
                  </label>
                  <select
                    className="form-select"
                    id="genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                  >
                    <option value="">Select Genre</option>
                    <option value="novel">Novel</option>
                    <option value="mystery">Mystery</option>
                    <option value="thriller">Thriller</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="year_published" className="form-label">
                    Year Published
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="year_published"
                    placeholder="Enter year of publication"
                    value={yearPublished}
                    onChange={(e) => setYearPublished(e.target.value)}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Update Book
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">
                Delete Book
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="deleteClosingBtn"
              ></button>
            </div>
            <form onSubmit={handleDeleteBook}>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Enter <q className="fw-bold code">{title}</q> and click
                    delete to delete the book
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter book title"
                    onChange={(e) => setVerificationTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-danger">
                  Delete Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default BooksContainer;

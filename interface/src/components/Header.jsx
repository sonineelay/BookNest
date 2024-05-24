import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import $ from "jquery";
import { BsMoon, BsSun } from "react-icons/bs"; // Import icons from react-icons library

function HeaderBar() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [yearPublished, setYearPublished] = useState("");

  const handleAddBook = async (event) => {
    event.preventDefault();

    const bookData = {
      title,
      author,
      genre,
      year_published: yearPublished,
    };

    try {
      const response = await fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });

      if (response.ok) {
        // Handle successful response
        console.log("Book added successfully!");
        // Optionally, reset the form or close the modal
        // Reset the form
        setTitle("");
        setAuthor("");
        setGenre("");
        setYearPublished("");
        // Close the modal
        $("#closingBTN").click();
      } else {
        // Handle errors
        console.error("Failed to add book.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-bs-theme");
    if (currentTheme === "dark") {
      document.documentElement.setAttribute("data-bs-theme", "");
    } else {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    }
  };

  return (
    <>
      <div className="title-bar container-fluid">
        <div className="container-fluid title-head">
          <h1 className="d-inline-block">
            BookNest
            <span className="d-lg-inline-block d-none">
              : Book Management Store
            </span>
          </h1>

          <div className="">
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn d-inline-block btn btn-outline-warning btn-lg"
            >
              {document.documentElement.getAttribute("data-bs-theme") ===
              "dark" ? (
                <BsSun />
              ) : (
                <BsMoon />
              )}
            </button>
            <button
              type="button"
              className="btn btn-outline-info btn-lg"
              data-bs-toggle="modal"
              data-bs-target="#bookModal"
            >
              <FiPlus />{" "}
              <span className="d-lg-inline-block d-none">Add Book</span>
            </button>
          </div>
        </div>
      </div>
      <div className="seperator"></div>

      <div
        className="modal fade"
        id="bookModal"
        tabIndex="-1"
        aria-labelledby="bookModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="bookModalLabel">
                Book Details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="closingBTN"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddBook}>
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
                    Add Book
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderBar;

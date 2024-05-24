import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const BookCard = ({ bookData, deleteBook, updateBook }) => {
  return (
    <div className="col-xl-3 col-lg-6 col-md-6 mb-3">
      <div className="card">
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{bookData.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Author: {bookData.author}
            </h6>
            <p className="card-text">Genre: {bookData.genre}</p>
            <p className="card-text">
              Published Year: {bookData.year_published}
            </p>
          </div>
          <div className="d-flex">
            <button
              className="floating-btn btn-update btn btn-outline-primary"
              data-bs-toggle="modal"
              data-bs-target="#updateModal"
              onClick={() => updateBook()}
            >
              <FaEdit />
            </button>
            <button
              className="floating-btn btn-delete btn btn-outline-danger  "
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
              onClick={() => {
                deleteBook();
              }}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

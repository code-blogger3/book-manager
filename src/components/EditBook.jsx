import React, { useContext } from "react";
import BookForm from "./form/BookForm";
import { BookContext } from "../context/BookContext";
import { useNavigate, useParams } from "react-router-dom";

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books, setBooks } = useContext(BookContext);

  const bookToEdit = books.filter((book) => book.id === id);

  const handleOnSubmit = (book) => {
    const filteredBook = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBook]);
    navigate("/");
  };

  return (
    <div className="addForm">
      <BookForm book={bookToEdit[0]} handleSumbit={handleOnSubmit} />
    </div>
  );
}

export default EditBook;

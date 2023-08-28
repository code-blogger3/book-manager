import React, { useContext } from "react";
import BookForm from "./form/BookForm";
import { BookContext } from "../context/BookContext";
import { useNavigate } from "react-router-dom";

function Addbook() {
  const navigate = useNavigate();
  const { books, setBooks } = useContext(BookContext);
  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    navigate("/");
  };

  return (
    <div className="addForm">
      <BookForm handleSumbit={handleOnSubmit} />
    </div>
  );
}

export default Addbook;

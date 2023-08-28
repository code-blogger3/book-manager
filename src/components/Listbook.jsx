import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import Book from "./Book";

function Listbook() {
  const { books, setBooks } = useContext(BookContext);
  const handleRemoveBook = (id) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks(filteredBooks);
  };

  return (
    <div className="listBook">
      {books.length ? (
        books.map((book) => (
          <div key={book.id}>
            <h1>
              <Book
                book={book}
                key={book.id}
                handleRemoveBook={handleRemoveBook}
              />
            </h1>
          </div>
        ))
      ) : (
        <p className="noData">No book</p>
      )}
    </div>
  );
}

export default Listbook;

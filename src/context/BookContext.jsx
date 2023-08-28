import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const BookContext = createContext();

function BookProvider({ children }) {
  const [books, setBooks] = useLocalStorage("books", []);
  const value = { books, setBooks };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}

export default BookProvider;

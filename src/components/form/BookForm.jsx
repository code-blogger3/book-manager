import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const BookForm = ({ book, handleSumbit }) => {
  const [bookState, setBookState] = useState({
    name: book ? book.name : "",
    author: book ? book.author : "",
    price: book ? book.price : "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    handleSumbit({
      id: uuidv4(),
      date: new Date(),
      ...bookState,
    });
    setBookState({ name: "", price: "", author: "" });
  };

  const handleChange = (e) => {
    setBookState({
      ...bookState,
      [e.target.name]: e.target.value,
    });
  };

  const renderInputField = (label, placeholder, name) => (
    <div className="inputField">
      <label>{label}</label>
      <input
        type="text"
        value={bookState[name]}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );

  const disabledSubmit =
    !bookState.name || !bookState.author || !bookState.price;

  return (
    <form onSubmit={onSubmit} className="form">
      {renderInputField("book Name", "Enter name of book...", "name")}
      {renderInputField("book Author", "Enter name of author...", "author")}
      {renderInputField("book Price", "Enter name of price...", "price")}
      <button type="submit" className="btnForm" disabled={disabledSubmit}>
        {book ? "Update" : "Submit"}
      </button>
    </form>
  );
};

export default BookForm;

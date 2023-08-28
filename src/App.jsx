import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Listbook from "./components/Listbook";
import Addbook from "./components/Addbook";
import BookProvider from "./context/BookContext";
import EditBook from "./components/EditBook";

function App() {
  return (
    <>
      <div className="container">
        <BookProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Listbook />} />
            <Route path="/add" element={<Addbook />} />
            <Route path="/edit/:id" element={<EditBook />} />
          </Routes>
        </BookProvider>
      </div>
    </>
  );
}

export default App;

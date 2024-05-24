import BooksContainer from "./components/bookContainer";
import HeaderBar from "./components/Header";
import { useState } from "react";

function App() {
  const [booksList, setBooksList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/books");
      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }
      const data = await response.json();
      setBooksList(data);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  fetchData();

  return (
    <>
      <HeaderBar />
      <BooksContainer book_list={booksList} />
    </>
  );
}

export default App;

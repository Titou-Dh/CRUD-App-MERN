import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./../index.css";

function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/books").then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 px-52 py-16">
      {books.map((book) => {
        return (
          <div key={book.id} className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {book.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              By: {book.author}
            </p>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Year of release: {book.year}
            </p>
            <div className="gap-2">
              <Link to={`/${book.id}`} className="bg-red-600 border border-gray-200 rounded-lg shadow dark:border-gray-700 px-6 w-1/2 py-2 text-lg font-semibold">Delete</Link>
              <Link to={`/${book.id}`} className="bg-blue-600 border border-gray-200 rounded-lg shadow dark:border-gray-700 px-6 w-1/2 py-2 text-lg font-semibold">Modify</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Books;

import { useState, useEffect } from "react";
import Axios from "axios";
import "./../index.css";
import { Link } from "react-router-dom";

function Books() {
  //   const [hidden, setHidden] = useState(true);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/books").then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <div className="">
      <div className="text-center pt-20">
        <Link
          to="books/add"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </Link>
      </div>
      <div className="grid xl:grid-cols-3 md:px-16 md:grid-cols-2 sm:grid-cols-1 sm:px-10 gap-4 xl:px-52 py-16">
        {books.map((book) => {
          return (
            <div
              key={book.id}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
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
                <Link
                  to={`http://localhost:3001/books/delete/${book._id}`}
                  className="bg-red-600 text-white border border-gray-200 rounded-lg shadow dark:border-gray-700 px-6 w-1/2 py-2 text-lg font-semibold"
                  // onClick={() => setHidden(false)}
                >
                  Delete
                </Link>
                <Link
                  to={`http://localhost:3001/books/modify/${book._id}`}
                  className="bg-blue-600 text-white border border-gray-200 rounded-lg shadow dark:border-gray-700 px-6 w-1/2 py-2 text-lg font-semibold"
                >
                  Modify
                </Link>
              </div>
              {/* {hidden ? null : <Modal book={book} setHidden={setHidden} hidden={hidden} />} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Books;

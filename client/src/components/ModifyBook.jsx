import { useState, useEffect } from "react";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";

function ModifyBook() {
  const { id } = useParams(); // Extract the book ID from the URL parameter
  const [name, setName] = useState("");
  const [book, setBook] = useState({});
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  // Fetch the book data from the server based on its ID
  useEffect(() => {
    Axios.get(`http://localhost:3001/books/${id}`)
      .then((res) => {
        setBook(res.data)
      })
      .catch((error) => {
        console.error("Error fetching book:", error);
      });
  }, [id]);

  // Handler function to update the book information
  const handleUpdate = () => {
    Axios.put(`http://localhost:3001/books/${id}`, {
      name,
      author,
      year,
    })
      .then((res) => {
        console.log("Book updated successfully:", res.data);
        // Optionally, redirect to the main menu or display a success message
      })
      .catch((error) => {
        console.error("Error updating book:", error);
        // Handle error
      });
  };

  return (
    <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-main ">
      <div className="xl:w-1/3 sm:w-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
        <div className="  flex justify-end">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 384 512"
              className="w-5 cursor-pointer "
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </Link>
        </div>

        <form className="max-w-md mx-auto">
          <h2 className="font-bold text-white text-2xl text-center">
            Add New Book
          </h2>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="title"
              id="title"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label
              htmlFor="title"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Title
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="auth"
              id="auth"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={book.author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <label
              htmlFor="auth"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Author
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="year"
              id="year"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={book.year}
              onChange={(e) => setYear(e.target.value)}
            />
            <label
              htmlFor="year"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Released year
            </label>
          </div>
          <div className="text-center flex items-center justify-center gap-2">
            <button
              type="submit"
              onClick={handleUpdate}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            <Link
              to="/"
              className="text-white bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-4 text-center"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
    // <div className="container">
    //   <h2>Modify Book</h2>
    //   <form>
    //     <div>
    //       <label>Name:</label>
    //       <input
    //         type="text"
    //         name="name"
    //         value={book.name}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div>
    //       <label>Author:</label>
    //       <input
    //         type="text"
    //         name="author"
    //         value={book.author}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div>
    //       <label>Year:</label>
    //       <input
    //         type="text"
    //         name="year"
    //         value={book.year}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <button type="button" onClick={handleUpdate}>
    //       Update
    //     </button>
    //     <Link to="/">Cancel</Link>
    //   </form>
    // </div>
  );
}

export default ModifyBook;
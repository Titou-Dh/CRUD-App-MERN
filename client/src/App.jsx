import { useState, useEffect} from 'react'
import Axios from "axios";

export default function App() {
  const [books, setBooks] = useState([])
  useEffect(()=>{
    Axios.get("http://localhost:3001/books").then(res =>{
      setBooks(res.data)
  })
  },[])

  

  return (
    <>
      {
      books.map(book =>{
        return(
          <div key={book.index} className="book">
            <ul>
              <li>Name : {book.name} </li>
              <li>Writer: {book.author} </li>
              <li>year of release: {book.year} </li>
            </ul>
          </div>
        )
      })
    }
    </>
  )
}



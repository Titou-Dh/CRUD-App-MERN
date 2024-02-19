const express = require("express")
const app = express()
const cors = require('cors');
app.use(express.json());
app.use(cors());

const mdb = require("mongoose")
mdb.connect("mongodb+srv://titoudh:99793434@cluster0.kf0adfq.mongodb.net/crud-app?retryWrites=true&w=majority")

const bookModel = require("./models/books")



app.get("/books", async (req, res) => {
    const books = await bookModel.find();
    res.json(books)
})


// app.post("/createBook", async (req, res) => {
//     const book =req.body
//     if (!book.name || !book.author || !book.year) {
//         return res.status(400).json({ message: "Please provide name, author, and year for the book." });
//     }

//     try {
//         const newBook = await bookModel.create(book);
//         res.status(201).json(newBook);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });


app.post("/createBook", async (req,res)=>{
    const book =req.body;
    const newBook = new bookModel(book);
    await newBook.save();
    res.json(req.body)
})


app.listen("3001", () => {
    console.log("server works")
})




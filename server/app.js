const express = require("express")
const app = express()


const mdb = require("mongoose")
mdb.connect("mongodb+srv://titoudh:99793434@cluster0.kf0adfq.mongodb.net/crud-app?retryWrites=true&w=majority")

const bookModel = require("./models/books")



app.get("/books",async (req,res)=>{
    const books = await bookModel.find();
    res.json(books)
})


app.listen("3001",()=>{
    console.log("server works")
})
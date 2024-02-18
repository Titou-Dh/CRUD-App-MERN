const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    name :{
        type:String,
    },
    author :{
        type:String,
    },
    year :{
        type:Number,
    },
})

const bookModel = mongoose.model("books",bookSchema)

module.exports = bookModel
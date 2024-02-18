const mongoose = require("mongoose")
const { v4: uuidv4 } = require('uuid');


const bookSchema = new mongoose.Schema({
    _id:{
        type:String,
        default: uuidv4,
    },
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
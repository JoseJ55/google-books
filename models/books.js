const mongoose = require("mongoose");

const googleBooksSchema = new mongoose.Schema({
    bookId: {
        type: String,
        required: true
    },
    authors: {
        type: [String]
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
    },
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("googleBooks", googleBooksSchema)
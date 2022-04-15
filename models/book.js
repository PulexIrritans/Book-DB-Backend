const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: { type: String, required: true},
  isbn: {type: String, required: true},
  author: {type: String, required: true},
  description: {type: String, default: ""},
  published_date: {type: String, required: true},
  number_of_pages: {type: Number, default: null},
  publisher: {type: String, required: true},
});

module.exports = mongoose.model("book", bookSchema);
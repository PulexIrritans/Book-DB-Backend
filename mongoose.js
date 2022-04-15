const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: String,
  isbn: String,
  author: String,
  description: String,
  published_date: String,
  number_of_pages: Number,
  publisher: String,
});

const Book = mongoose.model("book", bookSchema);

mongoose.connect("mongodb://localhost:27017/bookexercise").then(() => {
  console.log("connected");
  Book.find({}).then((data) => {
    console.log(data);
    process.exit();
  });
});
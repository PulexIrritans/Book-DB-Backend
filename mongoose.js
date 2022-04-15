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

mongoose.connect("mongodb://localhost:27017/booksexercise").then(() => {
  console.log("connected");

// get all books back  
//   Book.find({}).then((data) => {
//     console.log(data);
//     process.exit();
//   });


// get a book by id
// Book.findById("62592c3f1cdb4f29ded3d675").then((data) => {
//     console.log(data);
//     process.exit()
// });

// create a book and save in the database
// const newBook = Book({
//   title: "Rebellinnen",
//   isbn: "3-88619-230-X",
//   author: "Gillian G. Gaar",
//   description: "Die Geschichte der Frauen in der Rockmusik",
//   published_date: "1992-01-01T23:00:00:000Z",
//   number_of_pages: 462,
//   publisher: "Argument",
// })

// newBook.save().then((data) => {
//     console.log(data);
//     process.exit();
// })

// delete a book
// delete a student

Book.findByIdAndDelete("6259352f8f2f8081abdf851d").then((data) => {
    console.log(data);
    process.exit();
  });
});

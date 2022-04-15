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
// });

// get a book by id
Book.findById("62592c3f1cdb4f29ded3d675").then((data) => {
    console.log(data);
    process.exit()
});
});

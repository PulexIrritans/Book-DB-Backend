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

const Book = mongoose.model("book", bookSchema);

mongoose.connect("mongodb://localhost:27017/booksexercise").then(() => {
  console.log("connected");

// get all books back  
//   Book.find({}).then((data) => {
//     console.log(data);
//     process.exit();
//   });


// get a book by id
Book.findById("ffwe3453453456hjt5k4l3").then((data) => {
    console.log(data);
    process.exit()
})
.catch((error) => {
    console.log("ERROR");
    process.exit()
});

// create a book and save in the database
// const newBook = Book({
//   title: "Agiles Projektmanagement",
//   isbn: "978-3-648-06517-4",
//   author: "Jörg Preußig",
//   published_date: "2015-01-01T23:00:00:000Z",
//   publisher: "Haufe",
// })

// newBook.save().then((data) => {
//     console.log(data);
//     process.exit();
// })

// delete a book

// Book.findByIdAndDelete("62593970629a95cca86c91be").then((data) => {
//     console.log(data);
//     process.exit();
//   });
});

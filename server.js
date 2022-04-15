const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')

const Book = require("./models/book.js")

const app = express();
const port = 3050;

mongoose.connect("mongodb://localhost:27017/booksexercise")

app.use(express.json());
app.use(cors())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res, next) => {
    Book.find({}).then((data) => {
        res.send(data);
    })
    .catch(() => {
        next()
    });
});

app.get("/:id", (req, res, next) => {
    const id = req.params.id;
    Book.findById(id).then((data) => {
        res.send(data);
    })
    .catch(() => {
        next() //This will move on to default error message if defined.
    //Could also be done manually as follows:
    //  .catch((error) => {
    //    res.status(400).send({error: error.message});    
    });
});

app.post("/", (req, res, next) => {
  const title = req.body.title;
  const isbn = req.body.isbn;
  const author = req.body.author;
  const description = req.body.description;
  const published_date = req.body.published_date;
  const number_of_pages = req.body.number_of_pages;
  const publisher = req.body.publisher;

  const newBook = Book({title, isbn, author, description, published_date, number_of_pages, publisher})
  newBook
  .save()
  .then((data) => {
      res.status(201).send(data);
  })
  .catch((error) => {
      res.status(400).json({error: error.message})
  });
});

app.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    Book.findByIdAndDelete(id)
    .then((data) => {
        res.status(200).send(data);
    })
    .catch(() => {
        next()
    })
})

app.patch("/:id", (req, res, next) => {
    const id = req.params.id;
    const updatedObject = req.body;
    Book.findByIdAndUpdate(id, {...updatedObject}, {new: true})
    .then((data) => {
        res.status(200).send(data);
    })
    .catch(() => {
        next()
    })
})

// Default error message.
app.use((req, res, nex) => {
    res.status(400).send("OH BOY, AN ERROR OCCURED")
});

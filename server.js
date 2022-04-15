const express = require("express");
const mongoose = require("mongoose");

const Book = require("./models/book.js")

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/booksexercise")

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
        next()
    });
});

This is a description of how I moved forward with the exercise using brief notes and highlighting my learnings.

# Created a project folder for the bookserxercise backend

added standard config files,
installed mongoose
created book schema
created db using mongosh
created first example book using mongosh
checked if it's possible to find the example book in the db and print it to the console

# Adding CRUD methods via mongoose
The __v in MongoDB is only added when adding an element through mongoose but not for the element that was added via mongosh - why is this?

# Making the Schema type-save
Means that I explicitly define what values are required for setting up a new item and what default values might be.
I decided to use "null" for no given pages and empty string for description. What is the best practice here if there is no sensible default value.
Inserted basic error handling for find by id.

# Install express
Copy basic express server setup from express docs used for establishing express server.

# Set up all requests routes with express
If you want to send back the complete current array after a POST request you have to "find" all db entries for collection and send these data back.




# Conclusion - Ideas for quicker workflow and more open questions to workflow
When setting up the schema also make it type safe immediatly.
You can define the request handling directly in express - no need to first do it outside of express.

Whatever db you provide here, it will be set up automatically in the mongodb if not already existent: mongoose.connect("mongodb://localhost:27017/yourdb")

Also the collection will be automatically created. Be sure to name the collection in singular, mongoDB will change it plural automatically always!

Also check, these are very important to have:
const express = require("express");
const mongoose = require("mongoose");

const Book = require("./models/book.js")

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/booksexercise")

app.use(express.json()); ----> This here is needed so that json POST requests can be handled!!!

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

Question: When should we think about error handling? Could we set up only the happy case first and take care of error handling only later when the happy cases work fine or should it be taken care of directly?

Question: What could be a use case for one default error message, normally we would be more explicit with errors, right?

Question: Handling date formats (where Frontend/ backend and how to convert them to consistent format)


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




# Conclusion - Ideas for quicker workflow and more open questions to workflow
When setting up the schema also make it type safe immediatly.
Question: When should we think about error handling? Could we set up only the happy case first and take care of error handling only later when the happy cases work fine or should it be taken care of directly?


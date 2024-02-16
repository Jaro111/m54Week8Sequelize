const { Router } = require("express");
const bookRouter = Router();

const {
  addBook,
  getBooks,
  deleteByTitle,
  getByTitle,
  deleteAll,
  updateOnTitle,
} = require("./controller.js");
const Book = require("./model.js");

// add book
// In the body:
// {
//   "title": "<book title>",
//   "AuthorId": "<author id number>",
//   "GenreId": "<genre id number>"
// }
bookRouter.post("/books/addBook", addBook);

// get all books
// No body
bookRouter.get("/books/getBooks", getBooks);

// delete a single book by title
// In the body: {"toDelete": "<book title>"}
bookRouter.delete("/books/deleteByTitle", deleteByTitle);

// deletes all books
// No body
bookRouter.delete("/books/deleteAll", deleteAll);

// gets a book by title
// /books/getBookByTitle/<book title>
bookRouter.get("/books/getBookByTitle/:title", getByTitle);

// dynamically updates a book on title
// /books/updateOnTitle/<book title>/<what we want to update>/<update>

// book title - title of the book to update
// what we want to update - choice between title || author || genre
// update - type update
bookRouter.put("/books/updateOnTitle/:title/:toUpdate/:updated", updateOnTitle);

module.exports = bookRouter;

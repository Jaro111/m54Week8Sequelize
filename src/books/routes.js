const { Router } = require("express");
const bookRouter = Router();

const {
  addBook,
  getBooks,
  updateAuthor,
  deleteByAuthor,
  // getByAuthor,
  deleteAll,
  // updateOnTitle,
} = require("./controller.js");
const Book = require("./model.js");

// add book

bookRouter.post("/books/addBook", addBook);

// get all books

bookRouter.get("/books/getBooks", getBooks);

// update book author

bookRouter.put("/books/updateAthor", updateAuthor);

// delete a single book by title

bookRouter.delete("/books/deleteByAuthor", deleteByAuthor);

// deletes all books
bookRouter.delete("/books/deleteAll", deleteAll);

// // gets a book by author
// bookRouter.get("/books/getBookByAuthor/:author", getByAuthor);

// // dynamically updates a book on title
// bookRouter.put("/books/updateOnTitle/:title/:toUpdate/:updated", updateOnTitle);

module.exports = bookRouter;

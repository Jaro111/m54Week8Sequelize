const { Router } = require("express");
const authorRouter = Router();

const {
  addAuthor,
  getAuthors,
  getByAuthor,
  deleteByAuthor,
} = require("./controller");

// Author Routes

// POST - create new author
authorRouter.post("/authors/addAuthor", addAuthor);

// GET - get new Author
authorRouter.get("/authors/getAuthors", getAuthors);

// gets a book by author
authorRouter.get("/authors/getBookByAuthor/:author", getByAuthor);

// delete a single book by author
authorRouter.delete("/authors/deleteByAuthor", deleteByAuthor);

module.exports = authorRouter;

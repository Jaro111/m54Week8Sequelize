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
// In the body:  {"authorname": "<type author name>"}
authorRouter.post("/authors/addAuthor", addAuthor);

// GET - get new Author
// No body
authorRouter.get("/authors/getAuthors", getAuthors);

// gets a book by author
// /authors/getBookByAuthor/<author>
// author - by auhor name
authorRouter.get("/authors/getBookByAuthor/:author", getByAuthor);

// delete a single book by author
// In the body: {"toDelete": "<type author name to delete>"}
authorRouter.delete("/authors/deleteByAuthor", deleteByAuthor);

module.exports = authorRouter;

const { Router } = require("express");
const genreRouter = Router();

const { addGenre, getAllGenres, getByGenre } = require("./controller");

// Genre Routes

// POST - create a genre
//  in the body: {"genrename": "<type genre name>"}
genreRouter.post("/genres/addGenre", addGenre);

// GET - get all genres
// No body
genreRouter.get("/genres/getAllGenres", getAllGenres);

// get book by genre
// /books/getBookByGenre/<genre>
// genre - by genre name

genreRouter.get("/books/getBookByGenre/:genre", getByGenre);

module.exports = genreRouter;

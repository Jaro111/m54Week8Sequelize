const { Router } = require("express");
const genreRouter = Router();

const { addGenre, getAllGenres, getByGenre } = require("./controller");

// Genre Routes

// POST - create a genre
genreRouter.post("/genres/addGenre", addGenre);

// GET - get all genres
genreRouter.get("/genres/getAllGenres", getAllGenres);

// get book by genre
genreRouter.get("/books/getBookByGenre/:genre", getByGenre);

module.exports = genreRouter;

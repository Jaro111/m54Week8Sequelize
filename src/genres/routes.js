const { Router } = require("express");
const genreRouter = Router();

const { addGenre, getAllGenres } = require("./controller");

// Genre Routes

// POST - create a genre

genreRouter.post("/genres/addGenre", addGenre);
// GET - get all genres
genreRouter.get("/genres/getAllGenres", getAllGenres);

module.exports = genreRouter;

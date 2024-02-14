const Genre = require("./model");

// addGenre

const addGenre = async (req, res) => {
  try {
    const genre = await Genre.create({
      genreName: req.body.genrename,
    });
    res
      .status(201)
      .json({ message: `${req.body.genrename} was added`, genre: genre });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

// getAllGenres

const getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll();
    res.status(201).json({ message: `Genres uploaded`, genres: genres });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

module.exports = {
  addGenre: addGenre,
  getAllGenres: getAllGenres,
};

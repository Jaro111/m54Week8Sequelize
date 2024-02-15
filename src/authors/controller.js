const Author = require("./model");
const Book = require("../books/model");
const Genre = require("../genres/model");

// addAuthor

const addAuthor = async (req, res) => {
  try {
    const author = await Author.create({
      authorName: req.body.authorname,
    });
    res
      .status(201)
      .json({ message: `${req.body.authorname} created`, author: author });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

// getAllAuthors

const getAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll();
    res.status(201).json({ message: "Uploaded all authors", authors: authors });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

// // ------------------------- GET BY AUTHOR -------------------------
const getByAuthor = async (req, res) => {
  try {
    const author = await Author.findOne({
      where: {
        authorName: req.params.author,
      },
    });
    console.log(author);
    myId = author.dataValues.id;

    const books = await Book.findAll({
      where: {
        AuthorId: myId,
      },
      include: ["Author", "Genre"],
    });

    res.status(201).json({ message: `Successfull found book`, books: books });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

// ------------------------- DELETE BY AUTHOR -------------------------

const deleteByAuthor = async (req, res) => {
  const author = await Author.findOne({
    where: {
      authorName: req.body.toDelete,
    },
  });
  myId = author.dataValues.id;
  try {
    await Book.destroy({
      where: {
        AuthorId: myId,
      },
    });
    const books = await Book.findAll({ include: ["Author", "Genre"] });
    res.status(201).json({
      message: `Successfull deleted book where author is ${req.body.toDelete}`,
      books: books,
    });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

module.exports = {
  addAuthor: addAuthor,
  getAuthors: getAuthors,
  getByAuthor: getByAuthor,
  deleteByAuthor: deleteByAuthor,
};

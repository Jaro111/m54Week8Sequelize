const Book = require("./model");
const Author = require("../authors/model");
const Genre = require("../genres/model");

// ------------------------- ADD BOOK -------------------------
const addBook = async (req, res) => {
  try {
    const book = await Book.create({
      title: req.body.title,
      AuthorId: req.body.AuthorId,
      GenreId: req.body.GenreId,
    });
    res.status(201).json({ message: `${book.title} was added`, book: book });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

// ------------------------- GET BOOKS -------------------------
const getBooks = async (req, res) => {
  try {
    const books = await Book.findAll({ include: ["Genre", "Author"] });
    res.status(201).json({ message: "Succes read", books: books });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

// ------------------------- DELETE BY TITLE -------------------------
const deleteByTitle = async (req, res) => {
  try {
    await Book.destroy({
      where: {
        title: req.body.toDelete,
      },
    });

    const books = await Book.findAll();
    res.status(201).json({
      message: `Successfull deleted ${req.body.toDelete}`,
    });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

// ------------------------- DELETE ALL -------------------------
const deleteAll = async (req, res) => {
  try {
    await Book.destroy({
      truncate: true,
    });
    const books = Book.findAll();
    res.status(201).json({ message: "Deleted all books", books: books });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

// // ------------------------- GET BY TITLE -------------------------

const getByTitle = async (req, res) => {
  try {
    const book = await Book.findOne({
      where: {
        title: req.params.title,
      },
      include: ["Genre", "Author"],
    });
    console.log(book);
    res.status(201).json({ message: `Found ${book.title}`, book: book });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

// // ------------------------- UPDATE ON TITLE -------------------------
const updateOnTitle = async (req, res) => {
  try {
    if (req.params.toUpdate === "title") {
      await Book.update(
        { title: req.params.updated },
        {
          where: {
            title: req.params.title,
          },
        }
      );
      const book = await Book.findOne({
        where: {
          title: req.params.updated,
        },
        include: ["Genre", "Author"],
      });
      res.status(201).json({ message: `Successfull updated`, book: book });
      //
    } else if (req.params.toUpdate === "author") {
      //
      const author = await Author.findOne({
        where: {
          authorName: req.params.updated,
        },
      });
      const myId = author.dataValues.id;
      await Book.update(
        { AuthorId: myId },
        {
          where: {
            title: req.params.title,
          },
        }
      );
      const book = await Book.findOne({
        where: {
          title: req.params.title,
        },
        include: ["Genre", "Author"],
      });
      res.status(201).json({ message: "Successfull update", book: book });
      //
    } else if (req.params.toUpdate === "genre") {
      //
      const genre = await Genre.findOne({
        where: {
          genreName: req.params.updated,
        },
      });

      const myId = genre.dataValues.id;
      await Book.update(
        { GenreId: myId },
        {
          where: {
            title: req.params.title,
          },
        }
      );
      const book = await Book.findOne({
        where: {
          title: req.params.title,
        },
        include: ["Genre", "Author"],
      });
      res.status(201).json({ message: "Successfull update", book: book });
      console.log(res.status());
    }
  } catch (error) {
    res.status(501).json({
      message: "Cannot read properties of null (reading 'dataValues')",
      error: error,
    });
  }
};

module.exports = {
  addBook: addBook,
  getBooks: getBooks,
  // updateAuthor: updateAuthor,
  deleteAll: deleteAll,
  deleteByTitle: deleteByTitle,
  getByTitle: getByTitle,
  updateOnTitle: updateOnTitle,
};

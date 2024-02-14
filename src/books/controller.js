const Book = require("./model");

// ------------------------- ADD BOOK -------------------------
const addBook = async (req, res) => {
  try {
    const book = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
    });
    res.status(201).json({ message: `${book.title} was added`, book: book });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

// ------------------------- GET BOOKS -------------------------
const getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(201).json({ message: "Succes read", books: books });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

// ------------------------- UPDATE AUTHOR -------------------------

const updateAuthor = async (req, res) => {
  try {
    await Book.update(
      { author: req.body.authorToUpdate },
      {
        where: {
          title: req.body.chosenTitle,
        },
      }
    );
    const books = await Book.findAll();
    res.status(201).json({
      message: `Succesfull Updated ${req.body.chosenTitle}`,
      books: books,
    });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

// ------------------------- DELETE BY AUTHOR -------------------------

const deleteByAuthor = async (req, res) => {
  try {
    await Book.destroy({
      where: {
        author: req.body.toDelete,
      },
    });
    const books = await Book.findAll();
    res.status(201).json({
      message: `Successfull deleted book where author is ${req.body.toDelete}`,
      books: books,
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

// // ------------------------- GET BY AUTHOR -------------------------
// const getByAuthor = async (req, res) => {
//   try {
//     const book = await Book.findAll({
//       where: {
//         author: req.params.author,
//       },
//     });
//     const books = await Book.findAll();
//     res.status(201).json({ message: `Successfull found book`, book: book });
//   } catch (error) {
//     res.status(501).json({ message: message.error, error: error });
//   }
// };

// // ------------------------- UPDATE ON TITLE -------------------------
// const updateOnTitle = async (req, res) => {
//   try {
//     if (req.params.toUpdate === "title") {
//       const book = await Book.update(
//         { title: req.params.updated },
//         {
//           where: {
//             title: req.params.title,
//           },
//         }
//       );
//       res.status(201).json({ message: `Successfull updated`, book: book });
//     }
//   } catch (error) {
//     res.status(501).json({ message: message.error, error: error });
//   }
// };

module.exports = {
  addBook: addBook,
  getBooks: getBooks,
  updateAuthor: updateAuthor,
  deleteByAuthor: deleteByAuthor,
  getByAuthor: getByAuthor,
  deleteAll: deleteAll,
  updateOnTitle: updateOnTitle,
};

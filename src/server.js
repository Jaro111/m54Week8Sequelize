require("dotenv").config();
const express = require("express");
const Book = require("./books/model");
const Genre = require("./genres/model");
const Author = require("./authors/model");
const port = process.env.PORT || 5001;
const bookRouter = require("./books/routes");
const genreRouter = require("./genres/routes");
const authorRouter = require("./authors/routes");

const app = express();

app.use(express.json());

app.use(bookRouter);
app.use(genreRouter);
app.use(authorRouter);

const syncTables = async () => {
  Author.hasOne(Book);
  Book.belongsTo(Author);

  Genre.hasOne(Book);
  Book.belongsTo(Genre);

  await Genre.sync();
  // await Author.sync();
  // await Book.sync();
  await Author.sync({ alter: true });
  await Book.sync({ alter: true });
};

app.get("/health", (req, res) => {
  res.status(200).json({ message: "API healthy" });
});

app.listen(port, () => {
  syncTables();
  console.log(`Server is listening on port ${port}`);
});

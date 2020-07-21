const express = require("express");
const bookRouter = express.Router();
const bookController = require("../controllers/bookController");
const bookService = require("../Services/goodreadsServices");

function router(nav) {
  /* const books = [
    {
      title: "War and Peace",
      genre: "Historical Fiction",
      author: "Lev Niko Tolstoy",
      read: false,
    },
    {
      title: "War and Peace",
      genre: "Historical Fiction",
      author: "Lev Niko Tolstoy",
      read: false,
    },
    {
      title: "War and Peace",
      genre: "Historical Fiction",
      author: "Lev Niko Tolstoy",
      read: false,
    },
    {
      title: "War and Peace",
      genre: "Historical Fiction",
      author: "Lev Niko Tolstoy",
      read: false,
    },
  ]; */

  const { getIndex, getById, middleware } = bookController(bookService, nav);
  bookRouter.use(middleware);

  bookRouter.route("/").get(getIndex);

  bookRouter.route("/:id").get(getById);

  return bookRouter;
}

module.exports = router;

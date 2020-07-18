const express = require("express");
const bookRouter = express.Router();
const debug = require("debug")("app:bookRoutes");

function router(nav) {
  const books = [
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
  ];

  bookRouter.route("/").get((req, res) => {
    res.render("bookListView", {
      nav,
      title: "Library",
      books,
    });
  });

  bookRouter.route("/single").get((req, res) => {
    debug("");
    res.send("Hello Single books");
  });

  bookRouter.route("/:id").get((req, res) => {
    const { id } = req.params;
    res.render("bookView", {
      nav,
      title: "Library",
      book: books[id],
    });
  });

  return bookRouter;
}

module.exports = router;
const express = require("express");
const bookRouter = express.Router();

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
  res.render("books", {
    nav: [
      { link: "/books", title: "Books" },
      { link: "/authors", title: "Authors" },
    ],
    title: "Library",
    books,
  });
});

bookRouter.route("/single").get((req, res) => {
  res.send("Hello Single books");
});

module.exports = bookRouter;

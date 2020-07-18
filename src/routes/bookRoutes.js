const express = require("express");
const bookRouter = express.Router();
const { MongoClient } = require("mongodb");
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
    const url = "mongodb://localhost:27017";
    const dbname = "libraryApp";
    (async function mongo() {
      let client;
      try {
        client = await MongoClient.connect(url);
        debug("Connected correctly to server");

        const db = client.db(dbname);
        const col = await db.collection("books");
        const books = await col.find().toArray();

        res.render("bookListView", {
          nav,
          title: "Library",
          books,
        });
      } catch (err) {
        debug(err.stack);
      }

      client.close();
    })();
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

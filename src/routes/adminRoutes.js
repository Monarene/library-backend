const express = require("express");
const { MongoClient } = require("mongodb");
const debug = require("debug")("app:adminRoutes");
const adminRouter = express.Router();
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

function router() {
  adminRouter.route("/").get((req, res) => {
    const url = "mongodb://localhost:27017";
    const dbname = "libraryApp";

    (async function mongo() {
      let client;
      try {
        client = await MongoClient.connect(url);
        debug("Connected correctly to server");

        const db = client.db(dbname);
        const response = await db.collection("books").insertMany(books);
        res.json(response);
      } catch (err) {
        debug(err.stack);
      }

      client.close();
    })();
    res.send("Inserting books");
  });

  return adminRouter;
}
module.exports = router;

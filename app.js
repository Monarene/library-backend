const express = require("express");
const debug = require("debug")("app");
const chalk = require("chalk");
const morgan = require("morgan");
const path = require("path");

const app = express();
const bookRouter = express.Router();
app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(
  "/css",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "/node_modules/jquery/dist"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "/node_modules/popper.js/dist"))
);
app.set("views", "./src/views");
//app.set("view engine", "pug");
app.set("view engine", "ejs");

// Router
bookRouter.route("/").get((req, res) => {
  res.send("Hello Books");
});

bookRouter.route("/single").get((req, res) => {
  res.send("Hello Single books");
});

app.use("/books", bookRouter);

app.get("/", function (req, res) {
  //res.sendFile(path.join(__dirname, "views/index.html"));
  res.render("outdex", {
    nav: [
      { link: "/books", title: "Books" },
      { link: "/authors", title: "Authors" },
    ],
    title: "Library",
  });
});

app.listen(3000, function () {
  debug("app listening on port " + chalk.green("3000 "));
});

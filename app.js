var express = require("express");
var debug = require("debug")("app");
var chalk = require("chalk");
var morgan = require("morgan");
var path = require("path");

var app = express();
app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "/public")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.listen(3000, function () {
  debug("app listening on port " + chalk.green("3000 "));
});

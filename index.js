var mysql = require("mysql");
var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var path = require("path");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodelogin",
});

var app = express();

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname));
});

app.post("/auth", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  if (username && password) {
    connection.query(
      "SELECT * FROM accounts WHERE username = ? AND password = ?",
      [username, password],
      (error, results, field) => {
        if (results.length > 0) {
          req.session.login = true;
          req.session.username = username;
          res.send("hello" + username)
          console.log("WOOOOOO");
        } else {
          res.send("Incorrect");
        }
        res.end();
      }
    );
  } else {
    res.send("please Enter user");
    res.end();
  }
});

app.listen(8000)
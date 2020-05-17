const express = require("express");
const app = express();
const users = require("./src/db/users");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8000, () => {
  console.log("Start server at port 8000");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  // res.json(users.find(user => user.member_id === req.param.id))
  res.json(users.find((user) => user.member_id === req.params.id));
});

app.post("/users", (req, res) => {
  users.push(req.body);
  res.status(201).json(req.body);
});

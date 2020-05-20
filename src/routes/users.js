const express = require("express");

const router = express.Router();
const queries = require("../db/queries");

router.get("/users", (req, res) => {
  queries.users.getAll().then((users) => {
    res.json(users);
  });
});

router.get("/users/:id", (req, res) => {
  queries.users.getById(req.params.id).then((user) => res.json(user));
});

router.post("users", (req, res) => {
  queries.users.createUser(req.body).then((result) => res.send(result));
});

module.exports = router;

const express = require("express");

const router = express.Router();
const queries = require("../db/queries");

router.get("/users", (req, res) => {
  queries.users.getAll().then((users) => {
    res.json(users);
  });
});

module.exports = router;

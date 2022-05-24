var express = require("express");
const user = require("../models/user");
var router = express.Router();
const users = require("../models/user");

/* GET users listing. */
router.get("/:id/:password", async function (req, res, next) {
  const currentUser = await users.findOne({
    email: req.params.id,
    password: req.params.password,
  });

  if (currentUser != null) {
    res.send(currentUser.username);
  } else {
    res.send("false");
  }
});

router.put(
  "/register/:id/:password/:username",
  async function (req, res, next) {
    const existingemail = await users.findOne({
      email: req.params.id,
    });
    const existingUsername = await users.findOne({
      username: req.params.username,
    });

    if (existingemail != null || existingUsername != null) {
      res.send("false");
    } else {
      let currentUser = {
        email: req.params.id,
        password: req.params.password,
        username: req.params.username,
      };
      await users.create(currentUser);

      res.send("true");
    }
  }
);

module.exports = router;

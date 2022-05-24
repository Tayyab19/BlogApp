var express = require("express");
const user = require("../models/user");
var router = express.Router();
const users = require("../models/user");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const currentUser = await users.find({});
  res.json(currentUser);
});

//Sign a User In
router.get("/signin", async function (req, res, next) {
  const currentUser = await users.findOne({
    email: req.body.name,
    password: req.body.password,
  });

  if (currentUser != null) {
    res.send(currentUser.username);
  } else {
    res.send("false");
  }
});

//Delete a User
router.delete("/delete/:id", async function (req, res, next) {
  await blog.deleteOne({ blog_id: req.params.id });
  res.end("Deleted");
});

//Add a new User
router.post("/signup", async function (req, res, next) {
  const existingemail = await users.findOne({
    email: req.body.email,
  });
  const existingUsername = await users.findOne({
    username: req.body.username,
  });

  if (existingemail != null || existingUsername != null) {
    res.send("false");
  } else {
    let currentUser = {
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
    };
    await users.create(currentUser);

    res.send("true");
  }
});

module.exports = router;

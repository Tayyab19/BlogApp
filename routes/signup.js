var express = require("express");
const { default: mongoose } = require("mongoose");
var router = express.Router();
const signupschema = require("../models/signup");

router.post("/signup", (request, response) => {
  const signedUpUser = new signupschema({
    email: request.body.email,
    username: request.body.username,
    password: request.body.password,
    firstname: request.body.firstname,
    lastname: request.body.lastname,
  });

  signedUpUser
    .save()
    .then((signedUpUser) => {
      response.json(signedUpUser);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;

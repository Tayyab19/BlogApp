const mongoose = require("mongoose");

const signup_schema = mongoose.Schema({
  email: { type: String, require: true },
  username: { type: String, require: true },
  password: { type: String, require: true },
  firstname: { type: String },
  lastname: { type: String },
});

module.exports = mongoose.model("signup_table", signup_schema);

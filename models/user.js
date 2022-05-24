const mongoose = require("mongoose");

const schema = mongoose.Schema({
  username: { type: String, minlength: 5, required: true },
  password: { type: String, select: false, minlength: 6, required: true },
  email: { type: String, minlength: 5, required: true },
});

module.exports = mongoose.model("users", schema);

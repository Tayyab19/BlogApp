const mongoose = require("mongoose");

const schema = mongoose.Schema({
  blog_id: mongoose.Types.ObjectId,
  title: String,
  body: String,
  tags: Array,
  username: String,
});

module.exports = mongoose.model("blogs", schema);

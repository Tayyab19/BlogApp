var express = require("express");
const { default: mongoose } = require("mongoose");
var router = express.Router();
const blog = require("../models/blog");

// Return all blogs in database
router.get("/allBlogs/:username", async function (req, res, next) {
  const allBlogs = await blog.find({});
  res.json(allBlogs);
});

// Return all blogs of particular user in database
router.get("/blogs/:username", async function (req, res, next) {
  const BlogsByID = await blog.find({ username: req.params.username });
  res.json(BlogsByID);
});

// Delete blog from database
router.delete("/deleteBlog/:id", async function (req, res, next) {
  await blog.deleteOne({ blog_id: req.params.id });
  res.end("Deleted");
});

module.exports = router;

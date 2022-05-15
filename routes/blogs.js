var express = require('express');
const { default: mongoose } = require('mongoose');
var router = express.Router();
const blog = require('../models/blog');

// Return all blogs in database
router.get('/blogs', async function(req, res, next) {
  const allBlogs = await blog.find({});
  res.json(allBlogs);
});

// Return all blogs in database
router.get('/blogs/:id', async function(req, res, next) {
  const BlogsByID = await blog.find({blog_id: req.params.id});
  res.json(BlogsByID);
});

// Return all blogs in database
router.get('/deleteBlog/:id', async function(req, res, next) {
  await blog.deleteOne({blog_id: req.params.id});
  res.end("Deleted");
});


module.exports = router;

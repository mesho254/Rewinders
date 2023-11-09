const express = require('express');
const router = express.Router();
const { createPost, getPosts } = require('../Controllers/postController');

router.post('/create', createPost);
router.get('/getAllBlogs', getPosts);

module.exports = router;

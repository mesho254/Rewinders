const express = require('express');
const router = express.Router();
const { createPost, getPosts, getPostById} = require('../Controllers/postController');

router.post('/create', createPost);
router.get('/getAllBlogs', getPosts);
router.get('/getPost/:id', getPostById);

module.exports = router;

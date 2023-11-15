const express = require('express');
const router = express.Router();
const { createPost, getPosts, getPostById, updatePost, removePost} = require('../Controllers/postController');

router.post('/create', createPost);
router.get('/getAllBlogs', getPosts);
router.get('/getPost/:id', getPostById);
router.put('/updateBlog',updatePost)
router.delete('/deletePost', removePost)

module.exports = router;

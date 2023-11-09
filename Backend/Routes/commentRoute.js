const express = require('express');
const router = express.Router();
const { createComment, getComments } = require('../Controllers/commentController');

router.post('/create', createComment);
router.get('/allComments', getComments);

module.exports = router;

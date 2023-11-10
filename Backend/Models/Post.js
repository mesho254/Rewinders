const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid')

const postSchema = new mongoose.Schema({
  blogId: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: String,
  date: {
    type: Date,
    default: Date.now
  },

});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;

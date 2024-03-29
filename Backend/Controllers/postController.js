const Post = require('../Models/Post');

exports.createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newPost = new Post({ title, content, author });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve posts' });
  }
};

//  get a post by ID
exports.getPostById = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve the post' });
  }
};


// Remove a post by ID
exports.removePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const removedPost = await Post.findByIdAndRemove(postId);

    if (!removedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json({ message: 'Post removed successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to remove the post' });
  }
};

// Update a post by ID
exports.updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content, author } = req.body;

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { title, content, author },
      { new: true } // Return the modified document rather than the original
    );

    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update the post' });
  }
};
